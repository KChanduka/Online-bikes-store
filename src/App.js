import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Brands from "./pages/Brands";
import Hero from "./pages/Hero";
import Offers from "./pages/Offers";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import BikeAllProducts from "./pages/BikeAllProducts";
import OneProduct from "./pages/OneProduct";
import NavProducts from "./pages/NavProducts";
import NavServices from "./pages/NavServices";
import NavAboutus from "./pages/NavAboutus";
import NavBrands from "./pages/NavBrands";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import ProductGen from "./components/ProductGen";

function App() {
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:4000/bikes")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  // console.log(products);

  return (
    
    //  <div className=" px-20">
  //     <Navbar />
  //     <div className="p-10">
  //       <div className="grid sm:grid-cols-3 space-y-4">
  //         {products &&
  //           products.map((product) => (
  //             <ProductCard
  //               name={product.name}
  //               price={product.price}
  //               imgUrl={product.imageURL}
  //             />
  //           ))}
  //       </div>
  //     </div>

       <div>
        <Navbar/>
        <Routes>
          <Route   path="/"  element={ <Hero/>}/>  
          <Route  exact path="/products"  element={ <NavProducts/>}/>  
          <Route exact path="/services"  element={ <NavServices/>}/>  
          <Route exact path="/brands"  element={ <NavBrands/>}/>  
          <Route exact path="/about"  element={ <NavAboutus/>}/> 
          <Route exact path="/login"  element={ <Login/>}/> 
          <Route exact path="/products/bikes"  element={ <BikeAllProducts/>}/> 
        </Routes>


  


      <Footer />

  
      </div> 
    // </div>
  );
}

export default App;
