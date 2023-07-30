/* eslint-disable react/prop-types */
import { Avatar, useChatContext } from "stream-chat-react"

const TeamChannelPreview = ({channel, type}) => {
    const {channel:activeChannel, client} = useChatContext();

    const channelPreview =()=>(
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id}
        </p>
    )

  return (
    <div>TeamChannelPreview</div>
  )
}

export default TeamChannelPreview