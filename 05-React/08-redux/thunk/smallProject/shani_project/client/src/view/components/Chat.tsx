import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectMessage,addText,deleteText,editText,
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
    function handleEditMessage(ev:any){
        ev.preventDefault()
      
        const updatedText=ev.target.elements.edittedText.value;
        const id=ev.target.id
        console.log(updatedText)
        console.log(id)
        dispatch(editText({id,updatedText}))
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
                    <div  key={message.id} >
                      <h3 onClick={(id)=>{handleDeleteMessage(message.id)}}>{message.text}</h3>
                     
                      <form onSubmit={(ev)=>{handleEditMessage(ev)}} id={message.id} >
                        <input type='text' placeholder='edit text' name='edittedText' />
                        <button >update</button>
                      </form>
                    </div>
                    
                )
            })}
        </div>

    </div>
  )
}
