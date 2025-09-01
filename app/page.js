import Navbar from "@/components/ui/navbar";
import HeroWithVideo from "@/components/ui/heroWithVideo";
import About from "@/components/ui/about";



export const metadata = {
  title: "Landing-Page",
};

export default function Home() {
  return (
 <div>
  <Navbar />
  <HeroWithVideo />
  <About />
  </div>
  );
}
