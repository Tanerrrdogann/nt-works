package com.authsystem.storageservice.config;

import com.authsystem.storageservice.repository.StoredObjectRepository;
import com.authsystem.storageservice.service.StorageEngineService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Component
@RequiredArgsConstructor
public class DemoStorageInitializer implements ApplicationRunner {

    private static final String DEMO_OWNER = "demo.user";

    private final StorageEngineService storageEngineService;
    private final StoredObjectRepository storedObjectRepository;

    @Value("${app.demo-data.enabled:false}")
    private boolean demoDataEnabled;

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        if (!demoDataEnabled || storedObjectRepository.count() > 0) {
            return;
        }

        storageEngineService.createFolder(DEMO_OWNER, "Documents");
        storageEngineService.createFolder(DEMO_OWNER, "Reports");
        storageEngineService.createFolder(DEMO_OWNER, "Media");
        upload("Documents/welcome.txt", "welcome.txt", "text/plain", """
                Welcome to the NT Works Cloud Storage demo.

                This workspace is read-only for visitors. Restarting the demo restores these same sample files.
                """);
        upload("Reports/storage-overview.md", "storage-overview.md", "text/markdown", """
                # Storage Overview

                - Encrypted local object storage
                - Object metadata and ownership
                - MinIO replication target prepared for production mode
                - Demo mode keeps the workspace read-only
                """);
        upload("Media/sample-notes.txt", "sample-notes.txt", "text/plain", """
                Sample media folder placeholder.
                Use production mode to enable uploads and replication queues.
                """);
    }

    private void upload(String objectKey, String fileName, String contentType, String content) {
        storageEngineService.upload(
                DEMO_OWNER,
                objectKey,
                new InMemoryMultipartFile(fileName, contentType, content.getBytes(StandardCharsets.UTF_8))
        );
    }

    private record InMemoryMultipartFile(String originalFilename, String contentType, byte[] content) implements MultipartFile {
        @Override
        public String getName() {
            return "file";
        }

        @Override
        public String getOriginalFilename() {
            return originalFilename;
        }

        @Override
        public String getContentType() {
            return contentType;
        }

        @Override
        public boolean isEmpty() {
            return content.length == 0;
        }

        @Override
        public long getSize() {
            return content.length;
        }

        @Override
        public byte[] getBytes() {
            return content;
        }

        @Override
        public InputStream getInputStream() {
            return new ByteArrayInputStream(content);
        }

        @Override
        public void transferTo(java.io.File dest) throws IOException {
            java.nio.file.Files.write(dest.toPath(), content);
        }
    }
}
