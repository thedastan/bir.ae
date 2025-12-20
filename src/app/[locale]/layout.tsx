import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LayoutPage } from "@/components/layout/LayoutPage";
import type { ReactNode } from "react";

// ✅ params теперь Promise — нужно деструктурировать асинхронно
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>; // ← Promise!
}) {
  // ⚠️ Распаковываем params
  const { locale } = await params;

  // ✅ getMessages() работает без аргументов
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LayoutPage>{children}</LayoutPage>
    </NextIntlClientProvider>
  );
}
