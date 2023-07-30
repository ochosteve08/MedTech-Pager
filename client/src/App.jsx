import { StreamChat } from "stream-chat";
import { Chat} from "stream-chat-react";
import {ChannelListContainer,ChannelContainer, Auth} from './components'
import './App.css'


const API_KEY = "9xux5bjcdbyp";
const client = StreamChat.getInstance(API_KEY);

const authToken = false;

function App() {

  if (!authToken) return <Auth/>
  return( 

  <div className="app_wrapper">
    <Chat client={client} theme="team light">
      <ChannelListContainer/>
      <ChannelContainer/>
    </Chat>

  </div>
  );
}

export default App;
