/* eslint-disable react/prop-types */
import { Channel, MessageSimple } from "stream-chat-react";
import { ChannelInner, CreateChannel, EditChannel } from "./";

const ChannelContainer = ({
  isEditing,
  setIsEditing,
  isCreating,
  setIsCreating,
  createType,
}) => {
  if (isCreating) {
    return (
      <div className="chat__container">
        <CreateChannel setIsCreating={setIsCreating} createType={createType} />
      </div>
    );
  }
  if (isEditing) {
    return (
      <div className="chat__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  const EmptySpace = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        This is the beginning of your chat history
      </p>
      <p className="channel-empty__second">
        send messages, attachments, links , emojis and more!
      </p>
    </div>
  );

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptySpace}
        Message={(messageProps, i) => (
          <MessageSimple key={i} {...messageProps} />
        )}
      ></Channel>
      <ChannelInner setIsEditing={setIsEditing} />
    </div>
  );
};

export default ChannelContainer;
