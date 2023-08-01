import React from 'react';
import Contact from './Contact';



const Snippet = () => {

  const contactsData = [
    { name: 'Jane Doe', image: '/jane.png' },
    { name: 'Janet Adebayo', image: '/janet.png' },
    { name: 'Kunle Adekunle', image: '/kunle.png' },
  ];

  const getRandomContact = () =>
    contactsData[Math.floor(Math.random() * contactsData.length)];

  
  const contacts = Array.from({ length: 9 }, (_, index) => {
    if (index === 0) return { ...contactsData[0], newContact: true, grayBackground: true };
    if (index < 3) {
      const randomContact = getRandomContact();
      return { ...randomContact, newContact: true, grayBackground: false };
    }
    const randomContact = getRandomContact();
    return { ...randomContact, newContact: false, grayBackground: false };
  });

  return (
    <div className=''>
       <div className="flex flex-col flex-grow sm:ml-28 ml-0 p-6 w-10/5 mt-20 bg-white">
       
        <div className="flex justify-between items-center mb-4 ">
          <h1 className="text-xl font-medium text-[14px]">Contacts</h1>
          <span className="text-gray-400 text-[14px]">34</span>
        </div>

        
        <div className="flex items-center mb-4 w-full"> 
          <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 100 10A5 5 0 008 3zm7.293 9.293a1 1 0 11-1.414 1.414l-2.485-2.485a4 4 0 111.414-1.414l2.485 2.485zM15 8a3 3 0 11-6 0 3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent outline-none flex-grow"
            />
          </div>
        </div>


        
        <Contact
          name="Jane Doe"
          image="/jane.png"
          newContact={true}
          snippet="Hi, I want to make enquiries about yo..12.55am"
          indicator={true}
          background="bg-gray-200" 
        />

        
        {contacts.slice(1).map((contact, index) => (
          <div
            key={index}
            className={`flex items-start justify-start  bg-white  rounded-lg px-3 pt-2 mt-1 shadow-md`}
          >
            <Contact
              name={contact.name}
              image={contact.image}
              newContact={contact.newContact && index < 3}
              snippet="Hi, I want to make enquiries about yo..12.55am"
              indicator={index === 0}
              background="bg-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snippet;
