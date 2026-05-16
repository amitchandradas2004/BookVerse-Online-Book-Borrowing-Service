import Banner from "@/components/HomePage/Banner";
import BrowseByGenre from "@/components/HomePage/BrowseByGenre";
import Experience from "@/components/HomePage/Experience";
import FeaturedBooks from "@/components/HomePage/FeaturedBooks";
import Marquee from "@/components/HomePage/Marquee";

export default function Home() {
  return (
    <div>
      <Banner />
      <Marquee />
      <FeaturedBooks />
      <BrowseByGenre />
      <Experience />
    </div>
  );
}
