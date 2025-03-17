
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturedTours from "../components/FeaturedTours";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularDestinations from "../components/PopularDestination";
import VideoSection from "../components/VideoSection";
// import ProductListing from "./ProductListing";
//import ProductGrid from "../components/ProductGrid";

const Home = () => {
  
  return (
    <div>
      <HeroSection/>
      <FeaturedTours/>
      <WhyChooseUs/>
      <PopularDestinations/>
      <VideoSection/>
    </div>
  );
};

export default Home;