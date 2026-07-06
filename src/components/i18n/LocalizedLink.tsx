"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { localizePathForCurrent } from "@/lib/i18n";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const pathname = usePathname();
  const isInternalPath = href.startsWith("/");
  const localizedHref = isInternalPath ? localizePathForCurrent(href, pathname ?? "/") : href;

  return <Link href={localizedHref} {...props} />;
}
