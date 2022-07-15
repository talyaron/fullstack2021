import {useState, useEffect, useId} from 'react';
import axios from 'axios';
import ChatWindow from './components/ChatWindow';
import CurrentRecipient from './components/CurrentRecipient';
import SideBar from './components/SideBar';
import {socket} from '../../../index';
import {ObjectId} from 'mongoose';
import {text} from 'node:stream/consumers';
import UserList from './Untitled.json';
export interface nameInterface {
    first: string;
    last: string;
}
export interface MessageUserInterface {
    userId: String;
    name: nameInterface;
}
export interface UserInterface {
    userId: String;
    name: nameInterface;
}
export interface MessageInterface {
    _id?: String;
    sender: MessageUserInterface;
    recipients: Array<MessageUserInterface>;
    text?: String;
    file?: String;
    time?: String;
}

function Chat() {
    const [chatArea, setChatArea] = useState('Conversation');
    const [scroll, setScroll] = useState('');
    const [sentMessage, setSentMessage] = useState('');
    const [room, setRoom] = useState('');
    const [messageList, setMessageList] = useState<Array<MessageInterface>>([]);
    //set to empty so we don't get errors about undefined userInterface:
    const [recipient, setRecipient] = useState<UserInterface>({userId:'', name: {first: 'a', last: 'a'}});
    const [sender, setSender] = useState<MessageUserInterface>({userId: '', name: {first:'', last: ''}})
    const [userList, setUserList] = useState<Array<any>>([]);
    const [searchMessagesToggle, setSearchMessagesToggle] = useState<boolean>(false);



    function handleTabChange(ev:any) {
        ev.preventDefault();
        const pickedTab = ev.target.textContent;
        
        setChatArea(`${pickedTab}`)
    }
    function dateFromObjectId(messageId: string) {
        if (messageId) {
            return `${new Date(parseInt(messageId.substring(0, 8), 16) * 1000)}`;
        }
    }
    function handleJoinRoom() {
        if (userList !== [] && userList) {
            socket.emit('join-room', userList);
        }
    }

    

    useEffect(() => {
        console.log('on');

        socket.on('receive-message', (message: MessageInterface) => {
            console.log('received');
            const id: any = message._id;
            const payload = {
                text: message.text,
                sender: message.sender,
                recipients: [...message.recipients],
                file: '',
                time: dateFromObjectId(id),
            };

            setMessageList((messageList: Array<MessageInterface>) => [...messageList, payload]);

            setScroll('0');
        });

        return () => {
            console.log('off');
            socket.off('receive-message');
        };
    }, [socket]);

    useEffect(() => {
        return () => {
            // how to clean requests so it doesn't happen again on unmount?
            getRecipientsList();
            handleJoinRoom();          
        };
    }, []);
useEffect(() => {getMessageList(recipient)},[recipient])
    function handleChatSearchBar() {
        setSearchMessagesToggle((p: boolean) => !p);
    }
    function handleSendMessage() {
        try {
            const id: any = recipient?.userId;
            const name:nameInterface = recipient?.name;
            console.log(recipient, name, 'id and name 104');
            
            if (sentMessage === '') throw new Error('Type something!');
            const payload = {
                text: sentMessage,
                sender: sender,
                recipients: [{userId: id, name: name}],
                file: '',
            };
            socket.emit('send-message', payload);
            setMessageList((messageList: Array<MessageInterface>) => [...messageList, payload]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getMessageList(recipient:any) {
        try {
            const {data} = await axios.post('/api/messages/get-messages', 
            // {recipientId: recipient._id}
            );
            setMessageList(data.allMessages);
            
        } catch (error) {
            console.log(error);
        }
    }
    async function getRecipientsList() {
        try {
            const {data} = await axios.post('/api/users/get-all-recipients', {ok: true});
            const recipients = data.allRecipients;
            const {user} = data
            setSender({userId: user.id, name: {first: user.name.first, last: user.name.last}})
            if(recipients){                
                setUserList(recipients);
            }
            if(recipients === undefined) {
                const {data} = await axios.post('api/initiatives/get-all-recipients', {user});
                const recipients = data; 
                setUserList(recipients);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='chat'>
            <SideBar setRecipient={setRecipient} userList={userList} />
            {recipient ? <CurrentRecipient chatArea={chatArea} handleTabChange={handleTabChange} recipient={recipient} handleChatSearchBar={handleChatSearchBar} searchMessagesToggle={searchMessagesToggle} /> : null}
            <ChatWindow chatArea={chatArea} dateFromObjectId={dateFromObjectId} scroll={scroll} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} getMessageList={getMessageList} messageList={messageList} setMessageList={setMessageList} />
        </div>
    );
}

export default Chat;
