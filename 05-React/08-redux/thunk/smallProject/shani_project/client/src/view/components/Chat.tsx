import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectMessage,addText,deleteText,
    //selectMessageStatus,
    // Status
} from '../../features/reducers/chatSlice';

export const Chat = () => {
    const messages = useAppSelector(selectMessage);
    const dispatch = useAppDispatch();
    //useSelector hook is used to get the state from the redux store
    //let messageStatus = useAppSelector(selectMessageStatus);
    function handleAddMessage(ev:any){
        ev.preventDefault()
        const text=ev.target.newMessage.value
           
           dispatch(addText(text))
    }
    function handleDeleteMessage(id:any){
      console.log(id)
      dispatch(deleteText(id))
    }
  return (
    <div>Chat
       
        <form onSubmit={handleAddMessage}>
            <input type='text' placeholder='write message..' name='newMessage'/>
            <button>send</button>
        </form>
        <div>
            {messages.map((message)=>{
                return(
                    <div  key={message.id} onClick={(id)=>{handleDeleteMessage(message.id)}}>
                      <h3>{message.text}</h3>
                    </div>
                )
            })}
        </div>

    </div>
  )
}
