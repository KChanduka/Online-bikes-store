import React from 'react';
import Navbar from '../components/Navbar';

function NavServices() {
  return (
    <div>
        <div className="flex ">
        {/*  column 1 */}
        <div>
          <div className="bikes relative">
            <button className="text-6xl mt-9 py-10 relative group">
              WARRANTY
              <span className="absolute bg-white h-1 w-full left-[80px] bottom-2 transition-all duration-300 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 focus:opacity-100"></span>
            </button>
          </div>
          <div className="components">
            <button className="text-6xl mt-9 py-10">DREAM BIKE
            
             <span className="absolute bg-white h-1 w-full left-[80px] bottom-2 transition-all duration-300 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 focus:opacity-100"></span>
            </button>
          </div>
          <div className="accessoreis">
            <button className="text-6xl mt-9 py-10">REPAIR SHOP</button>
          </div>
          <div className="apperal">
            <button className="text-6xl mt-9 py-10">HOME DELIVERY</button>
          </div>
        </div>

        {/* column 2 - form */}
        <div className="mt-[110px] ml-[500px]">
          {/* input the form  */}
          
        </div>
      </div>
    </div>
  )
}

export default NavServices;