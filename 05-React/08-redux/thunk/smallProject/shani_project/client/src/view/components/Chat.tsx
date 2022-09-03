import React, { useState,useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectMessage,
  
  selectMessageStatus,
   Status
} from "../../features/reducers/chatSlice";
import axios from 'axios'

import { getMessages,editMessage,deleteMessage,addMessage } from '../../features/reducers/chatApi'


export const Chat = () => {
  const [imageFile, setImageFile] = useState<any>();
const [profilePic, setProfilePic] = 
useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC");

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
    const img = ev.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = async () => {
     setImageFile(`${reader.result}`);
      const img = reader.result;
      console.log(img)
      // const { data } = await axios.post("/chat/saveImage", {img});
      // const ImgUrl = data.result.url;
      // setProfilePic(ImgUrl);
      // console.log(data)
      
      // console.log(imageFile)
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
              <img src={message.img}/>
               
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
      <img src={imageFile}/>
      <div className="chat__input">
        <form onSubmit={handleAddMessage} className="chat__input--addText">
          <input type="text" placeholder="write message.." name="newMessage"
          //  onChange={handleFileInputChange}
           />
          <button>send</button>
        </form>
        {/* <form onSubmit={handleAddImg}> */}
          <input type="file" placeholder="img"  name="image" onChange={handleAddImg}/>
          {/* <button>addPic</button>
        </form> */}
      </div>
      
    </div>
  );
};
