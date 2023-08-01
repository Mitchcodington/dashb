'use client'

import React, { useState } from 'react';

const Card = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='flex  sm:flex-row flex-col items-start sm:-ml-[3px] -ml-0 gap-3 w-full '>
    <div className="bg-white rounded-lg mt-20 shadow-lg p-8 flex flex-col space-y-6">
    
      <div className="flex items-center justify-between">
     
        <div className="flex items-center bg-gray-200 rounded-md p-2">
          <img src="/logo.png" alt="Logo Icon" className="w-6 h-6" />
        </div>

       
        <div className="relative">
        <button
            onClick={handleDropdownToggle}
            className="px-4 py-2 rounded-md bg-white text-gray-300 flex items-center"
          >
            This Week
            <svg
              style={{ marginLeft: '4px', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

     
      <div className="flex flex-row  items-center justify-between">
        
        <div>
          <p className="font-normal text-[14px] text-gray-400 mr-10">Sales</p>
          <p className="text-[16px] font-medium text-black">₦4,000,000.00</p>
        </div>

      
        <div>
          <p className="font-normal text-[14px] text-gray-400 ml-8">Volume</p>
          <div className="flex items-center">
            <p className="text-[16px] font-medium text-black ml-7">450</p>
            <p className="text-green-500 text-[12px]">+20.00%</p>
          </div>
        </div>
      </div>
      
    </div>


    <div className="bg-white rounded-lg mt-20 shadow-lg p-8 flex flex-col space-y-6">
    
      <div className="flex items-center justify-between">
   
        <div className="flex items-center bg-gray-200 rounded-md p-2">
          <img src="/customer.png" alt="Logo Icon" className="w-6 h-6" />
        </div>

      
        <div className="relative">
        <button
            onClick={handleDropdownToggle}
            className="px-4 py-2 rounded-md bg-white text-gray-300 flex items-center"
          >
            This Week
            <svg
              style={{ marginLeft: '4px', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

     
      <div className="flex flex-row  items-center justify-between">
        
        <div>
        <p className="font-normal text-[14px] text-gray-400 mr-10">Customer</p>
          <div className="flex items-center">
          <p className="text-[16px] font-medium text-black ">1,250</p>
            <p className="text-green-500 text-[12px] ml-2">+15.80%</p>
          </div>
        </div>

      
        <div>
          <p className="font-normal text-[14px] text-gray-400 ml-6">Active</p>
          <div className="flex items-center">
          <p className="text-[16px] font-medium text-black ml-7">1,180</p>
            <p className="text-green-500 text-[12px] ml-2">85%</p>
          </div>
        </div>
      </div>
      
    </div>



    <div className="bg-white rounded-lg mt-20 shadow-lg p-8 flex flex-col space-y-6">
   
      <div className="flex items-center justify-between">
   
        <div className="flex items-center bg-gray-200 rounded-md p-2">
          <img src="/order.png" alt="Logo Icon" className="w-6 h-6" />
        </div>

      
        <div className="relative">
        <button
            onClick={handleDropdownToggle}
            className="px-4 py-2 rounded-md bg-white text-gray-300 flex items-center"
          >
            This Week
            <svg
              style={{ marginLeft: '4px', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

    
      <div className="flex flex-row  items-center justify-between">
        {/* Sales */}
        <div>
        <p className="font-normal text-[14px] text-gray-400 mr-10">All Orders</p>
          <div className="flex items-center">
          <p className="text-[16px] font-medium text-black ">450</p>
           
          </div>
        </div>

        <div>
        <p className="font-normal text-[14px] text-gray-400 mr-10">Pending</p>
          <div className="flex items-center">
          <p className="text-[16px] font-medium text-black ">5</p>
           
          </div>
        </div>

       
        <div>
          <p className="font-normal text-[14px] text-gray-400 ml-6">Completed</p>
          <div className="flex items-center">
          <p className="text-[16px] font-medium text-black ml-7">445</p>
          </div>
        </div>
      </div>
     
      
    </div>
    </div>
  );
};

export default Card;
