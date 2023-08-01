import React from 'react';
import Link from "next/link"
const MessageSide = () => {
  return (
    <aside className="w-24 bg-white text-white p-4 fixed top-0 left-0 z-50 h-screen overflow-y-hidden sm:visible invisible">
      
      <div className="p-4 flex items-center -mt-[30px]">
        <img src="/logo.png" alt="Logo" className="w-[28px] h-[28px]" />
      </div>

     
      <nav className="flex-1">
        <ul className="mt-2 space-y-4 text-gray-600 text-[12px]">
        
          <li className="flex items-center text-gray-600 pl-6 hover:bg-blue-500 py-2 rounded">
            <img src="/category.png" alt="Dashboard Icon" className="w-[20px] h-[20px]" />
          </li>

        
          <li className="flex  items-center mt-2 pl-6 cursor-pointer hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/order.png" alt="Orders Icon" className="w-[20px] h-[20px]" />
            <span className="ml-auto bg-yellow-400 rounded-full px-2 py-1 text-[9px]">3</span>
          </li>

         
          <li className="flex items-center cursor-pointer pl-6 hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/customer.png" alt="Customers Icon" className="w-[20px] h-[20px]" />
          </li>

        
          <li className="flex items-center cursor-pointer pl-6 hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/inventory.png" alt="Inventory Icon" className="w-[20px] h-[20px]" />
          </li>

       
          <Link href="/chat">
          <li className="flex items-center cursor-pointer mt-5 pl-6">
            <img src="/active.png" alt="Conversation Icon" className="w-[25px] h-[25px]" />
          </li></Link>

       
          <li className="flex items-center cursor-pointer pl-6 hover:bg-blue-500 py-2 px-5 rounded">
            <img src="/setting.png" alt="Setting Icon" className="w-[20px] h-[20px]" />
          </li>
        </ul>
      </nav>

     
      <div className="mb-6 mt-20 flex flex-col items-center">
        <div className="flex items-center cursor-pointer justify-start bg-gray-200  hover:bg-blue-500 py-3 px-3 rounded-2xl">
          <img src="/contact.png" alt="Contact Support Icon" className="w-3 h-3 object-cover" />
        </div>
    <div className=' bg-lightgold rounded px-2 py-1 mt-6'>
        <div className="flex items-center justify-center mt-2">
          <img src="/gift.png" alt="Gift Icon" className="w-3 h-3" />
        </div>
    </div>

        <div className="flex items-center justify-start mt-6  cursor-pointer">
          <img src="/logout.png" alt="Logout Icon" className="w-[20px] h-[20px]" />
        </div>
      </div>
    </aside>
  );
};

export default MessageSide;
