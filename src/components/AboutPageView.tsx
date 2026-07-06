"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { techStack } from "@/data/tech-stack";
import { getLocaleFromPath } from "@/lib/i18n";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { PageReveal, RevealItem } from "@/components/animations/PageReveal";

const aboutCopy = {
  tr: {
    kicker: "Hakkımızda",
    title: <>NT Web Çözümleri, işletmelerin ne alacağını <span className="text-gray-500">canlı örneklerle görerek</span> karar verebilmesi için kuruldu.</>,
    desc: "Web sitesi, katalog, randevu, e-ticaret, admin panel ve özel yazılım ihtiyaçlarında; sadece sözle anlatılan değil, canlı incelenebilen örnekler üzerinden ilerleyen bir çalışma anlayışı benimsiyoruz.",
    examplesCta: "Canlı Örnekleri İncele",
    contactCta: "İletişime Geç",
    stats: [["10+", "canlı örnek sistem"], ["Modüler", "uyarlanabilir yapı"], ["Net", "kapsam ve iletişim"]],
    approachKicker: "Yaklaşımımız",
    approachTitle: "Klasik ajans dili yerine, görülebilir ve anlaşılır sistemler",
    approach: [
      "Birçok işletme web sitesi yaptırmak isterken ne alacağını tam göremediği için kararsız kalır. Bu yüzden NT Web Çözümleri’nde canlı örnekler önemli bir yer tutar.",
      "Hazırlanan örnekler; farklı sektörlere uyarlanabilecek web sitesi, katalog, randevu, e-ticaret ve admin panel altyapılarını göstermek için kullanılır.",
      "Amaç, müşterinin sadece tasarıma değil; sitenin akışına, kullanımına ve işletmesine nasıl fayda sağlayacağına da bakarak karar verebilmesidir.",
    ],
    honestKicker: "Dürüst Sunum",
    honestTitle: "Canlı örnekler müşteri işi gibi gösterilmez",
    honestDesc: "Bu sitedeki canlı örnekler, gerçek müşteri işi gibi gösterilmez. Bunlar; farklı sektörlere uyarlanabilecek, çalışma mantığını göstermek için hazırlanmış örnek sistemlerdir.",
    honestNote: "Gerçek müşteri işleri oluştukça ve paylaşım izni oldukça ayrı şekilde referans olarak gösterilebilir.",
    teamKicker: "Ekip",
    teamTitle: "NT Web Çözümleri ekibi",
    teamDesc: "Projelerde teknik geliştirme, içerik akışı, görsel düzen ve müşteri sunumu birlikte düşünülür. Böylece sadece çalışan değil, müşteriye güven veren ve anlaşılır duran yapılar hazırlanır.",
    team: [
      ["İsmail Taner Erdoğan", "Web geliştirme, backend, admin panel, e-ticaret ve özel yazılım altyapıları", "Projelerin teknik tarafını, sistem mimarisini, sayfa akışını, veritabanı/API mantığını ve yayına hazırlık sürecini geliştirir."],
      ["Nisa Gökşen", "İçerik dili, görsel akış, müşteri sunumu ve proje düzeni desteği", "Sayfaların daha anlaşılır, düzenli ve müşteriye hitap eden bir yapıya kavuşması için içerik ve sunum tarafında destek sağlar."],
    ],
    principlesKicker: "Neden Bu Yaklaşım?",
    principlesTitle: "Müşteri ne alacağını baştan görebilmeli",
    principles: [
      ["Canlı örnekle gösterim", "Müşteri sadece açıklama okumaz; benzer çalışan örnekleri gezerek nasıl bir yapı alacağını daha net görebilir."],
      ["İşletmeye göre uyarlama", "Hazır kalıp mantığı yerine; renkler, metinler, sayfalar, modüller ve akış işletmenin ihtiyacına göre düzenlenir."],
      ["Net kapsam ve dürüst iletişim", "Proje başlamadan önce ne yapılacağı, hangi modüllerin dahil olduğu ve nelerin ekstra olacağı açık şekilde konuşulur."],
      ["Teslim öncesi önizleme", "Uygun projelerde yayına almadan önce canlı önizleme bağlantısı paylaşılır ve son kontroller birlikte yapılabilir."],
    ],
    scopeKicker: "Kapsam Sınırları",
    scopeTitle: "Hangi işleri alıyoruz, hangi işleri almıyoruz?",
    scopeDesc: "İyi proje sadece yapılacakları değil, yapılmayacakları da baştan konuşunca sağlıklı ilerler. Bu yüzden kapsamı netleşebilen, işletmeye gerçek fayda sağlayan ve sürdürülebilir işler öncelik alır.",
    workFit: [
      ["Aldığımız işler", "Kapsamı konuşulabilen web sitesi, katalog, randevu, satış sistemi, admin panel, entegrasyon, otomasyon, teknik SEO ve özel yazılım işleri."],
      ["Netleştirmeden başlamadığımız işler", "Hedefi, veri yapısı, kullanıcı rolleri veya teslim beklentisi hiç konuşulmadan acil başlatılmak istenen belirsiz işler."],
      ["Almadığımız işler", "Yasa dışı faaliyet, aldatıcı satış, spam, izinsiz veri toplama, kopya marka kullanımı veya üçüncü kişilerin haklarını ihlal eden talepler."],
      ["Ayrı uzmanlık isteyen işler", "Hukuki metin, vergi/muhasebe kararı, tıbbi karar, finansal tavsiye, resmi izin ve sektörel uygunluk yorumları."],
    ],
    responsibilityKicker: "Sorumluluk Ayrımı",
    responsibilityTitle: "Regülasyonlu projelerde teknik altyapı ve yasal sorumluluk ayrıdır",
    responsibilityDesc: "Sağlık, finans, ödeme, kişisel veri, üyelik, e-ticaret, rezervasyon veya benzeri alanlarda teknik sistem kurulabilir; ancak mevzuat, izin, metin ve operasyonel uygunluk tarafı ayrıca kontrol edilmelidir.",
    regulated: [
      ["Teknik altyapı", "Form, panel, randevu, ödeme yönlendirmesi, üyelik, dosya veya veri akışı teknik olarak planlanabilir ve geliştirilebilir."],
      ["Müşteri sorumluluğu", "Hangi verinin toplanacağı, hangi onayın alınacağı, hangi yasal metnin kullanılacağı ve sektörel izinlerin uygunluğu müşteri tarafından netleştirilmelidir."],
      ["Uzman kontrolü", "Sağlık, finans, ödeme, kişisel veri, e-ticaret, rezervasyon ve benzeri alanlarda hukuki/mali/sektörel kontrol ilgili uzmanlarla yapılmalıdır."],
    ],
    processKicker: "Çalışma Süreci",
    processTitle: "Nasıl çalışıyoruz?",
    process: [
      ["İhtiyaç dinlenir", "İşletmenin neye ihtiyacı olduğu, hedefi ve mevcut durumu netleştirilir."],
      ["Canlı örnek seçilir", "Size en yakın örnek sistem üzerinden nasıl uyarlanacağı konuşulur."],
      ["Sistem uyarlanır", "Sayfalar, içerikler, modüller ve tasarım işletmeye göre düzenlenir."],
      ["Önizleme paylaşılır", "Teslimden önce kontrol edilebilir bir canlı bağlantı paylaşılabilir."],
      ["Yayına alınır", "Onay sonrası site veya sistem yayına hazır hale getirilir."],
    ],
    techKicker: "Teknik Altyapı",
    techTitle: "Kullandığımız teknolojiler",
    finalTitle: "Hangi sistemin size uygun olduğunu bilmiyorsanız birlikte netleştirebiliriz.",
    finalDesc: "İşletmenizi, ihtiyacınızı ve varsa beğendiğiniz canlı örneği yazmanız yeterli. Size uygun sistem, kapsam ve ilerleme şekli birlikte belirlenebilir.",
    servicesCta: "Hizmetleri İncele",
  },
  en: {
    kicker: "About Us",
    title: <>NT Web Solutions was built so businesses can decide by <span className="text-gray-500">seeing live examples</span> of what they will get.</>,
    desc: "For websites, catalogs, appointments, e-commerce, admin panels, and custom software, we follow a working style based on explorable examples instead of vague explanations.",
    examplesCta: "Explore Live Examples",
    contactCta: "Contact Us",
    stats: [["10+", "live example systems"], ["Modular", "adaptable structure"], ["Clear", "scope and communication"]],
    approachKicker: "Our Approach",
    approachTitle: "Visible, understandable systems instead of generic agency talk",
    approach: [
      "Many businesses hesitate because they cannot clearly see what they will receive before starting a website or software project.",
      "Our examples show website, catalog, appointment, e-commerce, and admin panel structures that can be adapted to different sectors.",
      "The aim is to help the customer evaluate not only the design, but also the flow, usability, and business value of the system.",
    ],
    honestKicker: "Honest Presentation",
    honestTitle: "Live examples are not presented as customer projects",
    honestDesc: "The live examples on this site are not shown as real customer work. They are demo systems prepared to show how similar structures can work across sectors.",
    honestNote: "Completed customer projects can be shown separately as references when permission is available.",
    teamKicker: "Team",
    teamTitle: "The NT Web Solutions team",
    teamDesc: "Technical development, content flow, visual order, and customer presentation are planned together so the result works and feels trustworthy.",
    team: [
      ["İsmail Taner Erdoğan", "Web development, backend, admin panels, e-commerce, and custom software infrastructure", "Develops the technical side of projects, system architecture, page flows, database/API logic, and launch preparation."],
      ["Nisa Gökşen", "Content language, visual flow, customer presentation, and project organization support", "Supports the content and presentation side so pages become clearer, more organized, and more customer-friendly."],
    ],
    principlesKicker: "Why This Approach?",
    principlesTitle: "Customers should see what they will get from the beginning",
    principles: [
      ["Live example presentation", "The customer can browse similar working examples instead of only reading explanations."],
      ["Adapted to the business", "Colors, copy, pages, modules, and flows are arranged according to the business need."],
      ["Clear scope and honest communication", "What will be done, which modules are included, and what counts as extra work are discussed before starting."],
      ["Pre-delivery preview", "Where suitable, a live preview link can be shared before launch for final checks."],
    ],
    scopeKicker: "Scope Boundaries",
    scopeTitle: "What work do we accept, and what do we avoid?",
    scopeDesc: "A healthy project defines not only what will be done, but also what will not be included. Clear, useful, and sustainable work takes priority.",
    workFit: [
      ["Work we accept", "Websites, catalogs, appointment systems, sales systems, admin panels, integrations, automation, technical SEO, and custom software with a clear scope."],
      ["Work we do not start without clarification", "Urgent work with unclear goals, data structure, user roles, or delivery expectations."],
      ["Work we do not accept", "Illegal activity, deceptive sales, spam, unauthorized data collection, copied branding, or requests that violate third-party rights."],
      ["Work requiring separate expertise", "Legal texts, tax/accounting decisions, medical decisions, financial advice, official permits, and regulated-sector compliance interpretations."],
    ],
    responsibilityKicker: "Responsibility Separation",
    responsibilityTitle: "Technical infrastructure and legal responsibility are separate in regulated projects",
    responsibilityDesc: "Technical systems can be built for health, finance, payment, personal data, membership, e-commerce, reservation, and similar areas, but legal wording, permits, and operational compliance must be reviewed separately.",
    regulated: [
      ["Technical infrastructure", "Forms, panels, appointment flows, payment redirections, membership, files, and data flows can be technically planned and developed."],
      ["Customer responsibility", "What data is collected, what consent is required, which legal texts are used, and whether sector permits are suitable must be clarified by the customer."],
      ["Expert review", "Legal, financial, and sector-specific checks should be handled with the relevant experts in regulated areas."],
    ],
    processKicker: "Work Process",
    processTitle: "How do we work?",
    process: [
      ["Need is understood", "The business need, goal, and current situation are clarified."],
      ["A live example is selected", "The closest example system is used to discuss how it can be adapted."],
      ["The system is adapted", "Pages, content, modules, and design are arranged for the business."],
      ["Preview is shared", "A reviewable live preview link can be shared before delivery."],
      ["Launch is prepared", "After approval, the site or system is prepared for launch."],
    ],
    techKicker: "Technical Infrastructure",
    techTitle: "Technologies we use",
    finalTitle: "If you are not sure which system fits, we can clarify it together.",
    finalDesc: "Tell us about your business, your need, and any live example you liked. The right system, scope, and way forward can be defined together.",
    servicesCta: "Explore Services",
  },
  de: {
    kicker: "Über uns",
    title: <>NT Web Solutions wurde aufgebaut, damit Unternehmen durch <span className="text-gray-500">sichtbare Live-Beispiele</span> entscheiden können, was sie erhalten.</>,
    desc: "Bei Websites, Katalogen, Terminen, E-Commerce, Admin-Panels und individueller Software arbeiten wir nicht mit vagen Versprechen, sondern mit nachvollziehbaren Beispielen und klaren Strukturen.",
    examplesCta: "Live-Beispiele ansehen",
    contactCta: "Kontakt aufnehmen",
    stats: [["10+", "Live-Beispielsysteme"], ["Modular", "anpassbare Struktur"], ["Klar", "Umfang und Kommunikation"]],
    approachKicker: "Unser Ansatz",
    approachTitle: "Sichtbare und verständliche Systeme statt allgemeiner Agentursprache",
    approach: [
      "Viele Unternehmen zögern, weil sie vor Beginn einer Website oder Software nicht klar sehen, was sie erhalten.",
      "Unsere Beispiele zeigen Website-, Katalog-, Termin-, E-Commerce- und Admin-Panel-Strukturen, die an verschiedene Branchen angepasst werden können.",
      "Ziel ist, dass der Kunde nicht nur das Design, sondern auch Ablauf, Nutzung und geschäftlichen Nutzen des Systems bewerten kann.",
    ],
    honestKicker: "Ehrliche Darstellung",
    honestTitle: "Live-Beispiele werden nicht als Kundenprojekte dargestellt",
    honestDesc: "Die Live-Beispiele auf dieser Website werden nicht als echte Kundenarbeiten gezeigt. Es sind Demo-Systeme, die zeigen, wie ähnliche Strukturen in unterschiedlichen Branchen funktionieren können.",
    honestNote: "Abgeschlossene Kundenprojekte können separat als Referenzen gezeigt werden, wenn eine Freigabe vorhanden ist.",
    teamKicker: "Team",
    teamTitle: "Das Team von NT Web Solutions",
    teamDesc: "Technische Entwicklung, Inhaltsfluss, visuelle Ordnung und Kundendarstellung werden gemeinsam gedacht, damit das Ergebnis funktioniert und vertrauenswürdig wirkt.",
    team: [
      ["İsmail Taner Erdoğan", "Webentwicklung, Backend, Admin-Panels, E-Commerce und individuelle Software-Infrastruktur", "Entwickelt die technische Seite der Projekte, Systemarchitektur, Seitenabläufe, Datenbank/API-Logik und Launch-Vorbereitung."],
      ["Nisa Gökşen", "Unterstützung bei Inhaltssprache, visueller Struktur, Kundendarstellung und Projektordnung", "Unterstützt Inhalts- und Präsentationsseite, damit Seiten klarer, geordneter und kundenfreundlicher werden."],
    ],
    principlesKicker: "Warum dieser Ansatz?",
    principlesTitle: "Kunden sollten von Anfang an sehen, was sie bekommen",
    principles: [
      ["Darstellung mit Live-Beispiel", "Der Kunde liest nicht nur Erklärungen, sondern kann ähnliche funktionierende Beispiele ansehen."],
      ["Anpassung an das Unternehmen", "Farben, Texte, Seiten, Module und Abläufe werden nach dem Bedarf des Unternehmens geordnet."],
      ["Klarer Umfang und ehrliche Kommunikation", "Was gemacht wird, welche Module enthalten sind und was Zusatzarbeit ist, wird vor Beginn besprochen."],
      ["Vorschau vor der Lieferung", "Bei passenden Projekten kann vor dem Launch ein Live-Vorschau-Link für letzte Prüfungen geteilt werden."],
    ],
    scopeKicker: "Umfangsgrenzen",
    scopeTitle: "Welche Arbeiten nehmen wir an und welche nicht?",
    scopeDesc: "Ein gutes Projekt läuft gesund, wenn nicht nur die Aufgaben, sondern auch die Grenzen früh besprochen werden. Vorrang haben klare, nützliche und nachhaltige Arbeiten.",
    workFit: [
      ["Arbeiten, die wir annehmen", "Websites, Kataloge, Termin-, Verkaufs-, Admin-, Integrations-, Automations-, technische SEO- und individuelle Softwareprojekte mit klärbarem Umfang."],
      ["Arbeiten, die wir nicht ohne Klärung starten", "Eilige Arbeiten ohne klares Ziel, Datenstruktur, Nutzerrollen oder Liefererwartung."],
      ["Arbeiten, die wir nicht annehmen", "Illegale Aktivitäten, irreführender Verkauf, Spam, unbefugte Datenerhebung, kopierte Marken oder Anfragen, die Rechte Dritter verletzen."],
      ["Arbeiten mit separater Fachprüfung", "Rechtstexte, Steuer-/Buchhaltungsentscheidungen, medizinische Entscheidungen, Finanzberatung, behördliche Genehmigungen und regulierte Branchenprüfung."],
    ],
    responsibilityKicker: "Trennung der Verantwortung",
    responsibilityTitle: "Technische Infrastruktur und rechtliche Verantwortung sind bei regulierten Projekten getrennt",
    responsibilityDesc: "Für Gesundheit, Finanzen, Zahlung, personenbezogene Daten, Mitgliedschaft, E-Commerce, Reservierung und ähnliche Bereiche kann technische Infrastruktur gebaut werden; rechtliche Texte, Genehmigungen und operative Compliance müssen separat geprüft werden.",
    regulated: [
      ["Technische Infrastruktur", "Formulare, Panels, Terminabläufe, Zahlungsweiterleitungen, Mitgliedschaft, Dateien und Datenflüsse können technisch geplant und entwickelt werden."],
      ["Kundenverantwortung", "Welche Daten erhoben werden, welche Einwilligung nötig ist, welche Rechtstexte gelten und ob Branchenfreigaben passen, muss der Kunde klären."],
      ["Fachprüfung", "Rechtliche, finanzielle und branchenspezifische Kontrollen sollten in regulierten Bereichen mit zuständigen Fachleuten erfolgen."],
    ],
    processKicker: "Arbeitsprozess",
    processTitle: "Wie arbeiten wir?",
    process: [
      ["Bedarf verstehen", "Der Bedarf, das Ziel und der aktuelle Stand des Unternehmens werden geklärt."],
      ["Live-Beispiel wählen", "Über das nächstliegende Beispielsystem wird besprochen, wie es angepasst werden kann."],
      ["System anpassen", "Seiten, Inhalte, Module und Design werden an das Unternehmen angepasst."],
      ["Vorschau teilen", "Vor der Übergabe kann ein prüfbarer Live-Link geteilt werden."],
      ["Launch vorbereiten", "Nach Freigabe wird die Website oder das System für den Launch vorbereitet."],
    ],
    techKicker: "Technische Infrastruktur",
    techTitle: "Technologien, die wir nutzen",
    finalTitle: "Wenn Sie nicht sicher sind, welches System passt, können wir es gemeinsam klären.",
    finalDesc: "Beschreiben Sie Ihr Unternehmen, Ihren Bedarf und falls vorhanden ein Live-Beispiel, das Ihnen gefällt. Das passende System, der Umfang und die Vorgehensweise können gemeinsam festgelegt werden.",
    servicesCta: "Leistungen ansehen",
  },
  fr: {
    kicker: "À propos",
    title: <>NT Web Solutions a été créé pour que les entreprises puissent décider en <span className="text-gray-500">voyant des exemples en direct</span> de ce qu&apos;elles recevront.</>,
    desc: "Pour les sites web, catalogues, rendez-vous, e-commerce, panneaux d'administration et logiciels sur mesure, nous avançons avec des exemples consultables plutôt qu'avec des explications vagues.",
    examplesCta: "Voir les exemples en direct",
    contactCta: "Nous contacter",
    stats: [["10+", "systèmes d'exemple en direct"], ["Modulaire", "structure adaptable"], ["Clair", "périmètre et communication"]],
    approachKicker: "Notre approche",
    approachTitle: "Des systèmes visibles et compréhensibles plutôt qu'un discours d'agence générique",
    approach: [
      "Beaucoup d'entreprises hésitent parce qu'elles ne voient pas clairement ce qu'elles recevront avant de lancer un projet web ou logiciel.",
      "Nos exemples montrent des structures de site, catalogue, rendez-vous, e-commerce et panneau d'administration adaptables à différents secteurs.",
      "L'objectif est d'aider le client à évaluer non seulement le design, mais aussi le parcours, l'usage et la valeur métier du système.",
    ],
    honestKicker: "Présentation honnête",
    honestTitle: "Les exemples en direct ne sont pas présentés comme des projets client",
    honestDesc: "Les exemples en direct de ce site ne sont pas montrés comme de vrais travaux client. Ce sont des systèmes de démonstration préparés pour montrer comment des structures similaires peuvent fonctionner selon les secteurs.",
    honestNote: "Les projets client terminés peuvent être présentés séparément comme références lorsque l'autorisation de partage existe.",
    teamKicker: "Équipe",
    teamTitle: "L'équipe NT Web Solutions",
    teamDesc: "Développement technique, flux de contenu, ordre visuel et présentation client sont pensés ensemble pour créer des structures utiles, claires et fiables.",
    team: [
      ["İsmail Taner Erdoğan", "Développement web, backend, panneaux d'administration, e-commerce et infrastructure logicielle sur mesure", "Développe la partie technique des projets, l'architecture système, les parcours de page, la logique base de données/API et la préparation à la mise en ligne."],
      ["Nisa Gökşen", "Langage de contenu, flux visuel, présentation client et soutien à l'organisation du projet", "Soutient la partie contenu et présentation afin que les pages soient plus claires, organisées et orientées client."],
    ],
    principlesKicker: "Pourquoi cette approche ?",
    principlesTitle: "Le client doit voir dès le départ ce qu'il recevra",
    principles: [
      ["Présentation par exemple en direct", "Le client ne lit pas seulement une explication ; il peut parcourir des exemples similaires qui fonctionnent."],
      ["Adaptation à l'entreprise", "Couleurs, textes, pages, modules et parcours sont organisés selon le besoin de l'entreprise."],
      ["Périmètre clair et communication honnête", "Ce qui sera fait, les modules inclus et ce qui constitue un extra sont discutés avant le début."],
      ["Aperçu avant livraison", "Lorsque le projet s'y prête, un lien d'aperçu en direct peut être partagé avant la mise en ligne pour les derniers contrôles."],
    ],
    scopeKicker: "Limites de périmètre",
    scopeTitle: "Quels travaux acceptons-nous, et lesquels évitons-nous ?",
    scopeDesc: "Un bon projet avance sainement quand ce qui ne sera pas fait est aussi discuté dès le départ. Les travaux clairs, utiles et durables sont prioritaires.",
    workFit: [
      ["Travaux acceptés", "Sites web, catalogues, systèmes de rendez-vous, systèmes de vente, panneaux d'administration, intégrations, automatisations, SEO technique et logiciels sur mesure avec périmètre clarifiable."],
      ["Travaux non lancés sans clarification", "Demandes urgentes avec objectif, structure de données, rôles utilisateurs ou attentes de livraison non clarifiés."],
      ["Travaux refusés", "Activité illégale, vente trompeuse, spam, collecte de données sans autorisation, copie de marque ou demandes violant les droits de tiers."],
      ["Travaux nécessitant une expertise séparée", "Textes juridiques, décisions fiscales/comptables, décisions médicales, conseils financiers, autorisations officielles et interprétations de conformité sectorielle."],
    ],
    responsibilityKicker: "Séparation des responsabilités",
    responsibilityTitle: "Dans les projets réglementés, l'infrastructure technique et la responsabilité légale sont séparées",
    responsibilityDesc: "Pour la santé, la finance, le paiement, les données personnelles, l'adhésion, l'e-commerce, la réservation et domaines similaires, l'infrastructure technique peut être construite ; les textes, autorisations et obligations réglementaires doivent être vérifiés séparément.",
    regulated: [
      ["Infrastructure technique", "Formulaires, panneaux, rendez-vous, redirections de paiement, adhésion, fichiers et flux de données peuvent être planifiés et développés techniquement."],
      ["Responsabilité client", "Le client doit clarifier quelles données sont collectées, quels consentements sont requis, quels textes juridiques sont utilisés et si les autorisations sectorielles conviennent."],
      ["Contrôle expert", "Dans les domaines santé, finance, paiement, données personnelles, e-commerce et réservation, les contrôles juridiques, financiers ou sectoriels doivent être faits avec les experts concernés."],
    ],
    processKicker: "Processus de travail",
    processTitle: "Comment travaillons-nous ?",
    process: [
      ["Compréhension du besoin", "Le besoin, l'objectif et la situation actuelle de l'entreprise sont clarifiés."],
      ["Choix d'un exemple en direct", "L'exemple le plus proche sert à discuter de l'adaptation possible."],
      ["Adaptation du système", "Pages, contenus, modules et design sont organisés selon l'entreprise."],
      ["Partage d'un aperçu", "Un lien en direct vérifiable peut être partagé avant la livraison."],
      ["Préparation du lancement", "Après validation, le site ou le système est préparé pour la mise en ligne."],
    ],
    techKicker: "Infrastructure technique",
    techTitle: "Technologies que nous utilisons",
    finalTitle: "Si vous ne savez pas quel système vous convient, nous pouvons le clarifier ensemble.",
    finalDesc: "Décrivez votre entreprise, votre besoin et, si vous en avez un, l'exemple en direct que vous aimez. Le bon système, le périmètre et la façon d'avancer peuvent être définis ensemble.",
    servicesCta: "Voir les services",
  },
  es: {
    kicker: "Sobre nosotros",
    title: <>NT Web Solutions nació para que las empresas puedan decidir <span className="text-gray-500">viendo ejemplos en vivo</span> de lo que recibirán.</>,
    desc: "Para sitios web, catálogos, citas, e-commerce, paneles de administración y software a medida, trabajamos con ejemplos explorables en lugar de explicaciones vagas.",
    examplesCta: "Ver ejemplos en vivo",
    contactCta: "Contactar",
    stats: [["10+", "sistemas de ejemplo en vivo"], ["Modular", "estructura adaptable"], ["Claro", "alcance y comunicación"]],
    approachKicker: "Nuestro enfoque",
    approachTitle: "Sistemas visibles y comprensibles en lugar de discurso genérico de agencia",
    approach: [
      "Muchas empresas dudan porque no pueden ver con claridad qué recibirán antes de iniciar un proyecto web o de software.",
      "Nuestros ejemplos muestran estructuras de sitio web, catálogo, citas, e-commerce y panel de administración que pueden adaptarse a distintos sectores.",
      "El objetivo es que el cliente evalúe no solo el diseño, sino también el flujo, el uso y el valor real para su negocio.",
    ],
    honestKicker: "Presentación honesta",
    honestTitle: "Los ejemplos en vivo no se presentan como proyectos de clientes",
    honestDesc: "Los ejemplos en vivo de este sitio no se muestran como trabajos reales de clientes. Son sistemas demo preparados para mostrar cómo pueden funcionar estructuras similares en distintos sectores.",
    honestNote: "Los proyectos de clientes completados pueden mostrarse por separado como referencias cuando existe permiso para compartirlos.",
    teamKicker: "Equipo",
    teamTitle: "El equipo de NT Web Solutions",
    teamDesc: "Desarrollo técnico, flujo de contenido, orden visual y presentación al cliente se piensan juntos para crear estructuras útiles, claras y confiables.",
    team: [
      ["İsmail Taner Erdoğan", "Desarrollo web, backend, paneles de administración, e-commerce e infraestructura de software a medida", "Desarrolla la parte técnica de los proyectos, la arquitectura del sistema, los flujos de página, la lógica de base de datos/API y la preparación para el lanzamiento."],
      ["Nisa Gökşen", "Lenguaje de contenido, flujo visual, presentación al cliente y apoyo en la organización del proyecto", "Apoya la parte de contenido y presentación para que las páginas sean más claras, ordenadas y orientadas al cliente."],
    ],
    principlesKicker: "¿Por qué este enfoque?",
    principlesTitle: "El cliente debe ver desde el principio qué recibirá",
    principles: [
      ["Presentación con ejemplo en vivo", "El cliente no solo lee una explicación; puede recorrer ejemplos similares que funcionan."],
      ["Adaptación al negocio", "Colores, textos, páginas, módulos y flujos se organizan según la necesidad de la empresa."],
      ["Alcance claro y comunicación honesta", "Lo que se hará, los módulos incluidos y lo que cuenta como extra se habla antes de empezar."],
      ["Vista previa antes de la entrega", "Cuando el proyecto lo permite, se puede compartir un enlace de vista previa en vivo antes del lanzamiento para las últimas revisiones."],
    ],
    scopeKicker: "Límites de alcance",
    scopeTitle: "¿Qué trabajos aceptamos y cuáles evitamos?",
    scopeDesc: "Un buen proyecto avanza mejor cuando también se habla desde el principio de lo que no se hará. Priorizamos trabajos claros, útiles y sostenibles.",
    workFit: [
      ["Trabajos que aceptamos", "Sitios web, catálogos, sistemas de citas, sistemas de venta, paneles de administración, integraciones, automatizaciones, SEO técnico y software a medida con alcance aclarable."],
      ["Trabajos que no iniciamos sin aclaración", "Solicitudes urgentes sin objetivo, estructura de datos, roles de usuario o expectativas de entrega claras."],
      ["Trabajos que no aceptamos", "Actividad ilegal, ventas engañosas, spam, recopilación de datos sin autorización, uso de marcas copiadas o solicitudes que vulneren derechos de terceros."],
      ["Trabajos que requieren revisión especializada", "Textos legales, decisiones fiscales/contables, decisiones médicas, asesoría financiera, permisos oficiales e interpretaciones de cumplimiento sectorial."],
    ],
    responsibilityKicker: "Separación de responsabilidades",
    responsibilityTitle: "En proyectos regulados, la infraestructura técnica y la responsabilidad legal son separadas",
    responsibilityDesc: "En salud, finanzas, pagos, datos personales, membresías, e-commerce, reservas y áreas similares se puede construir la infraestructura técnica; pero textos, permisos y cumplimiento operativo deben revisarse por separado.",
    regulated: [
      ["Infraestructura técnica", "Formularios, paneles, flujos de citas, redirecciones de pago, membresías, archivos y flujos de datos pueden planificarse y desarrollarse técnicamente."],
      ["Responsabilidad del cliente", "El cliente debe aclarar qué datos se recopilan, qué consentimiento se requiere, qué textos legales se usan y si los permisos sectoriales son adecuados."],
      ["Revisión experta", "En áreas reguladas, las revisiones legales, financieras o sectoriales deben realizarse con los expertos correspondientes."],
    ],
    processKicker: "Proceso de trabajo",
    processTitle: "¿Cómo trabajamos?",
    process: [
      ["Se entiende la necesidad", "Se aclaran la necesidad, el objetivo y la situación actual de la empresa."],
      ["Se elige un ejemplo en vivo", "Se usa el sistema de ejemplo más cercano para hablar de cómo puede adaptarse."],
      ["Se adapta el sistema", "Páginas, contenidos, módulos y diseño se organizan según la empresa."],
      ["Se comparte una vista previa", "Antes de la entrega puede compartirse un enlace revisable en vivo."],
      ["Se prepara el lanzamiento", "Tras la aprobación, el sitio o sistema se prepara para salir en vivo."],
    ],
    techKicker: "Infraestructura técnica",
    techTitle: "Tecnologías que usamos",
    finalTitle: "Si no sabes qué sistema encaja contigo, podemos aclararlo juntos.",
    finalDesc: "Cuéntanos sobre tu empresa, tu necesidad y, si tienes uno, el ejemplo en vivo que te gustó. El sistema, el alcance y la forma de avanzar pueden definirse juntos.",
    servicesCta: "Ver servicios",
  },
  ar: {
    kicker: "من نحن",
    title: <>تأسست NT Web Solutions لكي تستطيع الشركات اتخاذ القرار عبر <span className="text-gray-500">رؤية أمثلة مباشرة</span> لما ستحصل عليه.</>,
    desc: "في مواقع الويب والكتالوجات والمواعيد والتجارة الإلكترونية ولوحات الإدارة والبرمجيات المخصصة، نعتمد أسلوب عمل قائم على أمثلة قابلة للتصفح بدلاً من وعود مبهمة.",
    examplesCta: "استعرض الأمثلة المباشرة",
    contactCta: "تواصل معنا",
    stats: [["10+", "أنظمة أمثلة مباشرة"], ["مرن", "هيكل قابل للتكييف"], ["واضح", "نطاق وتواصل"]],
    approachKicker: "منهجنا",
    approachTitle: "أنظمة مرئية ومفهومة بدلاً من لغة وكالة عامة",
    approach: [
      "تتردد كثير من الشركات لأنها لا ترى بوضوح ما ستحصل عليه قبل بدء مشروع موقع أو برنامج.",
      "الأمثلة لدينا تعرض هياكل موقع وكتالوج ومواعيد وتجارة إلكترونية ولوحة إدارة يمكن تكييفها مع قطاعات مختلفة.",
      "الهدف أن يقيّم العميل التصميم، ومسار الاستخدام، والقيمة العملية للنظام في نفس الوقت.",
    ],
    honestKicker: "عرض صادق",
    honestTitle: "الأمثلة المباشرة لا تُعرض كأنها مشاريع عملاء",
    honestDesc: "الأمثلة المباشرة في هذا الموقع ليست أعمال عملاء حقيقية. إنها أنظمة تجريبية توضّح كيف يمكن لهياكل مشابهة أن تعمل في قطاعات مختلفة.",
    honestNote: "يمكن عرض مشاريع العملاء المكتملة بشكل منفصل كمراجع عندما يتوفر إذن المشاركة.",
    teamKicker: "الفريق",
    teamTitle: "فريق NT Web Solutions",
    teamDesc: "يتم التفكير في التطوير التقني، تدفق المحتوى، الترتيب البصري وعرض المشروع للعميل معاً حتى تكون النتيجة عملية وواضحة وموثوقة.",
    team: [
      ["İsmail Taner Erdoğan", "تطوير ويب، backend، لوحات إدارة، تجارة إلكترونية وبنية برمجيات مخصصة", "يطوّر الجانب التقني للمشاريع، بنية النظام، تدفقات الصفحات، منطق قاعدة البيانات/API والتحضير للإطلاق."],
      ["Nisa Gökşen", "لغة المحتوى، التدفق البصري، عرض العميل وتنظيم المشروع", "تدعم جانب المحتوى والعرض لتصبح الصفحات أوضح وأكثر تنظيماً وأكثر ملاءمة للعميل."],
    ],
    principlesKicker: "لماذا هذا المنهج؟",
    principlesTitle: "يجب أن يرى العميل منذ البداية ما سيحصل عليه",
    principles: [
      ["عرض عبر مثال مباشر", "لا يقرأ العميل شرحاً فقط؛ بل يتصفح أمثلة عاملة مشابهة."],
      ["تكييف حسب الشركة", "الألوان والنصوص والصفحات والوحدات والمسارات تُرتّب حسب حاجة الشركة."],
      ["نطاق واضح وتواصل صادق", "ما سيتم عمله، ما الوحدات المشمولة، وما يُعد عملاً إضافياً، يتم توضيحه قبل البداية."],
      ["معاينة قبل التسليم", "عند مناسبة المشروع يمكن مشاركة رابط معاينة مباشر قبل الإطلاق للمراجعة النهائية."],
    ],
    scopeKicker: "حدود النطاق",
    scopeTitle: "ما الأعمال التي نقبلها وما الأعمال التي نتجنبها؟",
    scopeDesc: "المشروع الجيد يتقدم بشكل صحي عندما يتم توضيح ما لن يكون ضمن العمل أيضاً. لذلك نعطي الأولوية للأعمال الواضحة والمفيدة والقابلة للاستمرار.",
    workFit: [
      ["أعمال نقبلها", "مواقع ويب، كتالوجات، أنظمة مواعيد، أنظمة بيع، لوحات إدارة، تكاملات، أتمتة، SEO تقني وبرمجيات مخصصة ذات نطاق قابل للتوضيح."],
      ["أعمال لا نبدأها دون توضيح", "طلبات عاجلة بلا هدف واضح أو بنية بيانات أو أدوار مستخدم أو توقعات تسليم محددة."],
      ["أعمال لا نقبلها", "أنشطة غير قانونية، بيع مضلل، spam، جمع بيانات دون إذن، نسخ علامات تجارية أو طلبات تنتهك حقوق أطراف أخرى."],
      ["أعمال تحتاج خبرة منفصلة", "نصوص قانونية، قرارات ضريبية/محاسبية، قرارات طبية، نصائح مالية، تصاريح رسمية وتفسيرات امتثال قطاعي."],
    ],
    responsibilityKicker: "فصل المسؤوليات",
    responsibilityTitle: "في المشاريع المنظمة، البنية التقنية والمسؤولية القانونية منفصلتان",
    responsibilityDesc: "يمكن بناء البنية التقنية في الصحة، التمويل، الدفع، البيانات الشخصية، العضويات، التجارة الإلكترونية، الحجز ومجالات مشابهة؛ لكن النصوص والتصاريح والامتثال التشغيلي يجب مراجعتها بشكل منفصل.",
    regulated: [
      ["البنية التقنية", "يمكن تخطيط وتطوير النماذج واللوحات ومسارات المواعيد وتوجيهات الدفع والعضويات والملفات وتدفقات البيانات تقنياً."],
      ["مسؤولية العميل", "يجب على العميل توضيح البيانات التي ستُجمع، الموافقات المطلوبة، النصوص القانونية المستخدمة ومدى ملاءمة التصاريح القطاعية."],
      ["مراجعة متخصصة", "في المجالات المنظمة يجب إجراء المراجعات القانونية أو المالية أو القطاعية مع الخبراء المناسبين."],
    ],
    processKicker: "آلية العمل",
    processTitle: "كيف نعمل؟",
    process: [
      ["فهم الحاجة", "يتم توضيح حاجة الشركة وهدفها ووضعها الحالي."],
      ["اختيار مثال مباشر", "يتم استخدام أقرب نظام مثال لمناقشة كيفية تكييفه."],
      ["تكييف النظام", "تُرتب الصفحات والمحتوى والوحدات والتصميم حسب الشركة."],
      ["مشاركة معاينة", "يمكن مشاركة رابط مباشر قابل للمراجعة قبل التسليم."],
      ["تجهيز الإطلاق", "بعد الموافقة، يتم تجهيز الموقع أو النظام للإطلاق."],
    ],
    techKicker: "البنية التقنية",
    techTitle: "التقنيات التي نستخدمها",
    finalTitle: "إذا لم تكن متأكداً من النظام المناسب لك، يمكننا توضيحه معاً.",
    finalDesc: "اكتب عن شركتك وحاجتك، وإن وجد مثال مباشر أعجبك. يمكن تحديد النظام والنطاق وطريقة التقدم المناسبة معاً.",
    servicesCta: "استعرض الخدمات",
  },
  pt: {
    kicker: "Sobre nós",
    title: <>A NT Web Solutions foi criada para que empresas decidam <span className="text-gray-500">vendo exemplos ao vivo</span> do que vão receber.</>,
    desc: "Para sites, catálogos, agendamentos, e-commerce, painéis administrativos e software sob medida, seguimos uma forma de trabalho baseada em exemplos navegáveis, não em explicações vagas.",
    examplesCta: "Ver exemplos ao vivo",
    contactCta: "Entrar em contato",
    stats: [["10+", "sistemas de exemplo ao vivo"], ["Modular", "estrutura adaptável"], ["Claro", "escopo e comunicação"]],
    approachKicker: "Nossa abordagem",
    approachTitle: "Sistemas visíveis e compreensíveis em vez de discurso genérico de agência",
    approach: [
      "Muitas empresas ficam indecisas porque não conseguem ver claramente o que receberão antes de iniciar um projeto de site ou software.",
      "Nossos exemplos mostram estruturas de site, catálogo, agendamento, e-commerce e painel administrativo que podem ser adaptadas a diferentes setores.",
      "O objetivo é ajudar o cliente a avaliar não só o design, mas também o fluxo, a usabilidade e o valor real do sistema para a empresa.",
    ],
    honestKicker: "Apresentação honesta",
    honestTitle: "Exemplos ao vivo não são apresentados como projetos de clientes",
    honestDesc: "Os exemplos ao vivo deste site não são mostrados como trabalhos reais de clientes. Eles são sistemas de demonstração preparados para mostrar como estruturas parecidas podem funcionar em diferentes setores.",
    honestNote: "Projetos concluídos de clientes podem ser mostrados separadamente como referências quando houver permissão de publicação.",
    teamKicker: "Equipe",
    teamTitle: "A equipe da NT Web Solutions",
    teamDesc: "Desenvolvimento técnico, fluxo de conteúdo, organização visual e apresentação ao cliente são planejados juntos para que o resultado funcione e transmita confiança.",
    team: [
      ["İsmail Taner Erdoğan", "Desenvolvimento web, backend, painéis administrativos, e-commerce e infraestrutura de software sob medida", "Desenvolve a parte técnica dos projetos, arquitetura do sistema, fluxos de páginas, lógica de banco de dados/API e preparação para lançamento."],
      ["Nisa Gökşen", "Apoio em linguagem de conteúdo, fluxo visual, apresentação ao cliente e organização do projeto", "Apoia a parte de conteúdo e apresentação para que as páginas fiquem mais claras, organizadas e próximas do cliente."],
    ],
    principlesKicker: "Por que essa abordagem?",
    principlesTitle: "O cliente deve ver desde o início o que vai receber",
    principles: [
      ["Apresentação com exemplo ao vivo", "O cliente não lê apenas explicações; ele navega por exemplos parecidos em funcionamento."],
      ["Adaptação ao negócio", "Cores, textos, páginas, módulos e fluxos são organizados conforme a necessidade da empresa."],
      ["Escopo claro e comunicação honesta", "O que será feito, quais módulos estão incluídos e o que conta como extra são discutidos antes do início."],
      ["Prévia antes da entrega", "Em projetos adequados, um link de prévia ao vivo pode ser compartilhado antes do lançamento para os últimos controles."],
    ],
    scopeKicker: "Limites de escopo",
    scopeTitle: "Quais trabalhos aceitamos e quais evitamos?",
    scopeDesc: "Um bom projeto avança melhor quando não só o que será feito, mas também o que não será incluído, é discutido desde o início. Priorizamos trabalhos claros, úteis e sustentáveis.",
    workFit: [
      ["Trabalhos que aceitamos", "Sites, catálogos, sistemas de agendamento, sistemas de venda, painéis administrativos, integrações, automações, SEO técnico e software sob medida com escopo esclarecível."],
      ["Trabalhos que não iniciamos sem clareza", "Demandas urgentes sem objetivo, estrutura de dados, papéis de usuário ou expectativa de entrega claramente discutidos."],
      ["Trabalhos que não aceitamos", "Atividade ilegal, venda enganosa, spam, coleta de dados sem autorização, uso de marca copiada ou solicitações que violem direitos de terceiros."],
      ["Trabalhos que exigem expertise separada", "Textos jurídicos, decisões fiscais/contábeis, decisões médicas, consultoria financeira, permissões oficiais e interpretações de conformidade setorial."],
    ],
    responsibilityKicker: "Separação de responsabilidade",
    responsibilityTitle: "Em projetos regulados, infraestrutura técnica e responsabilidade legal são separadas",
    responsibilityDesc: "Sistemas técnicos podem ser criados para saúde, finanças, pagamentos, dados pessoais, associação, e-commerce, reservas e áreas parecidas; mas textos legais, permissões e conformidade operacional devem ser revisados separadamente.",
    regulated: [
      ["Infraestrutura técnica", "Formulários, painéis, fluxos de agendamento, redirecionamentos de pagamento, associação, arquivos e fluxos de dados podem ser planejados e desenvolvidos tecnicamente."],
      ["Responsabilidade do cliente", "Quais dados serão coletados, qual consentimento é necessário, quais textos legais serão usados e se as permissões setoriais são adequadas devem ser esclarecidos pelo cliente."],
      ["Revisão especializada", "Em áreas reguladas, revisões jurídicas, financeiras ou setoriais devem ser feitas com os especialistas correspondentes."],
    ],
    processKicker: "Processo de trabalho",
    processTitle: "Como trabalhamos?",
    process: [
      ["A necessidade é entendida", "A necessidade da empresa, o objetivo e a situação atual são esclarecidos."],
      ["Um exemplo ao vivo é escolhido", "O sistema de exemplo mais próximo é usado para discutir como ele pode ser adaptado."],
      ["O sistema é adaptado", "Páginas, conteúdos, módulos e design são organizados conforme a empresa."],
      ["A prévia é compartilhada", "Antes da entrega, um link ao vivo revisável pode ser compartilhado."],
      ["O lançamento é preparado", "Após a aprovação, o site ou sistema é preparado para lançamento."],
    ],
    techKicker: "Infraestrutura técnica",
    techTitle: "Tecnologias que usamos",
    finalTitle: "Se você não sabe qual sistema é adequado, podemos definir juntos.",
    finalDesc: "Conte sobre sua empresa, sua necessidade e, se houver, um exemplo ao vivo de que gostou. O sistema, o escopo e o caminho certo podem ser definidos juntos.",
    servicesCta: "Ver serviços",
  },
  it: {
    kicker: "Chi siamo",
    title: <>NT Web Solutions è nata per aiutare le aziende a decidere <span className="text-gray-500">vedendo esempi live</span> di ciò che riceveranno.</>,
    desc: "Per siti web, cataloghi, appuntamenti, e-commerce, pannelli amministrativi e software su misura lavoriamo con esempi navigabili, non con spiegazioni vaghe.",
    examplesCta: "Vedi esempi live",
    contactCta: "Contattaci",
    stats: [["10+", "sistemi di esempio live"], ["Modulare", "struttura adattabile"], ["Chiaro", "ambito e comunicazione"]],
    approachKicker: "Il nostro approccio",
    approachTitle: "Sistemi visibili e comprensibili invece del linguaggio generico da agenzia",
    approach: [
      "Molte aziende esitano perché non riescono a vedere chiaramente cosa riceveranno prima di iniziare un progetto web o software.",
      "I nostri esempi mostrano strutture di sito, catalogo, appuntamenti, e-commerce e pannello amministrativo adattabili a settori diversi.",
      "L'obiettivo è aiutare il cliente a valutare non solo il design, ma anche il flusso, l'uso e il valore reale del sistema per l'azienda.",
    ],
    honestKicker: "Presentazione onesta",
    honestTitle: "Gli esempi live non sono presentati come progetti clienti",
    honestDesc: "Gli esempi live di questo sito non vengono mostrati come lavori reali di clienti. Sono sistemi dimostrativi preparati per mostrare come strutture simili possono funzionare in settori diversi.",
    honestNote: "I progetti completati per clienti possono essere mostrati separatamente come referenze quando è disponibile il permesso di condivisione.",
    teamKicker: "Team",
    teamTitle: "Il team di NT Web Solutions",
    teamDesc: "Sviluppo tecnico, flusso dei contenuti, ordine visivo e presentazione al cliente vengono pensati insieme, così il risultato funziona e trasmette fiducia.",
    team: [
      ["İsmail Taner Erdoğan", "Sviluppo web, backend, pannelli amministrativi, e-commerce e infrastruttura software su misura", "Sviluppa la parte tecnica dei progetti, l'architettura del sistema, i flussi delle pagine, la logica database/API e la preparazione al lancio."],
      ["Nisa Gökşen", "Supporto su linguaggio dei contenuti, flusso visivo, presentazione al cliente e organizzazione del progetto", "Supporta contenuti e presentazione per rendere le pagine più chiare, ordinate e orientate al cliente."],
    ],
    principlesKicker: "Perché questo approccio?",
    principlesTitle: "Il cliente deve vedere fin dall'inizio cosa riceverà",
    principles: [
      ["Presentazione con esempio live", "Il cliente non legge solo spiegazioni; può navigare esempi simili già funzionanti."],
      ["Adattamento all'azienda", "Colori, testi, pagine, moduli e flussi vengono organizzati secondo l'esigenza aziendale."],
      ["Ambito chiaro e comunicazione onesta", "Cosa verrà fatto, quali moduli sono inclusi e cosa conta come extra vengono discussi prima dell'inizio."],
      ["Anteprima prima della consegna", "Nei progetti adatti, un link di anteprima live può essere condiviso prima del lancio per gli ultimi controlli."],
    ],
    scopeKicker: "Limiti di ambito",
    scopeTitle: "Quali lavori accettiamo e quali evitiamo?",
    scopeDesc: "Un buon progetto procede meglio quando fin dall'inizio si chiarisce anche ciò che non sarà incluso. Diamo priorità a lavori chiari, utili e sostenibili.",
    workFit: [
      ["Lavori che accettiamo", "Siti web, cataloghi, sistemi di appuntamento, sistemi di vendita, pannelli amministrativi, integrazioni, automazioni, SEO tecnico e software su misura con ambito chiaribile."],
      ["Lavori che non iniziamo senza chiarezza", "Richieste urgenti senza obiettivo, struttura dati, ruoli utente o aspettative di consegna chiaramente discussi."],
      ["Lavori che non accettiamo", "Attività illegali, vendite ingannevoli, spam, raccolta dati non autorizzata, uso di brand copiati o richieste che violano diritti di terzi."],
      ["Lavori che richiedono competenza separata", "Testi legali, decisioni fiscali/contabili, decisioni mediche, consulenza finanziaria, permessi ufficiali e interpretazioni di conformità settoriale."],
    ],
    responsibilityKicker: "Separazione delle responsabilità",
    responsibilityTitle: "Nei progetti regolamentati infrastruttura tecnica e responsabilità legale sono separate",
    responsibilityDesc: "Per salute, finanza, pagamenti, dati personali, membership, e-commerce, prenotazioni e aree simili si può costruire l'infrastruttura tecnica; testi legali, permessi e conformità operativa devono essere verificati separatamente.",
    regulated: [
      ["Infrastruttura tecnica", "Form, pannelli, flussi di appuntamento, reindirizzamenti di pagamento, membership, file e flussi dati possono essere pianificati e sviluppati tecnicamente."],
      ["Responsabilità del cliente", "Quali dati vengono raccolti, quale consenso serve, quali testi legali vengono usati e se i permessi settoriali sono adeguati devono essere chiariti dal cliente."],
      ["Revisione specialistica", "Nelle aree regolamentate, le revisioni legali, finanziarie o settoriali devono essere svolte con gli specialisti competenti."],
    ],
    processKicker: "Processo di lavoro",
    processTitle: "Come lavoriamo?",
    process: [
      ["L'esigenza viene compresa", "Si chiariscono bisogno aziendale, obiettivo e situazione attuale."],
      ["Si sceglie un esempio live", "Il sistema di esempio più vicino viene usato per discutere come adattarlo."],
      ["Il sistema viene adattato", "Pagine, contenuti, moduli e design vengono organizzati per l'azienda."],
      ["Si condivide l'anteprima", "Prima della consegna può essere condiviso un link live verificabile."],
      ["Si prepara il lancio", "Dopo l'approvazione, il sito o sistema viene preparato per il lancio."],
    ],
    techKicker: "Infrastruttura tecnica",
    techTitle: "Tecnologie che usiamo",
    finalTitle: "Se non sai quale sistema è adatto, possiamo definirlo insieme.",
    finalDesc: "Raccontaci la tua azienda, la tua esigenza e, se c'è, un esempio live che ti piace. Sistema, ambito e percorso giusto possono essere definiti insieme.",
    servicesCta: "Vedi i servizi",
  },
  nl: {
    kicker: "Over ons",
    title: <>NT Web Solutions is opgericht zodat bedrijven kunnen beslissen door <span className="text-gray-500">live voorbeelden te zien</span> van wat ze krijgen.</>,
    desc: "Voor websites, catalogi, afspraken, e-commerce, beheerpaneels en maatwerksoftware werken we met navigeerbare voorbeelden in plaats van vage uitleg.",
    examplesCta: "Live voorbeelden bekijken",
    contactCta: "Contact opnemen",
    stats: [["10+", "live voorbeeldsystemen"], ["Modulair", "aanpasbare structuur"], ["Duidelijk", "scope en communicatie"]],
    approachKicker: "Onze aanpak",
    approachTitle: "Zichtbare en begrijpelijke systemen in plaats van algemene bureautaal",
    approach: [
      "Veel bedrijven twijfelen omdat ze vóór de start van een website- of softwareproject niet duidelijk zien wat ze zullen ontvangen.",
      "Onze voorbeelden tonen structuren voor websites, catalogi, afspraken, e-commerce en beheerpaneels die aan verschillende sectoren kunnen worden aangepast.",
      "Het doel is dat de klant niet alleen het ontwerp beoordeelt, maar ook de flow, het gebruik en de zakelijke waarde van het systeem.",
    ],
    honestKicker: "Eerlijke presentatie",
    honestTitle: "Live voorbeelden worden niet als klantprojecten gepresenteerd",
    honestDesc: "De live voorbeelden op deze site worden niet getoond als echte klantprojecten. Het zijn demosystemen die laten zien hoe vergelijkbare structuren in verschillende sectoren kunnen werken.",
    honestNote: "Afgeronde klantprojecten kunnen apart als referentie worden getoond wanneer er toestemming is.",
    teamKicker: "Team",
    teamTitle: "Het team van NT Web Solutions",
    teamDesc: "Technische ontwikkeling, contentflow, visuele ordening en klantpresentatie worden samen gepland, zodat het resultaat werkt en vertrouwen geeft.",
    team: [
      ["İsmail Taner Erdoğan", "Webontwikkeling, backend, beheerpaneels, e-commerce en maatwerksoftware-infrastructuur", "Ontwikkelt de technische kant van projecten, systeemarchitectuur, paginaflows, database/API-logica en voorbereiding op lancering."],
      ["Nisa Gökşen", "Ondersteuning voor contenttaal, visuele flow, klantpresentatie en projectstructuur", "Ondersteunt content en presentatie zodat pagina's duidelijker, georganiseerder en klantgerichter worden."],
    ],
    principlesKicker: "Waarom deze aanpak?",
    principlesTitle: "De klant moet vanaf het begin zien wat hij krijgt",
    principles: [
      ["Presentatie met live voorbeeld", "De klant leest niet alleen uitleg, maar kan vergelijkbare werkende voorbeelden bekijken."],
      ["Aanpassing aan het bedrijf", "Kleuren, teksten, pagina's, modules en flows worden volgens de behoefte van het bedrijf ingericht."],
      ["Duidelijke scope en eerlijke communicatie", "Wat wordt gedaan, welke modules inbegrepen zijn en wat extra werk is, wordt vóór de start besproken."],
      ["Preview vóór oplevering", "Bij geschikte projecten kan vóór lancering een live previewlink worden gedeeld voor laatste controles."],
    ],
    scopeKicker: "Scopegrenzen",
    scopeTitle: "Welke opdrachten nemen we aan en welke niet?",
    scopeDesc: "Een goed project loopt gezonder wanneer niet alleen het werk, maar ook de grenzen vroeg worden besproken. Duidelijke, nuttige en duurzame opdrachten krijgen prioriteit.",
    workFit: [
      ["Opdrachten die we aannemen", "Websites, catalogi, afsprakensystemen, verkoopsystemen, beheerpaneels, integraties, automatisering, technische SEO en maatwerksoftware met verduidelijkbare scope."],
      ["Opdrachten die we niet starten zonder duidelijkheid", "Spoedaanvragen zonder duidelijk doel, datastructuur, gebruikersrollen of opleververwachting."],
      ["Opdrachten die we niet aannemen", "Illegale activiteiten, misleidende verkoop, spam, ongeautoriseerde dataverzameling, gekopieerde merken of verzoeken die rechten van derden schenden."],
      ["Opdrachten die aparte expertise vragen", "Juridische teksten, fiscale/boekhoudkundige beslissingen, medische beslissingen, financieel advies, officiële vergunningen en sectorale compliance-interpretaties."],
    ],
    responsibilityKicker: "Scheiding van verantwoordelijkheid",
    responsibilityTitle: "Bij gereguleerde projecten zijn technische infrastructuur en juridische verantwoordelijkheid gescheiden",
    responsibilityDesc: "Voor zorg, finance, betalingen, persoonsgegevens, lidmaatschap, e-commerce, reserveringen en vergelijkbare gebieden kan technische infrastructuur worden gebouwd; juridische teksten, vergunningen en operationele compliance moeten apart worden gecontroleerd.",
    regulated: [
      ["Technische infrastructuur", "Formulieren, paneels, afspraakflows, betaalverwijzingen, lidmaatschap, bestanden en dataflows kunnen technisch worden gepland en ontwikkeld."],
      ["Verantwoordelijkheid van de klant", "Welke data wordt verzameld, welke toestemming nodig is, welke juridische teksten worden gebruikt en of sectorvergunningen passen, moet door de klant worden verduidelijkt."],
      ["Specialistische controle", "In gereguleerde gebieden moeten juridische, financiële en sectorspecifieke controles met relevante specialisten worden gedaan."],
    ],
    processKicker: "Werkwijze",
    processTitle: "Hoe werken we?",
    process: [
      ["Behoefte begrijpen", "De behoefte, het doel en de huidige situatie van het bedrijf worden verduidelijkt."],
      ["Live voorbeeld kiezen", "Het meest passende voorbeeldsysteem wordt gebruikt om te bespreken hoe het kan worden aangepast."],
      ["Systeem aanpassen", "Pagina's, content, modules en ontwerp worden ingericht voor het bedrijf."],
      ["Preview delen", "Vóór oplevering kan een controleerbare live previewlink worden gedeeld."],
      ["Lancering voorbereiden", "Na goedkeuring wordt de site of het systeem voorbereid voor lancering."],
    ],
    techKicker: "Technische infrastructuur",
    techTitle: "Technologieën die we gebruiken",
    finalTitle: "Als je niet zeker weet welk systeem past, kunnen we dat samen verduidelijken.",
    finalDesc: "Vertel over je bedrijf, je behoefte en eventueel een live voorbeeld dat je goed vindt. Het juiste systeem, de scope en de vervolgstap kunnen samen worden bepaald.",
    servicesCta: "Diensten bekijken",
  },
  zh: {
    kicker: "关于我们",
    title: <>NT Web Solutions 的建立，是为了让企业能够通过<span className="text-gray-500">查看在线示例</span>来判断自己将获得什么。</>,
    desc: "在网站、目录、预约、电商、管理面板和定制软件需求中，我们不只依靠抽象说明，而是基于可浏览、可理解的示例推进工作。",
    examplesCta: "查看在线示例",
    contactCta: "联系我们",
    stats: [["10+", "在线示例系统"], ["模块化", "可适配结构"], ["清晰", "范围和沟通"]],
    approachKicker: "我们的方式",
    approachTitle: "用可见、可理解的系统代替空泛的代理话术",
    approach: [
      "很多企业在启动网站或软件项目前会犹豫，因为它们看不清最终会得到什么。",
      "我们的示例展示可适配不同行业的网站、目录、预约、电商和管理面板结构。",
      "目标是让客户不仅看设计，也能评估系统流程、使用体验和对业务的实际价值。",
    ],
    honestKicker: "诚实展示",
    honestTitle: "在线示例不会被包装成客户项目",
    honestDesc: "本站的在线示例不会被展示为真实客户项目。它们是为了说明类似结构如何在不同行业中运作而准备的演示系统。",
    honestNote: "已完成的客户项目在获得许可后，可以作为参考案例单独展示。",
    teamKicker: "团队",
    teamTitle: "NT Web Solutions 团队",
    teamDesc: "项目中会同时考虑技术开发、内容流程、视觉秩序和客户呈现，让结果不仅能运行，也能让客户感到清晰和可信。",
    team: [
      ["İsmail Taner Erdoğan", "Web 开发、后端、管理面板、电商和定制软件基础设施", "负责项目技术侧、系统架构、页面流程、数据库/API 逻辑和上线准备。"],
      ["Nisa Gökşen", "内容语言、视觉流程、客户呈现和项目组织支持", "支持内容和呈现侧，让页面更清晰、更有秩序，也更贴近客户理解。"],
    ],
    principlesKicker: "为什么这样做？",
    principlesTitle: "客户应该从一开始就看清自己会得到什么",
    principles: [
      ["用在线示例展示", "客户不只是阅读说明，而是可以浏览类似的可运行示例。"],
      ["按企业适配", "颜色、文案、页面、模块和流程会根据企业需求重新安排。"],
      ["清晰范围和诚实沟通", "开始前会说明要做什么、包含哪些模块、哪些属于额外工作。"],
      ["交付前预览", "合适的项目可在上线前分享在线预览链接，用于最终检查。"],
    ],
    scopeKicker: "范围边界",
    scopeTitle: "哪些工作会接，哪些不会接？",
    scopeDesc: "健康的项目不只要说清要做什么，也要提前说明不包含什么。因此，范围能明确、对企业有实际价值并且可持续的工作会优先。",
    workFit: [
      ["我们承接的工作", "范围可沟通的网站、目录、预约系统、销售系统、管理面板、集成、自动化、技术 SEO 和定制软件。"],
      ["不明确前不会启动的工作", "目标、数据结构、用户角色或交付预期完全不清楚，却要求紧急开始的项目。"],
      ["我们不承接的工作", "非法活动、误导性销售、垃圾信息、未经授权的数据收集、复制品牌或侵犯第三方权利的需求。"],
      ["需要单独专业支持的工作", "法律文本、税务/会计决定、医疗决定、金融建议、官方许可和行业合规解释。"],
    ],
    responsibilityKicker: "责任区分",
    responsibilityTitle: "在受监管项目中，技术基础设施和法律责任是分开的",
    responsibilityDesc: "医疗、金融、支付、个人数据、会员、电商、预订等领域可以建设技术系统；但法规、许可、文本和运营合规需要单独检查。",
    regulated: [
      ["技术基础设施", "表单、面板、预约流程、支付跳转、会员、文件或数据流可以从技术上规划和开发。"],
      ["客户责任", "收集哪些数据、需要哪些同意、使用哪些法律文本以及行业许可是否合适，需要由客户明确。"],
      ["专家检查", "医疗、金融、支付、个人数据、电商、预订等领域的法律、财务或行业检查应由相关专家完成。"],
    ],
    processKicker: "工作流程",
    processTitle: "我们如何工作？",
    process: [
      ["理解需求", "明确企业需要什么、目标是什么以及当前情况。"],
      ["选择在线示例", "通过最接近的示例系统讨论如何适配。"],
      ["适配系统", "页面、内容、模块和设计会根据企业重新安排。"],
      ["分享预览", "交付前可以分享可检查的在线预览链接。"],
      ["准备上线", "确认后，网站或系统会准备上线或交付。"],
    ],
    techKicker: "技术基础设施",
    techTitle: "我们使用的技术",
    finalTitle: "如果您不确定哪种系统适合，我们可以一起明确。",
    finalDesc: "只需说明您的企业、需求，以及如果有的话您喜欢的在线示例。合适的系统、范围和推进方式可以一起确定。",
    servicesCta: "查看服务",
  },
  ru: {
    kicker: "О нас",
    title: <>NT Web Solutions создана, чтобы бизнес мог принимать решение, <span className="text-gray-500">видя живые примеры</span> того, что он получит.</>,
    desc: "Для сайтов, каталогов, записи, e-commerce, админ-панелей и индивидуального ПО мы работаем не с расплывчатыми обещаниями, а с понятными примерами, которые можно посмотреть.",
    examplesCta: "Посмотреть живые примеры",
    contactCta: "Связаться",
    stats: [["10+", "живых примеров систем"], ["Модульно", "адаптируемая структура"], ["Четко", "объем и коммуникация"]],
    approachKicker: "Наш подход",
    approachTitle: "Видимые и понятные системы вместо общей агентской речи",
    approach: [
      "Многие компании сомневаются, потому что до старта сайта или программного проекта не видят ясно, что именно получат.",
      "Наши примеры показывают структуры сайта, каталога, записи, e-commerce и админ-панели, которые можно адаптировать под разные отрасли.",
      "Цель в том, чтобы клиент оценивал не только дизайн, но и поток, удобство использования и реальную пользу системы для бизнеса.",
    ],
    honestKicker: "Честная подача",
    honestTitle: "Живые примеры не показываются как клиентские проекты",
    honestDesc: "Живые примеры на этом сайте не выдаются за реальные клиентские работы. Это demo-системы, которые показывают, как похожие структуры могут работать в разных отраслях.",
    honestNote: "Завершенные клиентские проекты могут показываться отдельно как референсы, когда есть разрешение на публикацию.",
    teamKicker: "Команда",
    teamTitle: "Команда NT Web Solutions",
    teamDesc: "Техническая разработка, поток контента, визуальный порядок и подача для клиента продумываются вместе, чтобы результат был рабочим, понятным и вызывающим доверие.",
    team: [
      ["İsmail Taner Erdoğan", "Web-разработка, backend, админ-панели, e-commerce и инфраструктура индивидуального ПО", "Разрабатывает техническую часть проектов, архитектуру системы, потоки страниц, логику базы данных/API и подготовку к запуску."],
      ["Nisa Gökşen", "Поддержка языка контента, визуального потока, клиентской подачи и порядка проекта", "Помогает со стороной контента и презентации, чтобы страницы были яснее, аккуратнее и ближе к клиенту."],
    ],
    principlesKicker: "Почему такой подход?",
    principlesTitle: "Клиент должен заранее видеть, что он получит",
    principles: [
      ["Показ через живой пример", "Клиент не только читает объяснение, а может пройти похожие работающие примеры."],
      ["Адаптация под бизнес", "Цвета, тексты, страницы, модули и потоки настраиваются под потребность компании."],
      ["Четкий объем и честная коммуникация", "Что будет сделано, какие модули входят и что считается дополнительной работой, обсуждается до старта."],
      ["Предпросмотр перед сдачей", "В подходящих проектах до запуска можно поделиться live preview ссылкой для финальной проверки."],
    ],
    scopeKicker: "Границы объема",
    scopeTitle: "Какие работы мы берем, а какие нет?",
    scopeDesc: "Здоровый проект начинается с обсуждения не только того, что будет сделано, но и того, что не входит в работу. Поэтому приоритет получают ясные, полезные и устойчивые проекты.",
    workFit: [
      ["Работы, которые мы берем", "Сайты, каталоги, системы записи, продажи, админ-панели, интеграции, автоматизация, технический SEO и индивидуальное ПО с уточняемым объемом."],
      ["Работы, которые не начинаем без уточнения", "Срочные задачи без понятной цели, структуры данных, ролей пользователей или ожиданий по сдаче."],
      ["Работы, которые не принимаем", "Незаконная деятельность, обманные продажи, spam, сбор данных без разрешения, копирование брендов или запросы, нарушающие права третьих лиц."],
      ["Работы, требующие отдельной экспертизы", "Юридические тексты, налоговые/бухгалтерские решения, медицинские решения, финансовые советы, официальные разрешения и отраслевые compliance-оценки."],
    ],
    responsibilityKicker: "Разделение ответственности",
    responsibilityTitle: "В регулируемых проектах техническая инфраструктура и юридическая ответственность разделены",
    responsibilityDesc: "Для здоровья, финансов, оплаты, персональных данных, членства, e-commerce, бронирования и похожих сфер можно построить техническую систему; но юридические тексты, разрешения и операционное соответствие должны проверяться отдельно.",
    regulated: [
      ["Техническая инфраструктура", "Формы, панели, потоки записи, платежные перенаправления, членство, файлы и потоки данных могут быть технически спланированы и разработаны."],
      ["Ответственность клиента", "Какие данные собираются, какое согласие требуется, какие юридические тексты используются и подходят ли отраслевые разрешения, должен уточнить клиент."],
      ["Проверка специалистами", "В регулируемых сферах юридические, финансовые и отраслевые проверки должны выполняться соответствующими специалистами."],
    ],
    processKicker: "Процесс работы",
    processTitle: "Как мы работаем?",
    process: [
      ["Понимаем потребность", "Уточняются потребность бизнеса, цель и текущая ситуация."],
      ["Выбираем живой пример", "Через ближайшую примерную систему обсуждается, как ее можно адаптировать."],
      ["Адаптируем систему", "Страницы, контент, модули и дизайн настраиваются под бизнес."],
      ["Делимся предпросмотром", "Перед сдачей можно поделиться live preview ссылкой для проверки."],
      ["Готовим запуск", "После согласования сайт или система готовится к запуску."],
    ],
    techKicker: "Техническая инфраструктура",
    techTitle: "Технологии, которые мы используем",
    finalTitle: "Если вы не уверены, какая система вам подходит, мы можем уточнить это вместе.",
    finalDesc: "Расскажите о бизнесе, потребности и, если есть, понравившемся живом примере. Подходящую систему, объем и способ движения можно определить вместе.",
    servicesCta: "Посмотреть услуги",
  },
};

