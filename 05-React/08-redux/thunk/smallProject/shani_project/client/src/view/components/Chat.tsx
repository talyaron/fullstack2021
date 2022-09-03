import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectMessage,
  
  selectMessageStatus,
   Status
} from "../../features/reducers/chatSlice";

import { getMessages,editMessage,deleteMessage,addMessage } from '../../features/reducers/chatApi'

export const Chat = () => {
  const messages = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  //useSelector hook is used to get the state from the redux store
  let messageStatus = useAppSelector(selectMessageStatus);
  async function handleAddMessage(ev: any) {
    ev.preventDefault();
    const text = ev.target.newMessage.value;  
    dispatch(addMessage(text));
    
  }
  async function handleDeleteMessage(id: any) {
    console.log(id + " deleted text id");
    dispatch(deleteMessage(id));
    
  }
  async function handleEditMessage(ev: any) {
    ev.preventDefault();

    const updatedText = ev.target.elements.edittedText.value;
    const id = ev.target.id;
    
     dispatch(editMessage({id, updatedText}))

  }

    



  useEffect(() => {
   
    dispatch(getMessages());
  }, []);
  



  // function handleFileInputChange(ev:any){
  //   const file=ev.target.files[0]
  //   const image=ev.target.elements.image.value
  //  console.log(image)
  // }

  async function handleAddImg(ev: any) {
    ev.preventDefault();
    const image = ev.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      // await setImageFile(`${reader.result}`);
      const imageFile = reader.result;
      //const { data } = await axios.post("/api/profile/saveImage", {imageFile});
      //const ImgUrl = data.result.url;
      // setProfilePic(ImgUrl);
    };
  }
  return (
    <div className="chat">
     

      <div className="chat__messages">
        {messages.map((message) => {
          return (
            <div className='chat__messages__message' key={message._id}>
              <h3 className='chat__messages__message--text'
                onClick={() => {
                  handleDeleteMessage(message._id);
                }}
              >
                {message.text}
              </h3>

              <form className="chat__messages__message--text--update"
                onSubmit={(ev) => {
                  handleEditMessage(ev);
                }}
                id={message._id}
              >
                <input type="text" placeholder="edit text" name="edittedText" />
                <button>update</button>
              </form>
            </div>
          );
        })}
      </div>
      <div className="chat__input">
        <form onSubmit={handleAddMessage} className="chat__input--addText">
          <input type="text" placeholder="write message.." name="newMessage"
          //  onChange={handleFileInputChange}
           />
          <button>send</button>
        </form>
        <form onSubmit={handleAddImg}>
          <input type="file" placeholder="img" name="image"/>
          <button>addPic</button>
        </form>
      </div>
    </div>
  );
};
