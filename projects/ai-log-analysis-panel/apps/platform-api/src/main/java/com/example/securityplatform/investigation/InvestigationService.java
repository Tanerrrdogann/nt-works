package com.example.securityplatform.investigation;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvestigationService {

    private final InvestigationSessionMemoryService sessionMemoryService;
    private final InvestigationIntentService intentService;
    private final InvestigationQueryOrchestrator queryOrchestrator;
    private final AiServiceClient aiServiceClient;

    public InvestigationService(
            InvestigationSessionMemoryService sessionMemoryService,
            InvestigationIntentService intentService,
            InvestigationQueryOrchestrator queryOrchestrator,
            AiServiceClient aiServiceClient
    ) {
        this.sessionMemoryService = sessionMemoryService;
        this.intentService = intentService;
        this.queryOrchestrator = queryOrchestrator;
        this.aiServiceClient = aiServiceClient;
    }

    public InvestigationResponse investigate(ChatMessageRequest request) {
        InvestigationSessionState sessionState = sessionMemoryService.getOrCreate(request.sessionId());
        InvestigationIntent intent = intentService.detectIntent(request.message(), sessionState);
        String actorReference = intentService.extractActorReference(request.message(), sessionState);
        InvestigationContext context = queryOrchestrator.buildContext(intent, request.message(), sessionState, actorReference);

        List<String> recommendations = context.recommendations();
        InvestigationPromptRequest promptRequest = new InvestigationPromptRequest(
                sessionState.sessionId(),
                intent.name(),
                request.message(),
                request.mode() == null || request.mode().isBlank() ? "technical" : request.mode(),
                context.targetType(),
                context.targetId(),
                context.targetLabel(),
                context.contextSummary(),
                context.facts(),
                recommendations,
                sessionState.conversationHistory()
        );
        InvestigationResponse response = callAiService(promptRequest, intent, context);
        List<String> responseRecommendations = response.recommendations() == null || response.recommendations().isEmpty()
                ? recommendations
                : response.recommendations();

        sessionMemoryService.remember(
                sessionState.sessionId(),
                intent,
                context.targetType(),
                context.targetId(),
                context.targetLabel(),
                request.message(),
                response.answer(),
                request.mode() == null || request.mode().isBlank() ? "technical" : request.mode(),
                responseRecommendations
        );

        return new InvestigationResponse(
                response.answer(),
                response.mode(),
                response.promptSummary(),
                sessionState.sessionId(),
                intent.name(),
                responseRecommendations,
                response.engine()
        );
    }

    private InvestigationResponse callAiService(
            InvestigationPromptRequest request,
            InvestigationIntent intent,
            InvestigationContext context
    ) {
        try {
            InvestigationResponse response = aiServiceClient.investigate(request);
            if (response != null && response.answer() != null && !response.answer().isBlank()) {
                return response;
            }
        } catch (RuntimeException ignored) {
            // Demo must keep working even when the optional AI service or external LLM is unavailable.
        }

        return fallbackResponse(request, intent, context);
    }

    private InvestigationResponse fallbackResponse(
            InvestigationPromptRequest request,
            InvestigationIntent intent,
            InvestigationContext context
    ) {
        String facts = context.facts().isEmpty()
                ? "Demo data is still initializing; refresh the workspace and try again."
                : String.join("; ", context.facts().stream().limit(4).toList());
        String target = context.targetLabel() == null || context.targetLabel().isBlank()
                ? "the current security view"
                : context.targetLabel();
        String answer = switch (intent) {
            case TOP_RISKY_ACTOR -> "The riskiest actor right now is " + target + ". Evidence: " + facts + ".";
            case ALERT_EXPLANATION -> "This alert matters because the platform evidence points to " + target + ". Evidence: " + facts + ".";
            case INCIDENT_SUMMARY -> "This incident groups related suspicious activity around " + target + ". Summary: " + facts + ".";
            case ACTOR_INVESTIGATION -> "Actor " + target + " deserves review based on these signals: " + facts + ".";
            case RECOMMENDATION -> "Recommended next steps for " + target + ": " + String.join("; ", context.recommendations().stream().limit(3).toList()) + ".";
            case GENERAL_SUMMARY -> "Current security picture: " + facts + ".";
        };

        return new InvestigationResponse(
                answer,
                request.mode(),
                context.contextSummary(),
                request.sessionId(),
                intent.name(),
                context.recommendations(),
                "platform-grounded-demo-fallback"
        );
    }
}
