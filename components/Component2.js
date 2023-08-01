'use client'

import React, { useState } from 'react';

const Component2 = () => {
  const [salesDropdownOpen, setSalesDropdownOpen] = useState(false);
  const [last7DaysDropdownOpen, setLast7DaysDropdownOpen] = useState(false);

  const handleSalesDropdownToggle = () => {
    setSalesDropdownOpen(!salesDropdownOpen);
  };

  const handleLast7DaysDropdownToggle = () => {
    setLast7DaysDropdownOpen(!last7DaysDropdownOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:mt-0 mt-4">
      <div className="flex justify-between mb-4">
     

        <div className='flex mb-10'>
        <p className="font-semibold mr-3">Summary</p>

       
        <div className="flex items-center bg-gray-200 rounded-md ">
        <button
            onClick={handleSalesDropdownToggle}
            className="px-4 text-[14px] rounded-md text-blue-500 flex items-center"
          >
            Sales
            <svg
              style={{ marginLeft: '4px', transform: salesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6L0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6ZM6 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6Z" fill="#000000" />
            </svg>
          </button>
        </div>
        {salesDropdownOpen && (
          <div className="absolute top-8 right-0 bg-white w-36 py-2 shadow-lg rounded-md">
            <p className="px-4 py-2 hover:bg-blue-100">Option 1</p>
            <p className="px-4 py-2 hover:bg-blue-100">Option 2</p>
          </div>
        )}
         </div>


        
        <div className="relative">
          <button className="flex items-center" onClick={handleLast7DaysDropdownToggle}>
            <p className="mr-2">Last 7 Days</p>
            <svg
              className={`w-4 h-4 transform ${last7DaysDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6L0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6ZM6 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6Z " fill="#000000"  />
            </svg>
          </button>
          {last7DaysDropdownOpen && (
            <div className="absolute top-8 right-0 bg-white w-36 py-2 shadow-lg rounded-md">
              <p className="px-4 py-2 hover:bg-blue-100">Option 1</p>
              <p className="px-4 py-2 hover:bg-blue-100">Option 2</p>
            </div>
          )}
        </div>
      </div>

     
      <img src="/graph.png" alt="Graph" className="w-full " />
    </div>
  );
};

export default Component2;


