import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import  {default as img} from "../assets/images/balllogo.png"

const Results = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    
  }
 return (
  
  <>
   <div class=" px-6 w-full h-screen rounded-sm bg-cover " style={{backgroundImage:" url('') "}}>
    <div className='dark:text-white  '>
          <div>
          <span className='text-xl text-white font-bold whitespace-nowrap dark:text-white'>
          Results
          </span>
          </div>
        <br/>

     <div class="relative max-w-sm flex items-center mx-auto ">
 <input 
   onChange={handleChange}
   ref={dateInputRef}
  type="date"
  className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700"
  placeholder="Select date"
  required/>
</div>
  <br/>
  
  <div className='flex  md:flex-row  sm:flex-col  justify-between items-center'>
<div className=" w-56 h-36 bg-blue-300 rounded-lg shadow-md lg:max-w-sm">
<div className="p-4 flex flex-col items-center justify-center">
<input type="text" onfocus="this.value=''" value="TEAM 1" className=' text-center my-2 w-40 py-1 rounded-md'/>
 
              </div>
              {/* <div className="p-4 flex flex-col items-center justify-center">
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Match Results
                </button>
            </div> */}
        </div>
        <br/>
            <div className=''>
                  <img src={img} className='w-28 rounded-full'/>
                  </div>

                  <br/>   
        <div className=" w-56 h-36 bg-blue-300 rounded-lg shadow-md lg:max-w-sm">
        <div className="p-4 flex flex-col items-center justify-center">
            <input type="text" onfocus="this.value=''" value="TEAM 2" className=' text-center my-2 w-40 py-1  rounded-md'/>
            
            </div>
           {/* <div className="p-4 flex flex-col items-center justify-center">
               <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                  Match Results 
               </button>
           </div> */}
       </div>
      </div>
      <br/>
     
      <div className='flex flex-col items-center justify-center '>
               <div className=" w-60 bg-amber-300  rounded-lg shadow-md lg:max-w-sm">
               <div className="p-4 flex flex-col items-center justify-center">
               <input type="text" onfocus="this.value=''" value="Won Team" className=' text-center my-2 w-40 py-1  rounded-md'/>
                             </div>
                            
                       </div>
                       </div>




 </div>
 
              </div>
             </>
  )
}

export default Results