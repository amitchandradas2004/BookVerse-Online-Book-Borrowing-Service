import Banner from "@/components/HomePage/Banner";
import FeaturedBooks from "@/components/HomePage/FeaturedBooks";
import Marquee from "@/components/HomePage/Marquee";

export default function Home() {
  return (
    <div>
      <Banner />
      <Marquee/>
      <FeaturedBooks/>
    </div>
  );
}
