import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import FeaturedProducts from "./components/FeaturedProducts"
import Latest from "./components/Home/Leatest"
import LatestProducts from "./components/LeatestProducts"
import Offers from "./components/Offers"


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <Offers/>
      <Footer/>
      
     
    </div>
  )
}

export default Home