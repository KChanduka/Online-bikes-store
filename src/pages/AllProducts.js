import React from 'react';
import Navbar from '../components/Navbar';
import Pcard from '../components/ProductCard';

function AllProducts() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="mt-16">
        <Pcard/>
        </div>
    </div>

  )
}

export default AllProducts;