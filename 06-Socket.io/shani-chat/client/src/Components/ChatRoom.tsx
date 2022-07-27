import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../index";
interface ChatRoomProps {
  user: string;
}

interface message {
  user: string;
  text: string;
  chatRoomNumber: any;
}

const messagesOfAll: Array<message> = [];

function ChatRoom(props: ChatRoomProps) {
  const { user } = props;
  const [textMessage, setTextMessage] = useState<Array<message>>([]);
  const { chatRoomNumber } = useParams();
  const [up, setUp] = useState(2);
  console.log(typeof chatRoomNumber);

  useEffect(() => {
    socket.emit("connectionToRoom", { chatRoomNumber, user });
    //emit is what im sending
    socket.on("get-msg", ({ text, user }) => {
      try {
        if (text && user) {
          console.log(`${user} send ${text}`);
          messagesOfAll.push({ user, text, chatRoomNumber });
          setTextMessage(messagesOfAll);
        } else {
          console.log(`no text and user`);
        }
      } catch (error) {
        console.log(error);
      }

      setUp(Math.random());

      //The setTextMessage has to be here
    });
    return () => {
      // turns off/cleans when the component is unmounted. when changing pages it cleans it as if to clear the interval
      console.log("off");
      socket.off("get-msg");
    };
  }, [chatRoomNumber]);

  function handleText(ev: any) {
    ev.preventDefault();
    const text = ev.target.value;
    // console.log(text);
    socket.emit("send-msg", { text, chatRoomNumber, user });
    //client מפיץ to the שרת
  }

  console.log(textMessage);
  return (
    <div style={{ textAlign: "center", marginTop: "50px", margin: "10px" }}>
      <input
        type="text"
        placeholder="text message"
        name="text"
        onKeyUp={handleText}
      />

      {textMessage
        .filter((text) => text.chatRoomNumber === chatRoomNumber)
        .map((text, i) => {
          return (
            <div key={i}>
              <p>
                {text.user}:{text.text}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default ChatRoom;

 