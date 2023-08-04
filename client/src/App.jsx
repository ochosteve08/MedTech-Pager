import { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { ChannelListContainer, ChannelContainer, Auth } from "./components";
import Cookies from "universal-cookie";
import "./App.css";
// import "stream-chat-react/dist/css/index.css";


const API_KEY = import.meta.env.VITE_APP_API_KEY;

const cookies = new Cookies();

const client = StreamChat.getInstance(API_KEY);

const authToken = cookies.get("token");
if (authToken) {
  client.connectUser(
    {
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      id: cookies.get("userId"),
      phoneNumber: cookies.set("phoneNumber"),
      image: cookies.set("avatarUrl"),
      securedPassword: cookies.set("securedPassword"),
    },
    authToken
  );
}

function App() {
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [createType, setCreateType] = useState("");

  if (!authToken) return <Auth />;
 
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
          setCreateType={setCreateType}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
          createType={createType}
          isEditing={isEditing}
        />
      </Chat>
    </div>
  );
}

export default App;
