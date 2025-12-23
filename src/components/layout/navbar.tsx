"use client";
import { PAGE } from "@/config/pages/public-page.config";
import { useTranslations } from "next-intl";

export const useNavbar = () => {
  const t = useTranslations("Header");
  return [
    {
      name: t("studies"),
      link: PAGE.HOME,
    },
    {
      name: t("services"),
      link: PAGE.HOME,
    },
    {
      name: t("about"),
      link: PAGE.HOME,
    },
  ];
};

export default useNavbar;
