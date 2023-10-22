import React from 'react';
import notlike from '../assets/like/notliked.png';
import test from '../assets/test.png';

function productCard(props) {

  const productName= props.name;
  const productPrice= props.price;
  const imgUrl=props.imgUrl;

  return (
    <div className='w-[450px] h-[450px] bg-white  rounded-lg mt-4'>

      {/* like button*/}
      <button className='mt-2'>
        <img className='w-[45px] ' src={notlike} alt="like" />
      </button>
      {/* image */}
      <div>
        <img className="p-2 rounded-2xl" src={imgUrl} alt="product" />
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