import Navbar from "@/components/ui/navbar";
import HeroWithVideo from "@/components/ui/heroWithVideo";



export const metadata = {
  title: "Landing-Page",
};

export default function Home() {
  return (
 <div>
  <Navbar />
  <HeroWithVideo />
  </div>
  );
}
