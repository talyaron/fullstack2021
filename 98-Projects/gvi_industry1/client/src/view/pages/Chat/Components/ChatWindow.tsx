import {useEffect, useState} from 'react';
import PaperPlaneIcon from '../Icons/PaperPlaneRight';
import {InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface} from '../Chat';
import {socket} from '../../../../index';
import ConversationsTab from './ConversationsTab';
import DocsTab from './DocsTab';

interface ChatWindowProps {
    scroll: String;
    chatArea: String;
    messageList?: Array<MessageInterface>;
    getMessageList: Function;
    setMessageList: Function;
    handleSendMessage: Function;
    setSentMessage: Function;
    dateFromObjectId: Function;
}

function ChatWindow(props: ChatWindowProps) {
    const {dateFromObjectId, getMessageList, chatArea, messageList, setMessageList, setSentMessage, handleSendMessage, scroll} = props;

    useEffect(() => {
        let messageList = document.querySelector('.chat__chatWindow__messagesList');
        if (messageList) {
            messageList.scrollTop = messageList.scrollHeight;
        }
    }, [messageList]);

    useEffect(() => {
        const messages = getMessageList();
        return () => {
            console.log(messages, 'messages ChatWindow');
        };
    }, []);

    return (
        <div className='chat__chatWindow'>
            {chatArea === "Conversation" ?<ConversationsTab messageList={messageList} dateFromObjectId={dateFromObjectId} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} />
            : <DocsTab/> }
        </div>
    );
}
export default ChatWindow;
