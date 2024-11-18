import React from "react";

function ChatList({ contactList, onOpen }) {
  return (
    <div className="chatList">
      {contactList.map((item) => (
        <div className="contactField" onClick={() => onOpen(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default ChatList;
