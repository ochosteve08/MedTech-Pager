import { useState } from "react";
// import { useChatContext } from "stream-chat-react";
import  SearchIcon from './SearchIcon'

const ChannelSearch = () => {
    const [query, setQuery] = useState();
    const [loading, setLoading] = useState(false);

    const getChannels = () =>{
        try{
            // get channels
        }
        catch(error){
            setQuery('')

        }
    }

    const onSearch=(event)=>{
        event.preventDefault();
        setQuery(event.target.value);
        setLoading(true);
        getChannels(event.target.value)

    }

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
