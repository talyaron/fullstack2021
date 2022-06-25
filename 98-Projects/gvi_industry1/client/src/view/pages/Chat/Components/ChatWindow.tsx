import {useEffect} from 'react';
import {ReactComponent as PaperPlaneIcon} from '../Icons/paper-plane-right.svg';
import {InputBase} from '@mui/material';
import {MessageInterface} from '../Chat';
interface ChatWindowProps {
    messageList?: Array<MessageInterface>;
    getMessageList: Function;
}
function ChatWindow(props: ChatWindowProps) {
    const {getMessageList, messageList} = props;
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
                        console.log(ev);
                    }}
                    placeholder='Message'
                />
                <PaperPlaneIcon />
            </div>
        </div>
    );
}
export default ChatWindow;
