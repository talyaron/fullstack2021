import {useEffect,useState} from 'react';
import {ReactComponent as PaperPlaneIcon} from '../Icons/paper-plane-right.svg';
import {InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface } from '../Chat';
import { socket } from '../../../../index'


interface ChatWindowProps {
    messageList?: Array<MessageInterface>;
    getMessageList: Function;
    setMessageList: Function;
}

function ChatWindow(props: ChatWindowProps) {

    const {getMessageList, messageList, setMessageList } = props;
    const [ sentMessage, setSentMessage ] = useState ('');

    function handleSendMessage(ev:any){
        socket.emit('send-message',{message: sentMessage})
    }

    


    useEffect(() => {
        const messages = getMessageList();
        console.log(messages, 'messages ChatWindow');
    }, []);


    return (
        <div className='chat__chatWindow'>
            <ul className='chat__chatWindow__messagesList'>
                {messageList
                    ? messageList.map((message, i) => {
                          return <li key={i} className='messageCard'>{message.text}</li>;
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
                <PaperPlaneIcon onClick={handleSendMessage}/>
            </div>
        </div>
    );
}
export default ChatWindow;
