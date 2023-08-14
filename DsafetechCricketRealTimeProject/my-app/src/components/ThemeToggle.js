import React, {  useState } from 'react'
import {default as img} from "../assets/images/avatar.webp"

const Toggle = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
   

  return (
    <>
  <div className="relative">
      <button
        onClick={toggleDropdown} >
       <img class="h-10 w-10 rounded-full my-2" src={img}alt="" />
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 mt-12 w-48 bg-white rounded-lg shadow-lg">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Adela Parkson</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">adele@gmail.com</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">+91234567890</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Admin</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>

    </>
   
  )
}

export default Toggle