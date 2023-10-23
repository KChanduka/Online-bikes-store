import React from "react";
import AdminNavbar from "../components/AdminNavBar";
import Add from "../components/AddForm";
import Delete from "../components/DeleteForm";
import Update from "../components/UpdateForm";
import SelectBar from "../components/AdminSelectBar";

function Admin() {
  return (
    <div>
      <AdminNavbar className="navigation" />
      <SelectBar className="selectBar" />
      <div className="flex ">
        {/*  column 1 */}
        <div>
          <div className="bikes relative">
            <button className="text-6xl mt-9 py-10 relative group">
              BIKES
              <span className="absolute bg-white h-1 w-full left-[80px] bottom-2 transition-all duration-300 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 focus:opacity-100"></span>
            </button>
          </div>
          <div className="components">
            <button className="text-6xl mt-9 py-10">COMPONENTS
            
             <span className="absolute bg-white h-1 w-full left-[80px] bottom-2 transition-all duration-300 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 focus:opacity-100"></span>
            </button>
          </div>
          <div className="accessoreis">
            <button className="text-6xl mt-9 py-10">ACCESSORIES</button>
          </div>
          <div className="apperal">
            <button className="text-6xl mt-9 py-10">APPERAL</button>
          </div>
        </div>

        {/* column 2 - form */}
        <div className="mt-[110px] ml-[500px]">
          {/* input the form  */}
          <Add />
        </div>
      </div>
    </div>
  );
}

export default Admin;
