import {useEffect, useRef} from 'react';
import {MessageInterface, MessageUserInterface} from '../Chat';
import ConversationsTab from './ConversationsTab';
import DocsTab from './DocsTab';

interface ChatWindowProps {
    recipient: MessageUserInterface;
    sender: MessageUserInterface;
    chatArea: String;
    messageList: Array<MessageInterface>;
    handleSendMessage: Function;
    setSentMessage: Function;
    dateFromObjectId: Function;
}

function ChatWindow(props: ChatWindowProps) {
    const {recipient, sender, dateFromObjectId, chatArea, messageList, setSentMessage, handleSendMessage} = props;
    const messageListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
            if (messageListRef.current) {
                messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
            }

    }, [messageList]);

    

    return <div className='chat__chatWindow'>{chatArea === 'Conversation' ? <ConversationsTab messageListRef={messageListRef} recipient={recipient} sender={sender} messageList={messageList} dateFromObjectId={dateFromObjectId} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} /> : <DocsTab />}</div>;
}
export default ChatWindow;