export default function AboutPageView() {
  const locale = getLocaleFromPath(usePathname() ?? "/");
  const copy = locale === "en" ? aboutCopy.en : locale === "de" ? aboutCopy.de : locale === "fr" ? aboutCopy.fr : locale === "es" ? aboutCopy.es : locale === "ar" ? aboutCopy.ar : locale === "ru" ? aboutCopy.ru : locale === "pt" ? aboutCopy.pt : locale === "it" ? aboutCopy.it : locale === "nl" ? aboutCopy.nl : locale === "zh" ? aboutCopy.zh : aboutCopy.tr;

  return (
    <PageReveal className="content-page pt-32 pb-24 px-6 text-white max-w-7xl mx-auto">
      <RevealItem className="mb-14 relative overflow-hidden p-0">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.kicker}</p>
        <h1 className="mt-4 max-w-5xl text-4xl md:text-6xl font-medium tracking-tight leading-tight">{copy.title}</h1>
        <p className="mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-400">{copy.desc}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <LocalizedLink href="/projects" className="shimmer-button bg-white text-black px-7 py-3 rounded-sm text-sm font-bold transition-colors">{copy.examplesCta}</LocalizedLink>
          <LocalizedLink href="/contact" className="border border-white/20 text-white px-7 py-3 rounded-sm text-sm font-medium hover:bg-white/10 transition-colors">{copy.contactCta}</LocalizedLink>
        </div>
      </RevealItem>

      <div className="mb-10 grid grid-cols-3 gap-3 sm:gap-4">
        {copy.stats.map(([value, label]) => (
          <RevealItem key={label} className="border border-white/10 bg-[#08162c]/88 p-6">
            <p className="text-xl md:text-3xl font-light text-white">{value}</p>
            <p className="mt-2 text-[11px] md:text-sm text-gray-500 leading-4">{label}</p>
          </RevealItem>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] mb-10">
        <RevealItem className="relative overflow-hidden p-0">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.approachKicker}</p>
          <h2 className="mt-4 text-3xl font-medium text-white">{copy.approachTitle}</h2>
          <div className="mt-6 space-y-5 text-gray-400 leading-8">{copy.approach.map((text) => <p key={text}>{text}</p>)}</div>
        </RevealItem>

        <RevealItem className="premium-panel relative overflow-hidden border border-white/10 bg-[#08162c]/88 p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.honestKicker}</p>
          <h2 className="mt-4 text-3xl font-medium text-white">{copy.honestTitle}</h2>
          <p className="mt-6 text-gray-400 leading-8">{copy.honestDesc}</p>
          <div className="mt-6 border border-white/10 bg-white/5 p-4 text-sm leading-7 text-gray-300">{copy.honestNote}</div>
        </RevealItem>
      </div>

      <RevealItem className="mb-10 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.teamKicker}</p>
        <h2 className="mt-4 text-3xl font-medium text-white">{copy.teamTitle}</h2>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">{copy.teamDesc}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-6">
          {copy.team.map(([name, role, desc]) => (
            <div key={name} className="border border-white/10 bg-[#071225]/55 p-4 md:p-6">
              <h3 className="text-sm md:text-xl font-bold text-white">{name}</h3>
              <p className="mt-2 text-xs md:text-sm font-semibold leading-5 md:leading-6 text-gray-300">{role}</p>
              <p className="mobile-compact-text mt-3 md:mt-4 text-xs md:text-sm leading-5 md:leading-7 text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem className="mb-10 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.principlesKicker}</p>
        <h2 className="mt-4 text-3xl font-medium text-white">{copy.principlesTitle}</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {copy.principles.map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-5">
              <h3 className="font-bold text-white leading-6">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem className="mb-10 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.scopeKicker}</p>
        <h2 className="mt-4 text-3xl font-medium text-white">{copy.scopeTitle}</h2>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">{copy.scopeDesc}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {copy.workFit.map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-5">
              <h3 className="font-bold text-white leading-6">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </RevealItem>

      <RevealItem className="mb-10 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.responsibilityKicker}</p>
        <h2 className="mt-4 text-3xl font-medium text-white">{copy.responsibilityTitle}</h2>
        <p className="mt-4 max-w-4xl text-gray-400 leading-8">{copy.responsibilityDesc}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {copy.regulated.map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-[#071225]/55 p-5">
              <h3 className="font-bold text-white leading-6">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </RevealItem>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] mb-10">
        <RevealItem className="border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.processKicker}</p>
          <h2 className="mt-4 text-3xl font-medium text-white">{copy.processTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {copy.process.map(([title, text], index) => (
              <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-black">{index + 1}</div>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>

        <RevealItem className="premium-panel relative overflow-hidden border border-white/10 bg-[#08162c]/88 p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">{copy.techKicker}</p>
          <h2 className="mt-4 text-3xl font-medium text-white">{copy.techTitle}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => <span key={tech} className="tech-chip border border-white/10 bg-[#071225]/65 px-4 py-2 text-sm text-gray-400 rounded-sm">{tech}</span>)}
          </div>
          <div className="mt-8 border-t border-white/10 pt-8">
            <h3 className="text-2xl font-medium text-white">{copy.finalTitle}</h3>
            <p className="mt-4 text-gray-400 leading-8">{copy.finalDesc}</p>
            <LocalizedLink href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gray-300 transition-colors">
              {copy.servicesCta} <ArrowRight size={16} />
            </LocalizedLink>
          </div>
        </RevealItem>
      </div>
    </PageReveal>
  );
}
