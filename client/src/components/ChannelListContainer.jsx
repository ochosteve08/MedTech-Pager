/* eslint-disable react/prop-types */
import {
   ChannelList, 
 } from "stream-chat-react";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
 

const cookies = new Cookies();

const SideBar = ({Logout}) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
      
        <img src={HospitalIcon} alt="hospital-icon" width={30} />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={Logout}>
        <img src={LogoutIcon} alt="logout-icon" width={30} />
      </div>
    </div>
  </div>
);

const CompanyHeader = ()=>(
  <div className="channel-list__header">
    <p className="channel-list__header__text">MedTech Pager</p>

  </div>
)


const ChannelListContainer = ({

  setIsEditing,
  isCreating,
  setIsCreating,
  setCreateType,
}) => {
  const Logout = () => {
    cookies.remove("token");
    cookies.remove("username"),
      cookies.remove("fullName"),
      cookies.remove("userId"),
      cookies.remove("phoneNumber"),
      cookies.remove("avatarUrl"),
      cookies.remove("securedPassword");
    window.location.reload();
  };

  return (
    <>
      <SideBar Logout={Logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setCreateType={setCreateType}
              {...listProps}
              type="team"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
