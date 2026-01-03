"use client";
import { PAGE } from "@/config/pages/public-page.config";
import { useTranslations } from "next-intl";

export const useNavbar = () => {
  const t = useTranslations("Header");
  return [
    {
      name: t("studies"),
      link: PAGE.CASE,
    },
    {
      name: t("services"),
      link: PAGE.SERVICE,
    },
    {
      name: t("about"),
      link: PAGE.ABOUT,
    },
  ];
};

export default useNavbar;
