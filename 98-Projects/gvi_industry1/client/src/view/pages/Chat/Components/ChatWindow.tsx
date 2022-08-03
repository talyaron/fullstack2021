import {useContext} from 'react';
import {ChatContext} from '../../../Contexts/ChatContext';
import ConversationsTab from './ConversationsTab';
import DocsTab from './DocsTab';

interface ChatWindowProps {
    chatArea: String;
}

function ChatWindow() {
    const {chatArea} = useContext<ChatWindowProps>(ChatContext);

    return <div className='chat__chatWindow'>{chatArea === 'Conversation' ? <ConversationsTab /> : <DocsTab />}</div>;
}
export default ChatWindow;
