import React from 'react';

const Messageboard = () => {
  return (
    <div className="bg-white p-4 mt-1">
     
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gray-200 px-2 py-1 rounded-lg">
          <p className="text-sm">12 August 2022</p>
        </div>
      </div>

     
      <div className="flex items-start justify-start mb-2">
        <div className="bg-blue-500 text-white text-[14px] p-2 rounded-tl-lg rounded-bl-lg rounded-tr-lg max-w-xs">
          <p>Hello, I want to make inquiries about your product</p>
        </div>
      </div>
      <div className="text-gray-600 text-xs ml-2">12.55 am</div>


      <div className="flex items-start justify-end mb-2">
        <div className="bg-lightgold text-black text-[14px] p-2 rounded-tl-lg rounded-bl-lg rounded-tr-lg max-w-xs">
          <p>Hello Janet, thank you for reaching out</p>
        </div>
      </div>
      <div className="flex items-center justify-end mt-2">
        <div className="text-gray-600 text-xs mr-1">12.57 am</div>
        <div className="bg-lightgold rounded-full w-4 h-4 flex items-center justify-center mr-2">
        <img src='/nike.png' alt=''/>
        </div>
      </div>

    
      <div className="flex items-start justify-end mt-2 mb-2">
        <div className="bg-lightgold text-black text-[14px] p-2 rounded-tl-lg rounded-bl-lg rounded-tr-lg max-w-xs">
          <p>What do you need to know</p>
        </div>
      </div>
      <div className="flex items-center justify-end mt-2">
        <div className="text-gray-600 text-xs mr-1">1.05 pm</div>
        <div className=" rounded-full w-4 h-4 flex items-center justify-center mr-2">
          <img src='/nike.png' alt=''/>
        </div>
      </div>

     
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gray-200 px-2 py-1 rounded-lg">
          <p className="text-sm">Today</p>
        </div>
      </div>

    
      <div className="flex items-start justify-start mb-4">
        <div className="bg-blue-500 text-white p-4 rounded-tl-lg rounded-br-lg rounded-tr-lg max-w-xs">
          <p>I want to know if price is negotiable</p>
        </div>
      </div>
      <div className="text-gray-600 text-xs ml-2">1.10 pm</div>

      
      <div className="flex items-center bg-white p-4 rounded-lg mt-20 border">
        <div className="bg-lightgold w-8 h-8 rounded-full flex items-center justify-center mr-2">
          <img src="/plus.png" alt="" className="w-4 h-4" />
        </div>
        <input
          type="text"
          className="flex-grow text-gray-400 outline-none"
          placeholder="Your message"
        />
        <img src="/smiley.png" alt="" className="w-4 h-4" />
        <div className="bg-lightgold rounded-lg flex items-center justify-center px-4 py-1 ml-2">
          <button className="text-black font-medium">Send</button>
          <img src="/kite.png" alt="" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Messageboard;


