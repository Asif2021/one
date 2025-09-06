import Navbar from "@/components/ui/navbar";
import HeroWithVideo from "@/components/ui/heroWithVideo";
import About from "@/components/ui/about";
import CustomDev from "@/components/ui/customDev";
import Planning from "@/components/ui/planning";
import CaseStudy from "@/components/ui/caseStudy";
import Intro from "@/components/ui/intro";
import Recognition from "@/components/ui/recognition";
import BlogsMedia from "@/components/ui/blogsMedia";
import ReachUs from "@/components/ui/reachUs";
import Location from "@/components/ui/location";
import Footer from "@/components/ui/footer";


export const metadata = {
  title: "Landing-Page",
};

export default function Home() {
  return (
<div>
  <Navbar />
  <div className="relative">
  <HeroWithVideo />
  {/* About Section overlaps upward */}
    <div className="relative z-10 -mt-15 bg-white rounded-t-[77px]">
  <About />
    </div>
  </div>
  <CustomDev/>
  <Planning/>
  <CaseStudy/>
  <Intro/>
  <Recognition/>
  <BlogsMedia/>
  <ReachUs/>
  <Location/>
  <Footer/>
</div>

  );
}
