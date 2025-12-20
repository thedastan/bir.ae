import HomeComponents from "@/components/pages/home/HomeComponents";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Bir",
  description: "Bir",
  url: "https://next-structure-seven.vercel.app/",
  image: "/bir.png",
});

const Home = () => <HomeComponents />;

export default Home;
