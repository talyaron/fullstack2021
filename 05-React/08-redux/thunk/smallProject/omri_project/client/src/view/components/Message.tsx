import axios from "axios";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectMessage, addMessage } from '../../reducers/message/messageSlice';


function Message() {
  const messages = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  console.log(messages)

  async function handleAddText(ev: any) {
    try {
      ev.preventDefault();
      const message = ev.target.newMessage.value;
      // const { data } = await axios.post('/api/messages/add-message');
      dispatch(addMessage(message))
      ev.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="messageBox">

      <div className="messageBox__show">
        {messages.map((message, i: any) => {
          return (
            <div key={i}>
            <h4>{message.text}</h4>
            </div>
          )
        })}
      </div>


      <div className="messageBox__textInput">
        <form onSubmit={handleAddText}>
          <input type='text' name='newMessage' id='text'></input>
          <input type="submit" id='submit'></input>
        </form>
      </div>

    </div >
  )
}

export default Message