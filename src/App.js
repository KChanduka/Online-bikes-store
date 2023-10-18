import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Brands from "./pages/Brands";
import Hero from "./pages/Hero";
import Offers from "./pages/Offers";
import Testimonials from "./pages/Testimonials";


function App() {
  return <div    className=" px-20"  >

    <Navbar/>
    <Hero/>
    <Offers/>
    <Brands/>
    <Testimonials/>
    <Footer/>
  </div>;
}

export default App;
