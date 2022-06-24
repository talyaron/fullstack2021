import React from 'react';
import {ReactComponent as PaperPlaneIcon} from '../paper-plane-right.svg';
import {InputBase} from '@mui/material';
function ChatWindow() {
    return (
        <div className='chat__chatWindow'>
            <div className='chat__chatWindow__messageBar'>
                <InputBase placeholder='Message' />
                <PaperPlaneIcon />
            </div>
        </div>
    );
}

export default ChatWindow;
