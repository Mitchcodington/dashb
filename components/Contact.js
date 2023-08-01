
import React from 'react';

const Contact = ({ name, image, newContact, snippet, indicator }) => {
  return (
    <div
      className={`flex items-start justify-between mb-0${
        indicator ? 'bg-white' : 'bg-white'
      } rounded-lg `}
    >
      
      <div className="relative w-18 h-16 rounded overflow-hidden ">
        <img
          src={image} 
          alt="Profile"
          className="w-10 h-10 object-cover"
        />
        {indicator && (
          <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
        )}
      </div>

      <div className="ml-4 flex flex-col flex-grow">
        
        <div className="flex items-center justify-between">
          <p className="font-medium text-[13px]">{name}</p>
          {newContact && (
            <div className="flex items-center justify-center bg-lightgold w-9 rounded">
              <span className="text-black text-[12px] font-medium">New</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-[8px] mt-2">{snippet}</p>
      </div>
    </div>
  );
};

export default Contact;
