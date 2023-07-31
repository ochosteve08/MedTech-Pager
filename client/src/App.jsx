import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { ChannelListContainer, ChannelContainer, Auth } from "./components";
import "./App.css";
import Cookies from "universal-cookie";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const cookies = new Cookies();

const client = StreamChat.getInstance(API_KEY);

const authToken = cookies.get("token");
if (authToken) {
  client.connectUser({
    name: cookies.get("username"),
    fullName: cookies.get("fullName"),
    id: cookies.get("userId"),
    phoneNumber: cookies.set("phoneNumber"),
    image: cookies.set("avatarUrl"),
    securedPassword: cookies.set("securedPassword"),
  }, authToken);
}


function App() {
  if (!authToken) return <Auth />;
  console.log(authToken);
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
