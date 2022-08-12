import React,{useEffect}from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectMessage,
  addText,
  deleteText,
  editText,
  //selectMessageStatus,
  // Status
} from "../../features/reducers/chatSlice";
import axios from "axios";
import { getMessages } from '../../features/reducers/chatApi'

export const Chat = () => {
  const messages = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  //useSelector hook is used to get the state from the redux store
  //let messageStatus = useAppSelector(selectMessageStatus);
  async function handleAddMessage(ev: any) {
    ev.preventDefault();
    const text = ev.target.newMessage.value;

    dispatch(addText(text));
    const { data } = await axios.post("/chat/add-message", {text});
  }
  async function handleDeleteMessage(id: any) {
    console.log(id);
    dispatch(deleteText(id));
    const { data } = await axios.delete("/chat/delete-message", { data:{id}});
    console.log(data)
   
    
  }
  function handleEditMessage(ev: any) {
    ev.preventDefault();

    const updatedText = ev.target.elements.edittedText.value;
    const id = ev.target.id;
    console.log(updatedText);
    console.log(id);
    dispatch(editText({ id, updatedText }));
  }
  // useEffect(()=>{
  //   async function handleGetMessages(){
  //     dispatch(getMessages());
  //   }
  //   handleGetMessages()
  // },[])
 async function handleGetMessages(){
    //  const { data } = await axios.get("/chat/get-messages");
    //  console.log(data)
    //()=>{handleGetMessages()}
    dispatch(getMessages());
  }
  return (
    <div>
      <button onClick={handleGetMessages}>get chat</button>
      <form onSubmit={handleAddMessage}>
        <input type="text" placeholder="write message.." name="newMessage" />
        <button>send</button>
      </form>
      <div>
        {messages.map((message) => {
          return (
            <div key={message.id}>
              <h3
                onClick={(id) => {
                  handleDeleteMessage(message.id);
                }}
              >
                {message.text}
              </h3>

              <form
                onSubmit={(ev) => {
                  handleEditMessage(ev);
                }}
                id={message.id}
              >
                <input type="text" placeholder="edit text" name="edittedText" />
                <button>update</button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};
