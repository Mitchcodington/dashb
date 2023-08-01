'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      
      <nav
        className={`bg-white shadow-lg flex flex-col  items-start px-6 py-4 fixed top-0 left-0 right-0 z-50 sm:hidden ${
          mobileNavOpen ? 'visible' : 'invisible'
        }`}
      >
        <p className="text-[15px] tracking-widest font-bold mt-10 mb-6">Dashboard</p>
        <p className="text-[12px] w-full text-center bg-blue-100 px-4 py-2 rounded-md cursor-pointer mb-2">Orders</p>
        <p className="text-[12px] w-full text-center bg-blue-100 px-4 py-2 rounded-md cursor-pointer mb-2">Customers</p>
        <p className="text-[12px] w-full text-center bg-blue-100 px-4 py-2 rounded-md cursor-pointer mb-2">inventory</p>
        <Link href="/chat"><p className="text-[12px] w-full text-center bg-blue-100 px-[130px] py-2 rounded-md cursor-pointer mb-2">Conversation</p></Link>
        <p className="text-[12px] w-full text-center bg-blue-100 px-4 py-2 rounded-md cursor-pointer mb-2">Settings</p>
        <p className="text-[12px] w-full text-center bg-blue-100 px-4 py-2 rounded-md cursor-pointer mb-2">Contact</p>
        <p className="text-[12px] w-full text-center bg-blue-100 px-4 py-2 rounded-md cursor-pointer mb-2">Logout</p>
      
      </nav>

      
      <nav className="app bg-white shadow-lg flex items-center justify-between px-6 h-25 fixed top-0 sm:left-64 left-0 right-0 z-50">
   
        <div
          className="cursor-pointer sm:hidden"
          onClick={handleMobileNavToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

      
        <div className="hidden sm:flex flex-col items-start flex-shrink-0">
       
          <p className="text-[19px] tracking-widest font-bold mt-2">
            Dashboard
          </p>

        
          <div className="relative">
            <div className=" absolute top-0 -mt-1 w-full"></div>
            <img
              src="/home.png"
              alt="Home Icon"
              className="w-4 h-4 sm:mt-2 mt-[-29px] mb-2 cursor-pointer"
            />
          </div>
        </div>


        <div className="flex items-center -mt-[6px]">
         
          <div className="relative ">
            <button
              onClick={handleDropdownToggle}
              className="px-4 py-2 text-[14px] rounded-md bg-lightgold text-black flex items-center  sm:visible invisible"
            >
              Nanny's Shop
              <svg
                style={{
                  marginLeft: '4px',
                  transform: dropdownOpen
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                }}
                width="10"
                height="5"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6ZM6 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6 6Z"
                  fill="#000000"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 right-0 bg-white w-36 py-2 shadow-lg rounded-md">
                <p className="px-4 py-2 hover:bg-blue-100">Option 1</p>
                <p className="px-4 py-2 hover:bg-blue-100">Option 2</p>
              </div>
            )}
          </div>

         
          <div className="flex items-center ml-6">
          
            <img
              src="/bell.png"
              alt="Bell Icon"
              className="w-4 h-4 cursor-pointer"
            />

           
            <img
              src="/profile.png"
              alt="Profile Picture"
              className="w-7 h-7 rounded ml-6 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

