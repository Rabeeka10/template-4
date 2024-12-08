import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import FeaturedProducts from "./components/FeaturedProducts"
import LeatestProducts from "./components/LeatestProducts"
import Offers from "./components/Offers"


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedProducts/>
      <LeatestProducts/>
      <Offers/>
      <Footer/>
      
     
    </div>
  )
}

export default Home