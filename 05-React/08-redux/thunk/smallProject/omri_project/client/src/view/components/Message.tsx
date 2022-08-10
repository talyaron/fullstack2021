import axios from "axios";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectMessage, selectMessageStatus } from '../../reducers/message/messageSlice';


function Message() {
  const message = useAppSelector(selectMessage);
  const messageStatus = useAppSelector(selectMessageStatus);
  const dispatch = useAppDispatch();

  async function handleAddText(ev: any) {
    try {
      // ev.preventDefault();
      // const message = ev.target.message.value;
      // const { data } = await axios.post('/api/messages/add-message');
      dispatch()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="messageBox">
      <div className="messageBox__show"></div>
      <div className="messageBox__textInput">
        <form onSubmit={handleAddText}>
          <input type='text' name='message' id='text'></input>
          <input type="submit" id='submit'></input>
        </form>
      </div>
    </div>
  )
}

export default Message