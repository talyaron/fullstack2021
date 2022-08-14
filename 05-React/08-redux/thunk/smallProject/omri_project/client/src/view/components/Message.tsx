import axios from "axios";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getMessages } from "../../reducers/message/messageAPI";
import { selectMessage, addMessage, deleteMessage, message } from '../../reducers/message/messageSlice';


function Message() {
  const messages = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();

  async function handleAddText(ev: any) {
    try {
      ev.preventDefault();
      const message = ev.target.newMessage.value;
      dispatch(addMessage(message));
      const { data } = await axios.post('/api/messages/add-message', { message });
      ev.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteMessage(id: any) {
    // dispatch(deleteMessage(id))
    const { data } = await axios.delete('/api/messages/delete-message', { data: { id } })
    console.log(id);
  }

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div className="messageBox">

      <div className="messageBox__show">
        {messages.map((message,i) => {
          return (
            <div className="messageBox__show__line" key={i}>
              <h4 onClick={() => handleDeleteMessage(message)}>
                {message.text}
              </h4>
              <h4>Edit</h4>
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