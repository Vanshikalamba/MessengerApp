import logo from "./logo.svg";
import "./App.css";
import ChatList from "./Components/ChatList";
import ChatBox from "./Components/ChatBox";
import { useState } from "react";

function App() {
  const contact = [
    { id: 1, name: "Karan" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Robin" },
  ];
  const [msgData, setMsgData] = useState([]);

  const [openedContact, setOpenedContact] = useState(null);
  const [contactList, setContactList] = useState(contact);

  const handleOpen = (contact) => {
    setOpenedContact(contact);
    setMsgData([]);
  };
  return (
    <div className="App">
      <ChatList contactList={contactList} onOpen={handleOpen} />
      <ChatBox
        openedContact={openedContact}
        msgData={msgData}
        setMsgData={setMsgData}
      />
    </div>
  );
}

export default App;
