
import HeroSection from "../components/home/HeroSection";
import FeaturedTours from "../components/home/FeaturedTours";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PopularDestinations from "../components/home/PopularDestination";
import VideoSection from "../components/home/VideoSection";
import RegionList from "./RegionList";
// import ProductListing from "./ProductListing";
//import ProductGrid from "../components/ProductGrid";

const Home = () => {


  
  
  return (
    <div>
      <HeroSection/>
      <RegionList/>
      <PopularDestinations/>
      <FeaturedTours/>
      <WhyChooseUs/>
      <VideoSection/>
    </div>
  );
};

export default Home;