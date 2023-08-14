import React from 'react'
import {default as img} from "../assets/images/Brand.png"

const Brands = () => {

  return (
    
    <div>
        <div>
    <span className='text-xl text-black font-bold whitespace-nowrap dark:text-white'>
    Brands
    </span>
    </div>
    <br/>

    {/* <!-- component --> */}

<div>
	<table class="text-left  w-full">
		<thead class="bg-sky-600 flex text-white w-full">
			<tr class="flex w-full mb-4">
      
				<th class="p-4 w-1/4">BrandImages</th>
				<th class="p-4 w-1/4">BrandName</th>
				<th class="p-4 w-1/4">Contactno</th>
				<th class="p-4 w-1/4">Action</th>
			</tr>
		</thead>
    {/* <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! --> */}
		<tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height:"50vh"}}>
			<tr class="flex w-full mb-2">
      
				<td class="p-4 w-1/4"> <img src={img} className='w-20 h-20' alt="Reliance"/></td>
				<td class="p-4 w-1/4">Reliance</td>
				<td class="p-4 w-1/4">+91234567890</td>
				<td class="p-4 w-1/4"><a className="text-green-500 hover:text-green-700 mx-4 " href="#" > Edit
             </a></td>
			</tr>
			<tr class="flex w-full mb-4">
      
				<td class="p-4 w-1/4"> <img src={img} className='w-20 h-20' alt="Reliance"/></td>
				<td class="p-4 w-1/4">Reliance</td>
				<td class="p-4 w-1/4">+91234567890</td>
				<td class="p-4 w-1/4"><a className="text-green-500 hover:text-green-700 mx-4 " href="#" > Edit
             </a></td>
			</tr>
			<tr class="flex w-full mb-4">
     
				<td class="p-4 w-1/4"> <img src={img} className='w-20 h-20' alt="Reliance"/></td>
				<td class="p-4 w-1/4">Reliance</td>
				<td class="p-4 w-1/4">+91234567890</td>
				<td class="p-4 w-1/4"><a className="text-green-500 hover:text-green-700 mx-4 " href="#" > Edit
             </a></td>
			</tr>
			
		</tbody>
	</table>
</div>


    </div>
  
  )
}

export default Brands