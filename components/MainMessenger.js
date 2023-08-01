import Messageboard from "./Messageboard"
import MessengerHeader from "./MessengerHeader"

const MainMessenger = () => {
  return (
    <div className=" mt-20  w-full ml-1 mr-2 sm:visible invisible">
        <MessengerHeader/>
        <Messageboard/>
    </div>
  )
}
export default MainMessenger