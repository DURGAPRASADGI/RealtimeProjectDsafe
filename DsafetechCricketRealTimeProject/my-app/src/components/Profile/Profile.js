import React, { useEffect } from "react";

// import {default as img} from "../assets/images/admin.jpg"


const Profile = () => {
    
useEffect(()=>{

},[])
  return (
    <div className="dark:text-white">
      <div>
        <span className="text-2xl font-bold whitespace-nowrap dark:text-white">
          Your Details
        </span>
      </div>

      <div>
        <div class="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-md relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-purple-200 bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
          <div
            class="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover "
            style={{
              backgroundImage: " url('https://i.ibb.co/FWggPq1/banner.png')",
            }}
          >
            <div class="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
              {/* <img class="h-full w-full rounded-full" src={img}alt="" /> */}
            </div>
          </div>

          <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-bluePrimary text-base font-bold">
                Adela Parkson
              </h4>

              <p class="text-lightSecondary text-base font-normal">Name</p>

              <h4 class="text-bluePrimary text-base font-bold">
                adele@gmail.com
              </h4>

              <p class="text-lightSecondary text-base font-normal">Email Id</p>
            </div>

            <div class="mt-16 flex flex-col items-center">
              <h4 class="text-bluePrimary text-base font-bold">+91234567890</h4>

              <p class="text-lightSecondary text-base font-normal">Mobile No</p>

              <h4 class="text-bluePrimary text-base font-bold">Admin</h4>

              <p class="text-lightSecondary text-base font-normal">
                Designation
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Profile;
