import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ChatWindow from './Components/ChatWindow';
import CurrentRecipient from './Components/CurrentRecipient';
import SideBar from './Components/SideBar';
import {socket} from '../../../index';
export interface nameInterface {
    first: string;
    last: string;
}
export interface MessageUserInterface {
    userId: String;
    name: nameInterface;
}
export interface UserInterface {
    _id: String;
    name: nameInterface;
}
export interface MessageInterface {
    _id?: String;
    sender?: MessageUserInterface;
    recipient?: MessageUserInterface;
    text?: String;
    file?: String;
    time?: String;
}

function Chat() {
    const [chatArea, setChatArea] = useState('Conversation');

    const [sentMessage, setSentMessage] = useState('');
    const [messageList, setMessageList] = useState<Array<MessageInterface>>([]);
    //set to empty so we don't get errors about undefined userInterface:
    //FIXME: this
    const [recipient, setRecipient] = useState<any>({_id: '1', name: {first: 'a', last: 'a'}});
    const [sender, setSender] = useState<MessageUserInterface>({userId: '', name: {first: '', last: ''}});
    const [userList, setUserList] = useState<Array<any>>([]);
    const [searchMessagesToggle, setSearchMessagesToggle] = useState<boolean>(false);
    const [lastMessage, setLastMessage] = useState<MessageInterface>();
    const SelectedRefs: any = useRef([]);
    SelectedRefs.current = [];
    const addToRefs = (el: any) => {
        if (el && !SelectedRefs.current.includes(el)) {
            SelectedRefs.current.push(el);
        }
    };

    useEffect(() => {
        SelectedRefs.current.forEach((ref: any) => {
            if (ref.classList.contains('selected')) {
                ref.classList.remove('selected');
            }

            if (recipient) {
                if (recipient.userId === ref.id) {
                    ref.classList.add('selected');
                }
            }
        });
    }, [recipient]);

    function handleTabChange(ev: any) {
        ev.preventDefault();
        const pickedTab = ev.target.textContent;
        setChatArea(`${pickedTab}`);
    }
    function dateFromObjectId(messageId: string) {
        if (messageId) {
            return `${new Date(parseInt(messageId.substring(0, 8), 16) * 1000)}`;
        }
    }
    function handleJoinRoom() {
        if (userList.length > 0) {
            socket.emit('join-room', {userList, sender});
        }
    }

    useEffect(() => {
        console.log('on');

        socket.on('receive-message', (message: MessageInterface) => {
            const id: any = message._id;
            const payload = {
                text: message.text,
                sender: message.sender,
                recipient: message.recipient,
                file: '',
                time: dateFromObjectId(id),
                _id: message._id,
            };
            setMessageList((messageList: Array<MessageInterface>) => [...messageList, payload]);

        });

        return () => {
            console.log('off');
            socket.off('receive-message');
        };
    }, [socket]);

    useEffect(() => {
        getRecipientsList();
        return () => {};
    }, []);

    useEffect(() => {
        handleJoinRoom();
    }, [userList]);

    useEffect(() => {
        getMessageList();
    }, [recipient]);

    function handleChatSearchBar() {
        setSearchMessagesToggle((p: boolean) => !p);
    }
    function handleSendMessage() {
        try {
            let id: any = recipient?._id;

            if (!id) {
                id = recipient.userId;
            }

            if (sentMessage === '') throw new Error('Type something!');

            const payload = {
                text: sentMessage,
                sender: sender,
                recipient: recipient,
                file: '',
            };
            socket.emit('send-message', payload);
        } catch (error) {
            console.log(error);
        }
    }

    async function getMessageList() {
        try {
            const {data} = await axios.post('/api/messages/get-messages', {sender});
            setMessageList(data.allMessages);
        } catch (error) {
            console.log(error);
        }
    }
    async function getRecipientsList() {
        try {
            //go check if the user is a mentor, if so, return an array of mentees which already have name and userId set.
            const {data} = await axios.post('/api/users/get-all-recipients', {ok: true});
            //if not, it'll return an empty array or undefined
            const recipients = data.allRecipients;
            const {user} = data;

            setSender({userId: user.id, name: {first: user.name.first, last: user.name.last}});

            if (recipients?.length > 0) {
                setUserList(recipients);
            setRecipient(recipients[0]);
            }

            if (recipients === undefined || !recipients) {
                const {data} = await axios.post('/api/initiatives/get-all-recipients', {user});
                let localRecipients = data;
                setUserList(localRecipients);
                setRecipient(localRecipients[0]);
                if (!localRecipients[0].name.first) throw new Error('no localRecipients');
                if (localRecipients[0].name.first) {
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='chat'>
            <SideBar  addToRefs={addToRefs} dateFromObjectId={dateFromObjectId} messageList={messageList} setRecipient={setRecipient} userList={userList} />
            {recipient ? <CurrentRecipient  chatArea={chatArea} handleTabChange={handleTabChange} recipient={recipient} handleChatSearchBar={handleChatSearchBar} searchMessagesToggle={searchMessagesToggle} /> : null}
            <ChatWindow recipient={recipient} sender={sender} chatArea={chatArea} dateFromObjectId={dateFromObjectId} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} messageList={messageList} />
        </div>
    );
}

export default Chat;
