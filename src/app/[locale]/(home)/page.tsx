import HomeComponents from "@/components/pages/home/HomeComponents";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "B1R",
  description: "B1R",
  url: "https://birae.vercel.app/",
  image: "/bir.png",
});

const Home = () => <HomeComponents />;

export default Home;
