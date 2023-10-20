import React from 'react';
import notlike from '../assets/like/notliked.png';
import test from '../assets/test.png';

function productCard() {

  let productName= 'Product Name';
  let productPrice= 233.99;

  return (
    <div className='w-[400px] h-[400px] bg-slate-300  rounded-lg relavtive'>

      {/* like button*/}
      <button className=' absolute left-[460px] mt-2'>
        <img className='w-[45px]' src={notlike} alt="like" />
      </button>
      {/* image */}
      <div>
        <img src={test} alt="product" />
      </div>
      {/* name and price */}
      <div className='flex justify-around'>
        {/* name */}
        <div>
          <h1 className='text-black font-medium text-lg'>{productName}</h1>
        </div>

        {/* price */}
        <div>
          <h1 className='text-black font-medium text-lg'>${productPrice}</h1>
        </div>

      </div>
    </div>
  )
}

export default productCard;