import {useEffect, useState,useContext} from 'react';
import PaperPlaneIcon from '../Icons/PaperPlaneRight';
import {InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface} from '../Chat';
import {socket} from '../../../../index';
import ConversationsTab from '../components/ConversationsTab';
import DocsTab from '../components/DocsTab';
import { ChatContext } from '../../../Contexts/ChatContext';

interface ChatWindowProps {
    chatArea: String;
}


function ChatWindow() {
    const {chatArea} = useContext<ChatWindowProps>(ChatContext);
    

    return <div className='chat__chatWindow'>{chatArea === 'Conversation' ? <ConversationsTab /> : <DocsTab />}</div>;
}
export default ChatWindow;
