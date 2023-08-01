'use client'

import React, { useState } from 'react';

const Component1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className=" flex sm:flex-row flex-col sm:m-2 m-0">
     
      <div className="flex flex-col flex-1  rounded bg-white p-6">
        <div className="mb-4">
         
          <div className="flex justify-between mb-4">
            <p className="font-semibold">Marketing</p>
            <div className="relative">
              <button className="flex items-center" onClick={handleDropdownToggle}>
                <p className="mr-2">This Week</p>
                <svg
                  className={`w-4 h-4 transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6L0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6ZM6 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6Z" fill="#000000" />
                </svg>
              </button>
             
              {dropdownOpen && (
                <div className="absolute top-8 right-0 bg-white w-36 py-2 shadow-lg rounded-md">
                  <p className="px-4 py-2 hover:bg-blue-100">Option 1</p>
                  <p className="px-4 py-2 hover:bg-blue-100">Option 2</p>
                </div>
              )}
            </div>
          </div>

          
          <div className="flex justify-around mb-4 ">
            <div className="flex flex-row items-center w-full">
              <img src="/indicator.png" alt="Indicator Icon" className="w-1 h-1 mr-2" />
              <p className="text-[12px]">Application</p>
            </div>
            <div className="flex flex-row items-center w-full">
              <img src="/indicator.png" alt="Indicator Icon" className="w-1 h-1 mr-2" />
              <p className=" text-[12px]">Purchase</p>
            </div>
            <div className="flex flex-row items-center w-full">
              <img src="/indicator1.png" alt="Indicator Icon" className="w-1 h-1 mr-2" />
              <p className=" text-[12px]">Retention</p>
            </div>
          </div>

         
          <div className="flex justify-center">
            <img src="/pie.png" alt="Pie Chart" className="w-33 h-33 mt-4" />
          </div>
        </div>
      </div>

    
      <div className="flex flex-col flex-1 sm:ml-8 ml-0 sm:mt-0 mt-4">
        
        <div className="bg-blue-500 rounded-lg shadow-lg p-9 mb-8">
        
          <div className="flex items-center mb-4">
            <img src="/inventory.png" alt="Inventory Icon" className="w-8 h-8" />
          </div>

          
          <div className='flex flex-row justify-between'>
          <div className="flex flex-col justify-between ">
            <p className="font-normal text-white text-[13px]">All Product</p>
            <p className='text-white font-semibold text-[14px]'>45</p>
          </div>

      
          <div className="flex flex-col justify-between">
            <p className="font-normal text-white text-[13px]">Active</p>
            <div className="flex items-center">
              <p className="mr-2 text-white font-semibold text-[14px]">32</p>
              <p className="text-gray-300 text-[10px]">+24%</p>
            </div>
          </div>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-lg p-9">
      
          <div className="flex justify-between mb-4">
            <img src="/trolly.png" alt="Cart Icon" className="w-8 h-8" />
            <div className="relative">
              <button className="flex items-center" onClick={handleDropdownToggle}>
                <p className="mr-2">This Week</p>
                <svg
                  className={`w-4 h-4 transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6L0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6ZM6 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6Z" fill="#000000" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-8 right-0 bg-white w-36 py-2 shadow-lg rounded-md">
                  <p className="px-4 py-2 hover:bg-blue-100">Option 1</p>
                  <p className="px-4 py-2 hover:bg-blue-100">Option 2</p>
                </div>
              )}
            </div>
          </div>

        
          <div className='flex flex-row justify-between'>
          <div className="flex flex-col justify-between ">
            <p className="font-normal text-[13px] text-red-400">Abandoned Cart</p>
            <div className="flex items-center">
              <p className="mr-2 font-semibold text-[14px]">20%</p>
              <p className="text-green-500">+0.00%</p>
            </div>
          </div>

         
          <div className="flex flex-col justify-between">
            <p className="font-normal text-[13px] text-gray-400">Customers</p>
            <p className='font-semibold text-[14px]'>30</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Component1;


