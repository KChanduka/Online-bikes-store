import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Brands from "./pages/Brands";
import Hero from "./pages/Hero";
import Offers from "./pages/Offers";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import OneProduct from "./pages/OneProduct";
import NavProducts from "./pages/NavProducts";
import NavServices from "./pages/NavServices";
import NavAboutus from "./pages/NavAboutus";
import NavBrands from "./pages/NavBrands";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import ProductGen from "./components/ProductGen";

import BikeAllProducts from "./pages/BikeAllProducts";
import ComponentAllProducts from "./pages/ComponentAllProducts";
import ApperalAllProducts from "./pages/ApperalAllProducts";
import AcessoriesAllProducts from "./pages/AcessoriesAllProducts";

import AdminDelete from "./pages/AdminDelete";
import AdminUpdaate from "./pages/AdminUpdaate";


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
        
        <Routes>
          <Route  path="/home"  element={ <Hero/>}/>  
          <Route  path="/"  element={ <Hero/>}/>  
          <Route  path="/login/admin/delete-products/home"  element={ <Hero/>}/>  
          <Route  path="/login/admin/update-products/home"  element={ <Hero/>}/>  
          <Route exact path="/products"  element={ <NavProducts/>}/>  
          <Route exact path="/services"  element={ <NavServices/>}/>  
          <Route exact path="/brands"  element={ <NavBrands/>}/>  
          <Route exact path="/about"  element={ <NavAboutus/>}/> 
          <Route exact path="/login"  element={ <Login/>}/> 
          <Route exact path="/products/bikes"  element={ <BikeAllProducts/>}/> 
          <Route exact path="/products/components"  element={ <ComponentAllProducts/>}/> 
          <Route exact path="/products/apperal"  element={ <ApperalAllProducts/>}/> 
          <Route exact path="/products/accessories"  element={ <AcessoriesAllProducts/>}/> 
          <Route  path="/login/admin/add-products"  element={ <Admin/>}/> 
          <Route  path="/login/admin"  element={ <Admin/>}/> 
          <Route  path="/login/admin/contact"  element={ <Hero/>}/> 
          <Route  path="/login/home"  element={ <Hero/>}/> 
          <Route exact path="/login/admin/delete-products"  element={ <AdminDelete/>}/> 
          <Route exact path="/login/admin/update-products"  element={ <AdminUpdaate/>}/> 
        </Routes>


  


      <Footer />

  
      </div> 
    // </div>
  );
}

export default App;
