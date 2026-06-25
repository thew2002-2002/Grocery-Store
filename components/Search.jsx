import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search bg-[#E6E6E6] w-[600px] h-[50px] rounded-md px-4 relative border border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.3)]">
      <input
        type="text"
        placeholder="Search for products"
        className="w-full h-full outline-none border-0"
      />
      <button className=" w-10 h-10 rounded-full absolute right-2 top-[5px] z-50 flex items-center justify-center cursor-pointer hover:bg-gray-300 ">
        <IoSearchSharp size={30}  />
      </button>
      
    </div>
  )
}

export default Search
