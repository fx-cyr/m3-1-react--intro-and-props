import React from "react";
import "./ChatMessage.css";

const SentMessage = (props) => {
  console.log(props);
  return (
    <div className="chat-message-sent">
      <p className="sentMessageContent">{props.message.body}</p>
    </div>
  );
};

const ReceivedMessage = (props) => {
  console.log(props);
  return (
    <div className="chat-message-received">
      <div className="receivedMessage">
        <p>
          <img
            className="avatarPhoto"
            src={props.message.user.avatar}
            alt={`${props.message.user.avatar}`}
            title={`${props.message.user.avatar}`}
          />
        </p>
        <div className="discussion">
          <p className="name">{props.message.user.username}</p>
          <p className="receivedMessageContent">{props.message.body}</p>
        </div>
      </div>
    </div>
  );
};

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

export default ChatMessage;
