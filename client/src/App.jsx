import { StreamChat } from "stream-chat";
import { Chat} from "stream-chat-react";
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
// import Cookies from "universal-cookie";



const API_KEY = "9xux5bjcdbyp";
const client = StreamChat.getInstance(API_KEY);

function App() {
  return( 
  <div>
    <Chat client={client} theme="team light">
      <ChannelListContainer/>
      <ChannelContainer/>
    </Chat>

  </div>
  );
}

export default App;
