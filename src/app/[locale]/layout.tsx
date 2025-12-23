// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LayoutPage } from "@/components/layout/LayoutPage";
import type { ReactNode } from "react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    // ❌ НЕТ <html>, НЕТ <body>!
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LayoutPage>{children}</LayoutPage>
    </NextIntlClientProvider>
  );
}
