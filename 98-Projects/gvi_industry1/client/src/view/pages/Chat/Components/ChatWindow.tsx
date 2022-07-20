import {useEffect, useState} from 'react';
import PaperPlaneIcon from '../Icons/PaperPlaneRight';
import {InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface} from '../Chat';
import {socket} from '../../../../index';
import ConversationsTab from './ConversationsTab';
import DocsTab from './DocsTab';

interface ChatWindowProps {
    recipient:MessageUserInterface;
    sender: MessageUserInterface;
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
    const { recipient, sender ,dateFromObjectId, getMessageList, chatArea, messageList, setMessageList, setSentMessage, handleSendMessage, scroll} = props;


    // useEffect(() => {
    //     const messages = getMessageList();
    //     return () => {
    //         console.log(messages, 'messages ChatWindow');
    //     };
    // }, []);

    return (
        <div className='chat__chatWindow'>
            {chatArea === "Conversation" ?<ConversationsTab  recipient={recipient} sender={sender} messageList={messageList} dateFromObjectId={dateFromObjectId} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} />
            : <DocsTab/> }
        </div>
    );
}
export default ChatWindow;
