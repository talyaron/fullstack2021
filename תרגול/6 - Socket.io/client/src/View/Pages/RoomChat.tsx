import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../../index";

interface RoomChatProps {
  userName: string;
}

interface Messages {
  userName: string;
  roomId: any;
  userMsg: string;
}

const allMessages: Array<Messages> = [];

const RoomChat = (props: RoomChatProps) => {
  const { userName } = props;
  const { roomId } = useParams();
  const [userMsg, setUserMsg] = useState();
  const [up, setUp] = useState(2);
  const [getMessages, setGetMessages] = useState<Array<Messages>>([]);

  const hendleSendMsg = (e: any) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;
    setUserMsg(msg);

    socket.emit("user-msg", { roomId, userName, userMsg });
  };

  console.log(getMessages);

  useEffect(() => {
    if (roomId) {
      socket.emit("user-join", { userName, roomId });
    }

    socket.on("get-back-msg", ({ userName, userMsg }) => {
      allMessages.push({ userName, roomId, userMsg });
      setGetMessages(allMessages);
      setUp(Math.random());
    });

    return () => {
      socket.emit("user-leave", { roomId, userName });
      socket.off("get-back-msg");
    };
  }, [roomId]);

  return (
    <div>
      <h1>Room Number {roomId}</h1>
      <form onSubmit={hendleSendMsg}>
        <input type="text" name="msg" placeholder="Enter message" />
        <button type="submit">Send</button>
      </form>

      <div>
        {getMessages
          .filter((room) => room.roomId === roomId)
          .map((text) => {
            return (
              <div>
                <p>{text.userMsg}</p>
                <p>{text.userName}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RoomChat;
