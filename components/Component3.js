import React from 'react';

const ordersData = [
  { imageSrc: '/phone.png', title: 'iPhone 13', price: '₦730,000.00 x 1', date: '12 Sept 2022', status: 'Pending', statusColor: 'text-red-600', statusBgColor: 'bg-red-100' },
  { imageSrc: '/phone1.png', title: 'iPhone 13', price: '₦730,000.00 x 1', date: '12 Sept 2022', status: 'Completed', statusColor: 'text-green-600', statusBgColor: 'bg-green-100' },
 
];

const Component3 = () => {
  const duplicatedOrders = [];

 
  for (let i = 0; i < 9; i++) {
    const randomOrder = ordersData[Math.floor(Math.random() * ordersData.length)];
    duplicatedOrders.push(randomOrder);
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-3 sm:w-1/3 w-full sm:mt-0 mt-4">
     
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

     
      {duplicatedOrders.map((order, index) => (
        <div key={index} className="flex flex-row justify-between mt-7">
        
          <div className="flex items-center ">
           
            <img src={order.imageSrc} alt="Phone" className="w-10 h-10" />

            
            <div className="ml-4 flex flex-col">
              <p className="font-normal text-[12px]">{order.title}</p>
              <p className='text-[12px] '>{order.price}</p>
            </div>
          </div>

          
          <div className="flex flex-col">
            <p className="text-[12px]">{order.date}</p>
            <p className={`px-2 py-1 text-[12px] text-center rounded-full ${order.statusBgColor} ${order.statusColor}`}>{order.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Component3;


