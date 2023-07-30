import { ChannelList, useChatContext } from "stream-chat-react";
import Cookie from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
      
        <img src={HospitalIcon} alt="hospital-icon" width={30} />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="logout-icon" width={30} />
      </div>
    </div>
  </div>
);



const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
    </>
  );
};

export default ChannelListContainer;
