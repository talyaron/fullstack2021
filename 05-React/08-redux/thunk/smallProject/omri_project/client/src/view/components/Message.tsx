import axios from "axios";
import { useAppSelector, useAppDispatch } from '../../app/hooks';


function Message() {
async function handleAddText(ev:any) {
  ev.preventDefault();
  const message = ev.target.message.value;
  const {data} = await axios.post('/api/messages/add-message')
}

  return (
    <div className="messageBox">
      <div className="messageBox__show"></div>
      <div className="messageBox__textInput">
        <form onSubmit={handleAddText}>
          <input type='text' name='message' id = 'text'></input>
          <input type="submit" id = 'submit'></input>
        </form>
      </div>
    </div>
  )
}

export default Message