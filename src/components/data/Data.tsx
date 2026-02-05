import logo1 from "@/assets/logo_images/logo_image1.png";
import logo2 from "@/assets/logo_images/logo_image2.png";
import logo3 from "@/assets/logo_images/logo_image3.png";
import logo4 from "@/assets/logo_images/logo_image4.png";
import logo5 from "@/assets/logo_images/logo_image5.png";
import logo6 from "@/assets/logo_images/logo_image6.webp";
import logo7 from "@/assets/logo_images/logo_image7.webp";
import logo8 from "@/assets/logo_images/logo_image8.png";
import logo9 from "@/assets/logo_images/logo_image9.webp";
import logo10 from "@/assets/logo_images/logo_image10.webp";
import logo11 from "@/assets/logo_images/logo_image11.svg";
import logo12 from "@/assets/logo_images/logo_image12.webp";
import logo13 from "@/assets/logo_images/logo_image13.webp";
import logo14 from "@/assets/logo_images/logo_image14.webp";
import logo15 from "@/assets/logo_images/logo_image15.webp";
import logo16 from "@/assets/logo_images/logo_image16.png";
import logo17 from "@/assets/logo_images/logo_image17.webp";
import logo18 from "@/assets/logo_images/logo_image18.png";
import logo19 from "@/assets/logo_images/logo_image19.svg";
import logo20 from "@/assets/logo_images/logo_image20.png";
import logo21 from "@/assets/logo_images/logo_image21.webp";
import logo23 from "@/assets/logo_images/logo_image21.png";
import logo24 from "@/assets/logo_images/logo_image24.png";
// import logo22 from "@/assets/images/logo_project1.png";

import img1 from "@/assets/projects_images/project_image1.png";
import img2 from "@/assets/projects_images/project_image2.png";
import img3 from "@/assets/projects_images/project_image3.png";
import img4 from "@/assets/projects_images/project_image4.png";
import img5 from "@/assets/projects_images/project_image5.png";
import img6 from "@/assets/projects_images/project_image6.png";
import img7 from "@/assets/projects_images/project_image7.png";
import img8 from "@/assets/projects_images/project_image8.png";
import img9 from "@/assets/projects_images/project_image9.png";
import img10 from "@/assets/projects_images/project_image10.png";
import img11 from "@/assets/projects_images/project_image11.png";
import img12 from "@/assets/projects_images/project_image12.png";
import img13 from "@/assets/projects_images/project_image13.png";
import img14 from "@/assets/projects_images/project_image14.png";
import img15 from "@/assets/projects_images/project_image15.png";
import img16 from "@/assets/projects_images/project_image16.png";
import img17 from "@/assets/projects_images/project_image17.png";
import img18 from "@/assets/projects_images/project_image18.png";
import img19 from "@/assets/projects_images/project_image19.png";
import img20 from "@/assets/projects_images/project_image20.png";
import img21 from "@/assets/projects_images/project_image21.png";
import img23 from "@/assets/projects_images/project_image23.png";
import img24 from "@/assets/projects_images/project_image24.png";

import { useTranslations } from "next-intl";

export default function Data() {
  const t = useTranslations("Projects");

  return [
    {
      id: 1,
      logo: logo1,
      img: img1,
      title: t("card_title1"),
      description: t("card_description1"),
      link: "https://tezkyzmat.kg",
    },
    {
      id: 2,
      logo: logo2,
      img: img2,
      title: t("card_title2"),
      description: t("card_description2"),
      link: "https://sadygovestate.com",
    },
    {
      id: 3,
      logo: logo3,
      img: img3,
      title: t("card_title3"),
      description: t("card_description3"),
      link: "http://baytiklux.kg",
    },
    {
      id: 4,
      logo: logo4,
      img: img4,
      title: t("card_title4"),
      description: t("card_description4"),
      link: "https://asman-city.kg",
    },
    {
      id: 5,
      logo: logo5,
      img: img5,
      title: t("card_title5"),
      description: t("card_description5"),
      link: "https://www.zusammench.com",
    },
    {
      id: 6,
      logo: logo6,
      img: img6,
      title: t("card_title6"),
      description: t("card_description6"),
      link: "https://lambee.kg",
    },
    {
      id: 7,
      logo: logo7,
      img: img7,
      title: t("card_title7"),
      description: t("card_description7"),
      link: "https://soonunbelek.kg",
    },
    {
      id: 8,
      logo: logo8,
      img: img8,
      title: t("card_title8"),
      description: t("card_description8"),
      link: "https://www.no-homme.com",
    },
    {
      id: 9,
      logo: logo9,
      img: img9,
      title: t("card_title9"),
      description: t("card_description9"),
      link: "https://chicogolimoservice.us",
    },
    {
      id: 10,
      logo: logo10,
      img: img10,
      title: t("card_title10"),
      description: t("card_description10"),
      link: "https://redcherrysalon.com",
    },
    {
      id: 11,
      logo: logo11,
      img: img11,
      title: t("card_title11"),
      description: t("card_description11"),
      link: "https://osteoclinic.center",
    },
    {
      id: 12,
      logo: logo12,
      img: img12,
      title: t("card_title12"),
      description: t("card_description12"),
      link: "https://medskill.com.kg",
    },
    {
      id: 13,
      logo: logo13,
      img: img13,
      title: t("card_title13"),
      description: t("card_description13"),
      link: "https://genius-school.kg",
    },
    {
      id: 14,
      logo: logo14,
      img: img14,
      title: t("card_title14"),
      description: t("card_description14"),
      link: "https://ksa.kg",
    },
    {
      id: 15,
      logo: logo15,
      img: img15,
      title: t("card_title15"),
      description: t("card_description15"),
      link: "https://kyrgyzbridge.com",
    },
    {
      id: 16,
      logo: logo16,
      img: img16,
      title: t("card_title16"),
      description: t("card_description16"),
      link: "https://kurakfilm.com",
    },
    {
      id: 17,
      logo: logo17,
      img: img17,
      title: t("card_title17"),
      description: t("card_description17"),
      link: "https://kazshar.kz",
    },
    {
      id: 18,
      logo: logo18,
      img: img18,
      title: t("card_title18"),
      description: t("card_description18"),
      link: "https://vulkanplus.com",
    },
    {
      id: 19,
      logo: logo19,
      img: img19,
      title: t("card_title19"),
      description: t("card_description19"),
      link: "https://agrico-group.org",
    },
    {
      id: 20,
      logo: logo20,
      img: img20,
      title: t("card_title20"),
      description: t("card_description20"),
      link: "https://temir.ae",
    },
    {
      id: 21,
      logo: logo21,
      img: img21,
      title: t("card_title21"),
      description: t("card_description21"),
      link: "https://bellonaservice.kg",
    },
    {
      id: 22,
      logo: logo23,
      img: img23,
      title: t("card_title23"),
      description: t("card_description23"),
      link: "https://www.flowerburo.kg/",
    },
    {
      id: 23,
      logo: logo24,
      img: img24,
      title: t("card_title24"),
      description: t("card_description24"),
      link: "https://www.medicalswitzerland.ch/club?lang=en",
    },
  ];
}
