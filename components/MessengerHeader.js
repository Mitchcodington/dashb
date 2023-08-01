

const MessengerHeader = () => {
  return (
    <div className="flex flex-row justify-between bg-white p-4 rounded">
        <div className="flex ">
            <img src='/jane.png' alt="" className="w-10 h-10 mr-2"/>
            <div>
                <p className="text-[12px]">Jane Doe</p>
                <div className="flex mt-1">
                <p className="text-blue-400 text-[12px] mr-2">Online</p>
                <p className="text-[11px] text-gray-400">12.55 am</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex ">
                <p className="text-[12px] bg-lightgold rounded-2xl px-2 py-1 mr-4">New customer</p>
                <p className="text-[12px] text-blue-400 ">View Profile</p>
            </div>
            <div className="flex ml-20">
                <img src="/order.png" alt="" className="w-4 h-4 mr-3 ml-7"/>
                <p className="text-[12px]">0 order</p>
            </div>
        </div>
    </div>
  )
}
export default MessengerHeader