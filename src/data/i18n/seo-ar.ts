type SeoCopy = {
  title: string;
  description: string;
};

const arabicStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "تطوير المواقع والبرمجيات المخصصة",
    description:
      "تخطط NT Web Çözümleri وتطور مواقع الشركات وحلول التجارة الإلكترونية ولوحات الإدارة والأنظمة البرمجية المخصصة.",
  },
  "/about": {
    title: "من نحن",
    description:
      "تعرّف على NT Web Çözümleri وطريقة عملنا ونهجنا الواضح في تنفيذ مشاريع الويب والبرمجيات.",
  },
  "/blog": {
    title: "المدونة ومركز المعرفة",
    description:
      "أدلة عملية حول مواقع الويب ولوحات الإدارة والتجارة الإلكترونية والكتالوجات والحجوزات والتكاملات والبرمجيات المخصصة.",
  },
  "/contact": {
    title: "تواصل معنا واطلب مشروعك",
    description:
      "تواصل مع NT Web Çözümleri لمناقشة موقعك أو متجرك الإلكتروني أو لوحة الإدارة أو نظام الحجز أو البرنامج المخصص.",
  },
  "/portfolio": {
    title: "معرض الأعمال والمشاريع المنجزة",
    description:
      "مشاريع عملاء منجزة ونتائج وتقييمات ضمن معرض أعمال NT Web Çözümleri.",
  },
  "/projects": {
    title: "نماذج حية وأمثلة للبرمجيات",
    description:
      "أمثلة حية قابلة للتخصيص لمواقع الويب والتجارة الإلكترونية ولوحات الإدارة وأنظمة الحجز والبرمجيات المخصصة.",
  },
  "/services": {
    title: "خدمات الويب والبرمجيات",
    description:
      "مواقع وكتالوجات وأنظمة طلب ولوحات إدارة وCRM وحجوزات وتكاملات وأتمتة وبرمجيات مخصصة.",
  },
};

export function getArabicStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return arabicStaticSeo[path] ?? fallback;
}
