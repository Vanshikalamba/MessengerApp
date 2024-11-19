import React from "react";
import ContactName from "./ContactName";

function ChatList({ contactList, onOpen }) {
  return (
    <div className="chatList">
      <div className="title">
        <h4>Messenger</h4>
      </div>
      <div className="listContact">
        {contactList.map((item) => (
          <ContactName onOpen={onOpen} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
