import ContactPageView from "@/components/ContactPageView";
import { getLocalizedProjects } from "@/data/i18n/projects-en";
import { getLocalizedServices } from "@/data/i18n/services-en";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { getServerLocale } from "@/lib/server-locale";

type ContactSearchParams = {
  service?: string | string[];
  project?: string | string[];
  source?: string | string[];
  topic?: string | string[];
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<ContactSearchParams>;
}) {
  const locale = await getServerLocale();
  const params = await searchParams;
  const localizedServices = getLocalizedServices(servicesData, locale);
  const localizedProjects = getLocalizedProjects(projectsData, locale);

  return (
    <ContactPageView
      locale={locale}
      localizedServices={localizedServices}
      localizedProjects={localizedProjects}
      request={{
        interest: firstValue(params.service) || firstValue(params.project) || "none",
        source: firstValue(params.source) || "-",
        topic: firstValue(params.topic) || "-",
      }}
    />
  );
}
