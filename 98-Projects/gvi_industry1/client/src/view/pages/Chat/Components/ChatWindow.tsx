import {useEffect,useState} from 'react';
import {ReactComponent as PaperPlaneIcon} from '../Icons/paper-plane-right.svg';
import {InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface } from '../Chat';
import { socket } from '../../../../index'


interface ChatWindowProps {
    scroll: String;
    messageList?: Array<MessageInterface>;
    getMessageList: Function;
    setMessageList: Function;
    handleSendMessage: Function;
    setSentMessage: Function;
}

function ChatWindow(props: ChatWindowProps) {
const [click, setClick] = useState<Boolean>(true)
    const {getMessageList, messageList, setMessageList, setSentMessage, handleSendMessage, scroll } = props;

    

    
useEffect(()=>{
    let messageList = document.querySelector('.chat__chatWindow__messagesList');
    if(messageList){
        messageList.scrollTop= messageList.scrollHeight
    }
},[messageList])

    useEffect(() => {
        const messages = getMessageList();
        console.log(messages, 'messages ChatWindow');
    }, []);


    return (
        <div onClick={()=>{setClick((click)=>!click)}} className='chat__chatWindow'>
            <ul  className='chat__chatWindow__messagesList'>
                {messageList
                    ? messageList.map((message, i) => {
                          return <li key={i} className='messageCard'>{message.text}
                          {
                            message.time && 
                           `, ${message.time}`}</li>;
                      })
                    : null}
            </ul>
            <div className='chat__chatWindow__messageBar'>
                <InputBase
                    onChange={(ev) => {
                        // console.log(ev);
                        setSentMessage(ev.target.value)
                    }}
                    placeholder='Message'
                />
                <PaperPlaneIcon onClick={(ev)=>{handleSendMessage(ev)}}/>
            </div>
        </div>
    );
}
export default ChatWindow;
