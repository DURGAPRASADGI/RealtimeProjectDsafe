import React from 'react'
import { useState } from 'react';

const AddBrands = () => {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
      <div>
    <span className='text-xl font-bold whitespace-nowrap dark:text-white'>
 AddBrands
    </span>
    </div>

    <section class="antialiased  text-gray-600 min-h-screen p-4">
    <div class="h-full">
        {/* <!-- Pay component --> */}
        <div>
            {/* <!-- Card background --> */}
            <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                <img className="rounded-t shadow-lg w-full h-56" src="https://cdn.thestandard.co.zw/images/thestandard/uploads/2022/11/6nZv7wLiMWBVvXhNpMd3C14M3d1SozRjykyDcSb3.jpg"  alt="Pay background" />
            </div>
            {/* <!-- Card body --> */}
            <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                <div class="bg-white px-8 pb-6 rounded-b shadow-lg">

                    {/* <!-- Card header --> */}
                    <div class="text-center mb-6">
                        <div class="mb-2">
                            <img class="-mt-8 inline-flex rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXZO-DHglqOulQ75BQ5UbTS4abatb1HvBRw&usqp=CAU" width="64" height="64" alt="User" />
                        </div>
                        {/* <h1 class="text-xl leading-snug text-gray-800 font-semibold mb-2">Front-End Learning 🔥</h1>
                        <div class="text-sm">
                            Learn how to create real web apps using HTML & CSS. Code templates included.
                        </div> */}
                    </div>
                    <form  class="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label class="block">
				<span class="mb-1 font-semibold">Name</span>
				<input type="text" placeholder="" class="block w-full rounded-md shadow-lg focus:ring  dark:bg-gray-800"/>
			</label>
			<label class="block">
				<span class="mb-1 font-semibold">Brand Name</span>
				<input type="text" placeholder="" class="block w-full rounded-md shadow-lg focus:ring  dark:bg-gray-800"/>
			</label>
			<label class="block">
				<span class="mb-1 font-semibold">Contact No</span>
				<input type="number" placeholder="" class="block w-full rounded-md shadow-lg focus:ring  dark:bg-gray-800"/>
			</label>
            <label class="block">
				<span class="mb-1 font-semibold">Brand Image</span>
				<input type="file" onChange={handleChange} placeholder="" class="block w-full rounded-md shadow-lg focus:ring  dark:bg-gray-800"/>
                <img src={file}/>
			</label>
			<button type="button" class="self-center px-2 bg-orange-400 text-lg rounded-sm font-semibold  focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
		</form>
                
                </div>
            </div>
        </div>
    </div>
</section>
</>

  )
}

export default AddBrands;