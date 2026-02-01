"use client";

import Image from "next/image";
import React from "react";
import light from "@/assets/images/light2.png";
import light2 from "@/assets/images/light4.png";
import lattice1 from "@/assets/images/lattice2.png";
import lattice2 from "@/assets/images/lattice3.png";
import lattice3 from "@/assets/images/lattice.png";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useTranslations, useLocale } from "next-intl";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "alert-go";
import "alert-go/dist/notifier.css";

import { useState } from "react";
import PhoneInput from "phone-go";
import "phone-go/dist/phone-go.css";

interface IFormTelegram {
  name: string;
  phone: number;
  message: string;
}

const Contact = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [phone, setPhone] = useState("");

  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Number:  <b>${data.phone} </b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(
      `https://api.telegram.org/bot${"8350716333:AAGQgwqOvcm5cuo_8lIIuj_mkDbxZiAmo1s"}/sendMessage`,
      {
        chat_id: -1003456520848,
        parse_mode: "html",
        text: messageModel(data),
      },
    );
    reset();
    toast.success(t("success"), {
      position: "top-center",
      duration: 3000,
    });
  };

  return (
    <section
      id="contact"
      className="relative flex justify-center items-center h-[710px] md:h-[734]"
    >
      {/* Background */}
      <div className="w-full h-full overflow-hidden flex flex-col md:flex-row justify-start md:justify-between items-center relative">
        <div className="w-full h-full flex items-center">
          <Image className="hidden md:flex" src={lattice2} alt="img" />
        </div>

        <div className="absolute md:w-full flex justify-center items-center">
          <Image className="hidden md:flex ml-[-200px]" src={light} alt="img" />
          <Image className="md:hidden flex w-[500px]" src={light2} alt="img" />
        </div>

        <div className="w-full h-full flex justify-end items-end md:items-center mt-[500px] md:mt-auto">
          <Image className="hidden md:flex" src={lattice1} alt="img" />
          <Image className="md:hidden flex" src={lattice3} alt="img" />
        </div>
      </div>

      {/* Text + form (RTL only here) */}
      <div
        className="flex flex-col items-center gap-[40px] absolute z-10"
        // dir={isArabic ? "rtl" : "ltr"}
      >
        <TitleComponent
          className={`text-white ${isArabic ? "text-right" : "text-center"}`}
        >
          {t("title")}
        </TitleComponent>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px]"
        >
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder={t("name")}
            className={`border-[0.1px] border-[#313131] w-[300px] h-[64px]
              rounded-[40px] bg-[#000000] p-[15px] text-white outline-none text-[16px]
              ${isArabic ? "text-right placeholder:text-right" : "text-left"}
            `}
          />

          <PhoneInput
            {...register("phone", { required: true })}
            className="my-phone-input"
            value={phone}
            onChange={setPhone}
            defaultCountry="KG"
            placeholder={t("phone")}
          />

          <div className="" dir={isArabic ? "rtl" : "ltr"}>
            <textarea
              {...register("message", { required: true })}
              placeholder={t("message")}
              className={`w-[300px] h-[80px] bg-black rounded-[24px] outline-none p-[15px]
              text-white border-[0.1px] border-[#313131]
              ${isArabic ? "text-right placeholder:text-right" : "text-left"}
            `}
            />
          </div>

          <button
            type="submit"
            className="bg-white !text-black w-[300px] h-[44px] !rounded-[40px]"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
