import React from 'react';
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useEffect,useState } from "react";

function ComponentAllProducts() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
      fetch("http://localhost:4000/components")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProducts(data);
        });
    }, []);
    
    console.log(products);
    return (
           <div className=" px-20">
        <Navbar/>
        <div className="p-10">
          <div className="grid sm:grid-cols-3 space-y-4">
            {products &&
              products.map((product) => (
                <ProductCard
                  name={product.name}
                  price={product.price}
                  imgUrl={product.imageURL}
                />
              ))}
          </div>
        </div>
        </div>
    );
}

export default ComponentAllProducts;