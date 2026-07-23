type SeoCopy = {
  title: string;
  description: string;
};

const chineseStaticSeo: Record<string, SeoCopy> = {
  "/": {
    title: "网站开发、电子商务与定制软件",
    description:
      "NT Web Çözümleri 为企业规划并开发公司网站、电子商务解决方案、管理面板和定制软件系统。",
  },
  "/about": {
    title: "关于我们",
    description:
      "了解 NT Web Çözümleri、我们的工作流程，以及我们对网站和软件项目所采用的透明协作方式。",
  },
  "/blog": {
    title: "博客与知识中心",
    description:
      "涵盖网站、管理面板、电子商务、产品目录、预约系统、系统集成和定制软件的实用指南。",
  },
  "/contact": {
    title: "联系我们并提交项目需求",
    description:
      "联系 NT Web Çözümleri，讨论您的网站、在线商店、管理面板、预约系统或定制软件项目。",
  },
  "/portfolio": {
    title: "作品集与已完成项目",
    description:
      "查看 NT Web Çözümleri 已完成的客户项目、项目成果和客户评价。",
  },
  "/projects": {
    title: "在线演示与软件案例",
    description:
      "可在线查看并按需调整的网站、电子商务、管理面板、预约系统和定制软件案例。",
  },
  "/services": {
    title: "网站与软件开发服务",
    description:
      "网站、产品目录、订单系统、管理面板、CRM、预约、系统集成、自动化和定制软件服务。",
  },
};

export function getChineseStaticSeo(path: string, fallback: SeoCopy): SeoCopy {
  return chineseStaticSeo[path] ?? fallback;
}
