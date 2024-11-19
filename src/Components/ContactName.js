import React from "react";

function ContactName({ onOpen, item }) {
  return (
    <div className="contactfield" onClick={() => onOpen(item)}>
      <div className="contactLogo">{item.name.slice(0, 1)}</div>
      <div className="contactMsg">
        <div>{item.name}</div>
        <div className="prevmsg">Previous Message.....</div>
      </div>
    </div>
  );
}

export default ContactName;
