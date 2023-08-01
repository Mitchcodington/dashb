
import React from 'react';
import Link from "next/link"
const Sidebar = () => {
  return (
    <aside className="w-64 bg-white text-white p-4 fixed top-0 left-0 z-50 h-screen overflow-y-hidden sm:visible invisible">
   
      <div className="p-4 flex items-center -mt-[30px]">
        <img src="/logo.png" alt="Logo" className="w-[38px] h-[38px]" />
        <p className="mt-2 text-black font-bold text-[19px] tracking-widest ">Metrix</p>
      </div>

    
      <nav className="flex-1">
        <ul className="mt-2 space-y-4 text-gray-600 text-[12px]">
          
          <li className="flex items-center text-gray-600 pl-6 hover: bg-blue-500 py-2 rounded">
            <img src="/dash.png" alt="Dashboard Icon" className="w-[20px] h-[20px]" />
            <span className="ml-3">Dashboard</span>
          </li>

        
          <li className="flex  items-center mt-2 pl-6 cursor-pointer hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/order.png" alt="Orders Icon" className="w-[20px] h-[20px]" />
            <span className="ml-3 ">Orders</span>
            <span className="ml-auto bg-yellow-400 rounded-full px-2 py-1">3</span>
          </li>

          <li className="flex items-center cursor-pointer pl-6 hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/customer.png" alt="Customers Icon" className="w-[20px] h-[20px]" />
            <span className="ml-3">Customers</span>
          </li>

      
          <li className="flex items-center cursor-pointer pl-6 hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/inventory.png" alt="Inventory Icon" className="w-[20px] h-[20px]" />
            <span className="ml-3">Inventory</span>
          </li>

         
          <Link href="/chat">
          <li className="flex items-center cursor-pointer pl-6 hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/conversation.png" alt="Conversation Icon" className="w-[20px] h-[20px]" />
            <span className="ml-3">Conversation</span>
            <span className="ml-auto bg-yellow-400 rounded-full px-2 py-1">16</span>
          </li></Link>

       
          <li className="flex items-center cursor-pointer pl-6 hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/setting.png" alt="Setting Icon" className="w-[20px] h-[20px]" />
            <span className="ml-3">Setting</span>
          </li>
        </ul>
      </nav>

    
      <div className="mb-6 mt-10 flex flex-col items-center">
        <div className="flex items-center cursor-pointer justify-start bg-gray-200  hover:bg-blue-500 py-3 px-7 rounded-2xl">
          <img src="/contact.png" alt="Contact Support Icon" className="w-[20px] h-[20px]" />
          <span className="ml-3 text-[14px] text-gray-600">Contact Support</span>
        </div>
    <div className=' bg-lightgold rounded px-2 py-1 mt-2'>
        <div className="flex items-center justify-center mt-2">
          <img src="/gift.png" alt="Gift Icon" className="w-6 h-6" />
          <p className="ml-3 text-[12px] text-black font-medium">Free Gift Awaits You! </p>
        </div>
        <span className="ml-2 text-[11px] text-black font-normal"> Upgrade your account Account &rarr;</span>
    </div>

        <div className="flex items-center justify-start mt-3 -ml-[70px] cursor-pointer">
          <img src="/logout.png" alt="Logout Icon" className="w-[20px] h-[20px]" />
          <span className="ml-3 text-red-400 text-[14px]">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
