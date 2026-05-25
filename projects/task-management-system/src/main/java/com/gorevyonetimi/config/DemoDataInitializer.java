package com.gorevyonetimi.config;

import com.gorevyonetimi.model.Task;
import com.gorevyonetimi.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class DemoDataInitializer implements CommandLineRunner {

    private final TaskRepository taskRepository;
    private final boolean demoDataEnabled;

    public DemoDataInitializer(TaskRepository taskRepository,
                               @Value("${app.demo-data.enabled:true}") boolean demoDataEnabled) {
        this.taskRepository = taskRepository;
        this.demoDataEnabled = demoDataEnabled;
    }

    @Override
    public void run(String... args) {
        if (!demoDataEnabled || taskRepository.count() > 0) {
            return;
        }

        List<Task> demoTasks = List.of(
                new Task(
                        "Proje sunum dosyasını hazırla",
                        "Ekran görüntüleri, kısa özellik listesi ve kurulum adımlarını tek dosyada toparla.",
                        "Yüksek",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(1).withHour(17).withMinute(0).withSecond(0).withNano(0)
                ),
                new Task(
                        "Haftalık görev raporunu kontrol et",
                        "PDF rapor çıktısında tamamlanan ve bekleyen görev sayılarını doğrula.",
                        "Orta",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(3).withHour(11).withMinute(30).withSecond(0).withNano(0)
                ),
                new Task(
                        "Kullanıcı arayüzü ekran görüntüsü al",
                        "Görev listesi, arama filtresi ve rapor butonları görünür olacak şekilde kayıt al.",
                        "Düşük",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(5).withHour(14).withMinute(15).withSecond(0).withNano(0)
                ),
                new Task(
                        "GitHub README metnini son kez oku",
                        "Kurulum, test ve çalıştırma komutlarının doğru göründüğünden emin ol.",
                        "Orta",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(7).withHour(10).withMinute(0).withSecond(0).withNano(0)
                ),
                new Task(
                        "Müşteri toplantısı notlarını toparla",
                        "Toplantıda konuşulan gereksinimleri görev listesine aktar.",
                        "Yüksek",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(2).withHour(15).withMinute(30).withSecond(0).withNano(0)
                ),
                new Task(
                        "Dashboard filtrelerini test et",
                        "Arama, tamamlanan görev ve bekleyen görev filtrelerini sırayla kontrol et.",
                        "Orta",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(4).withHour(13).withMinute(0).withSecond(0).withNano(0)
                ),
                new Task(
                        "PDF indirme akışını dene",
                        "Görev listesi PDF çıktısının doğru isimle oluştuğunu kontrol et.",
                        "Düşük",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(6).withHour(12).withMinute(0).withSecond(0).withNano(0)
                ),
                new Task(
                        "Yüksek öncelikli görevleri gözden geçir",
                        "Acil görevlerin açıklama ve tarih alanlarının dolu olduğunu doğrula.",
                        "Yüksek",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(1).withHour(9).withMinute(45).withSecond(0).withNano(0)
                ),
                new Task(
                        "Demo senaryosunu son kez çalıştır",
                        "Giriş, görev ekleme, tamamlama, silme ve rapor akışlarını hızlıca dene.",
                        "Orta",
                        "demo@example.com",
                        LocalDateTime.now().plusDays(8).withHour(16).withMinute(0).withSecond(0).withNano(0)
                )
        );

        Task completedTask = new Task(
                "Postman koleksiyonunu düzenle",
                "API endpoint örneklerini proje klasöründeki koleksiyonda güncel tut.",
                "Düşük",
                "demo@example.com",
                LocalDateTime.now().minusDays(1).withHour(16).withMinute(45).withSecond(0).withNano(0)
        );
        completedTask.setCompleted(true);

        taskRepository.saveAll(demoTasks);
        taskRepository.save(completedTask);
    }
}
