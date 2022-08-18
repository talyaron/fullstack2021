import axios from "axios";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getMessages } from "../../reducers/message/messageAPI";
import { selectMessage } from '../../reducers/message/messageSlice';


function Message() {
  const messages = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, [messages]);

  async function handleAddText(ev: any) {
    try {
      ev.preventDefault();
      const message = ev.target.newMessage.value;
      const { data } = await axios.post('/api/messages/add-message', { message });
      // dispatch(getMessages());
      ev.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteMessage(id: any) {
    try {
      if (!id) throw new Error('no id');
      const { data } = await axios.delete('/api/messages/delete-message', { data: { id } })
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className="messageBox">

      <div className="messageBox__show">
        {messages.map((message: any) => {
          return (
            <div className="messageBox__show__line" key={message._id}>
              <h4>
                {message.text}
              </h4>
              <h4>Edit</h4>
              <h4 onClick={() => handleDeleteMessage(message._id)}>X</h4>
            </div>
          )
        })}
      </div>


      <div className="messageBox__textInput">
        <form onSubmit={handleAddText}>
          <input type='text' name='newMessage' id='text'></input>
          <input type="submit" value="send" id='submit'></input>
        </form>
      </div>

    </div >
  )
}

export default Message