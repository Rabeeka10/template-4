import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./Products/FeaturedProducts";
import LatestProducts from "./Products/LatestProducts";
import OfferProducts from "./Products/Offer";
import { BannerPage } from "./Products/BannerPage";
import TrendingProducts from "./Products/TrendingProducs";
import DiscountItems from "./Products/DiscountItems";
import Categories from "./Products/Categories";
import Banner from "./Products/Banner2";
import Blogs from "./Products/LatestBlog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <FeaturedProducts/>
      <LatestProducts/>
      <OfferProducts/>
      <BannerPage/>
      <TrendingProducts/>
      <DiscountItems/>
      <Categories/>
      <Banner/>
      <Blogs/>
      <Footer/>
    </div>
  );
}
