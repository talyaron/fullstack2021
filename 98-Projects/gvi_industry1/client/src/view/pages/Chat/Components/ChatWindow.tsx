import React from 'react';
import {ReactComponent as PaperPlaneIcon} from '../paper-plane-right.svg';
import {InputBase} from '@mui/material';
import { MessageInterface } from '../Chat';

interface ChatWindowProps {
    messageList?: Array<MessageInterface>
}
function ChatWindow(props: ChatWindowProps) {
    const {
        messageList
    } = props;
    return (
        <div className='chat__chatWindow'>
            <ul className="chat__chatWindow__messagesList">

            </ul>
            <div className='chat__chatWindow__messageBar'>
                <InputBase placeholder='Message' />
                <PaperPlaneIcon />
            </div>
        </div>
    );
}

export default ChatWindow;
