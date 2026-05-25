package com.gorevyonetimi.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.servlet.HandlerInterceptor;

public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession(false);
        boolean isLoggedIn = session != null && session.getAttribute("userEmail") != null;

        String contextPath = request.getContextPath();
        String uri = request.getRequestURI();
        String path = contextPath.isEmpty() ? uri : uri.substring(contextPath.length());

        if (path.startsWith("/login") || path.startsWith("/css") || path.startsWith("/js") || path.startsWith("/webjars") || path.equals("/")) {
            return true;
        }

        if (!isLoggedIn) {
            response.sendRedirect(contextPath + "/login");
            return false;
        }
        return true;
    }
}
