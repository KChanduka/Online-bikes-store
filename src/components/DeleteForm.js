import React from "react";

function DeleteForm() {
  return (
    <div className=" relative">
      <form>
        {/* input prduct name */}
        <div class="relative z-0 w-full mb-[50px] group">
          <input
            type="ProductName"
            name="productName"
            id="productName"
            class="block py-3.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="productName"
            class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product ID
          </label>
        </div>




        {/*Add button*/}
        <button className= "text-gray-100 hover:text-white border border-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-0 mr-2 mb-2 dark:border-gray-200 dark:text-gray-200 dark:hover:text-black dark:hover:bg-white dark:focus:ring-yellow-900  w-48 h-16 absolute mt-36">
          DELETE
        </button>
      </form>
    </div>
  );
}

export default DeleteForm;
