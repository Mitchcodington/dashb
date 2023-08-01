import MainMessenger from '@/components/MainMessenger';
import MessageNav from '@/components/MessageNav';
import MessageSide from '@/components/MessageSide';
import Snippet from '@/components/Snippet';
import React from 'react';

const Message = () => {
  
  return (
    <div className='app'>
    <MessageSide/>
    <div className="flex flex-col "> 
      <MessageNav/>
      {/* message snippet */}
      <div className='flex flex-row'>
        <Snippet/>
        <MainMessenger/>
      </div>
    </div>
    </div>
  );
};

export default Message;
