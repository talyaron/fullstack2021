import {useEffect, useRef} from 'react';
import {MessageInterface, MessageUserInterface} from '../Chat';
import ConversationsTab from './ConversationsTab';
import DocsTab from './DocsTab';

interface ChatWindowProps {
    sentMessage:any;
    recipient: MessageUserInterface;
    sender: MessageUserInterface;
    chatArea: String;
    messageList: Array<MessageInterface>;
    handleSendMessage: Function;
    setSentMessage: Function;
    dateFromObjectId: Function;
    setSentFile:Function;
}

function ChatWindow(props: ChatWindowProps) {
    const {sentMessage,setSentFile,recipient, sender, dateFromObjectId, chatArea, messageList, setSentMessage, handleSendMessage} = props;
    const messageListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
            if (messageListRef.current) {
                messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
            }
    }, [messageList, chatArea]);

    

    return <div className='chat__chatWindow'>{chatArea === 'Conversation' ? <ConversationsTab sentMessage={sentMessage} messageListRef={messageListRef} recipient={recipient} sender={sender} messageList={messageList} dateFromObjectId={dateFromObjectId} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} /> : <DocsTab recipient={recipient} sender={sender} dateFromObjectId={dateFromObjectId} messageList={messageList} setSentFile={setSentFile} handleSendMessage={handleSendMessage} />}</div>;
}
export default ChatWindow;
