import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Brands from "./pages/Brands";
import Hero from "./pages/Hero";
import Offers from "./pages/Offers";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import Admin from "./pages/Admin";


function App() {
  return <div    className=" px-20"  >

    {/* <Navbar/>
    <Hero/>
    <Offers/>
    <Brands/>
    <Testimonials/>
    <Footer/> 
     <Login/> */}
      <Admin/> 
  </div>;
}

export default App;
