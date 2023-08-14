import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import  {default as img} from "../assets/images/balllogo.png"


const LiveMatch = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    
  }
 return (
  <>
     <div class=" px-6 w-full h-full rounded-sm" style={{backgroundImage:" url('https://garden.spoonflower.com/c/14396494/p/f/m/Zu8UKK1468fLrF4KERRQB0GWmeMbwlyIUr9iHGY9GmVJYlre22l99yQ/Blue%20Cricket%20cricketer%20pitch%20.jpg')"}}>
          <div>
          <span className='text-xl text-white font-bold whitespace-nowrap dark:text-white'>
          Live Match
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
  <div className='flex gap-2 flex-col items-center justify-center'>
<div className=" w-full  bg-blue-200  rounded-lg shadow-md lg:max-w-sm">
<div className="p-4 flex flex-col items-center justify-center">
<input type="text" onfocus="this.value=''" value="TEAM 1" className=' text-center my-2 w-40 py-1 rounded-md'/>
<input type="text" onfocus="this.value=''" value="COACH NAME" className=' text-center my-2 w-40  py-1 rounded-md'/>
<input type="text" onfocus="this.value=''" value="+91....." className=' text-center my-2 w-40 py-1  rounded-md'/>   
              </div>
              </div>
              
              <div >
               <div className=" w-full bg-sky-200  rounded-lg shadow-md lg:max-w-sm">
               <div className="p-4 flex flex-col items-center justify-center">
               <label className='font-bold text-base'>No:     <input type="text " onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
              <label className='font-bold text-base'> Score:   <input type="text " onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
              <label className='font-bold text-base'> Over's:  <input type="text" onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium '/></label> 
              <label className='font-bold text-base'> Out's:   <input type="text" onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
              <label className='font-bold text-base'> Win/Loss:<input type="text" onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
                             </div>
                             <div className="p-4 flex flex-col items-center justify-center">
                               <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                  Update Match Results
                               </button>
                           </div>
                       </div>
                       </div>
                      </div>
     
        
        <br/>
            <div className=''>
                  <img src={img} className='w-32 rounded-full'/>
                  </div>
                  <br/>   
       
       <div className='flex gap-2 flex-col items-center justify-center'>
        <div className=" w-full  bg-blue-200  rounded-lg shadow-md lg:max-w-sm">
        <div className="p-4 flex flex-col items-center justify-center">
          
            <input type="text" onfocus="t his.value=''" value="TEAM 2" className=' text-center my-2 w-40 py-1  rounded-md'/>
            <input type="text" onfocus="this.value=''" value="COACH NAME" className=' text-center my-2 w-40 py-1  rounded-md'/>
            <input type="text" onfocus="this.value=''" value="+91....." className='text-center my-2 w-40  py-1  rounded-md'/>
            </div>
          </div>
            <div>
               <div className=" w-full bg-sky-200  rounded-lg shadow-md lg:max-w-sm">
               <div className="p-4 flex flex-col items-center justify-center">
               <label className='font-bold text-base'>No:     <input type="text " onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
              <label className='font-bold text-base'> Score:   <input type="text " onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
              <label className='font-bold text-base'> Over's:  <input type="text" onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium '/></label> 
              <label className='font-bold text-base'> Out's:   <input type="text" onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
              <label className='font-bold text-base'> Win/Loss:<input type="text" onfocus="this.value=''" value="" className=' text-center my-2 w-40 py-1 rounded-md font-medium'/></label>
                             </div>
                             <div className="p-4 flex flex-col items-center justify-center">
                               <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                  Update Match Results
                               </button> </div>
                      
                       </div>
                       </div>
                       
        
       </div>
      </div>
      <br/>
     
     




 </div>
 
              
             </>
  )
}

export default LiveMatch