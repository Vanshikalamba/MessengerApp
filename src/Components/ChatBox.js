import React, { useState } from "react";
import SentMessage from "./SentMessage";
import DefaultChatBox from "./DefaultChatBox";

function ChatBox({ openedContact, msgData, setMsgData }) {
  const [msgText, setMsgText] = useState("");
  const handleMessageSend = () => {
    if (msgText.trim()) {
      setMsgData([...msgData, { msg: msgText }]);
      setMsgText("");
    }
  };
  if (openedContact === null)
    return (
      <div className="chatBox">
        <DefaultChatBox />
      </div>
    );
  return (
    <div className="chatBox">
      <div className="chatData">
        <div className="outerOpen">
          <div className="contactOpen"> {openedContact.name}</div>
        </div>

        <div className="Messages">
          {msgData.map((msg, index) => {
            return <SentMessage msg={msg} key={index} />;
          })}
        </div>
      </div>
      <div className="inputField">
        <input
          type="text"
          className="inputtext"
          value={msgText}
          onChange={(e) => setMsgText(e.target.value)}
          placeholder="Type Message ...."
        ></input>
        <button onClick={handleMessageSend} className="SendBtn">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
