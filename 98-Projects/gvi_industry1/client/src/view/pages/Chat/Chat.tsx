import {useState, useEffect, useId, useRef} from 'react';
import axios from 'axios';
import ChatWindow from './Components/ChatWindow';
import CurrentRecipient from './Components/CurrentRecipient';
import SideBar from './Components/SideBar';
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
    _id: String;
    name: nameInterface;
}
export interface MessageInterface {
    _id?: String;
    sender: MessageUserInterface;
    recipient: MessageUserInterface;
    text?: String;
    file?: String;
    time?: String;
}

function Chat() {
    const [chatArea, setChatArea] = useState('Conversation');
    // const recipientList:any = getRecipientsList()
    const [scroll, setScroll] = useState('');
    const [sentMessage, setSentMessage] = useState('');
    const [messageList, setMessageList] = useState<Array<MessageInterface>>([]);
    //set to empty so we don't get errors about undefined userInterface:
    const [recipient, setRecipient] = useState<any>({_id: '1', name: {first: 'a', last: 'a'}});
    const [sender, setSender] = useState<MessageUserInterface>({userId: '', name: {first: '', last: ''}});
    const [userList, setUserList] = useState<Array<any>>([]);
    const [searchMessagesToggle, setSearchMessagesToggle] = useState<boolean>(false);

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
            console.log('received');
            const id: any = message._id;
            const payload = {
                text: message.text,
                sender: message.sender,
                recipient: message.recipient,
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
        // how to clean requests so it doesn't happen again on unmount?
        return () => {
            getRecipientsList();
            (async () => {
                // console.log(await getRecipientsList(), 'getRecipientList onload -89 chat.tsx');
            })();
        };
    }, []);
    useEffect(() => {
        handleJoinRoom();
    }, [userList]);
    useEffect(() => {
        getMessageList(recipient);
    }, [recipient]);
    function handleChatSearchBar() {
        setSearchMessagesToggle((p: boolean) => !p);
    }
    function handleSendMessage() {
        try {
            let id: any = recipient?._id;
            const name: nameInterface = recipient?.name;
            if (!id) {
                id = recipient.userId;
            }
            // console.log(id, name, recipient,'id and name 103 -chattsx');

            if (sentMessage === '') throw new Error('Type something!');
            // console.log({sentMessage: sentMessage}, {sender: sender}, {recipient: recipient}, 'sentMessage sender recipient');

            const payload = {
                text: sentMessage,
                sender: sender,
                recipient: recipient,
                file: '',
            };
            socket.emit('send-message', payload);
            // setMessageList((messageList: Array<MessageInterface>) => [...messageList, payload]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getMessageList(recipient: any) {
        try {
            const {data} = await axios.post(
                '/api/messages/get-messages'
                // {recipientId: recipient._id}
            );
            setMessageList(data.allMessages);
            //was meant to filter between recipient and sender message,
            //cant think of anything else you would want to differentiate them by,
            //maybe useful later
            // if (sender.userId) {
            //     let myMessageList = data.allMessages.filter((message: any) => {
            //         return message.sender.userId === sender.userId;
            //     });
            //     myMessageList.forEach((message: any) => {
            //         console.log(message.text, 'myMessageList');
            //     });
            //     // console.log(myMessageList, 'myMessageList');
            // }
            // if(!recipient.userId) throw new Error('no recipient Id -141 getMessageList Chat.tsx')
            // if (recipient) {
            //     let recipientsMessages = data.allMessages.filter((message: any) => {
            //         if (message.recipient.userId) {
            //             return message.recipient.userId === recipient._id;
            //         }
            //         if (message.recipient._id) {
            //             return message.recipient._id === recipient._id;
            //         }
            //     });
            //     // recipientsMessages.forEach((message: any) => {
            //     //     console.log(message.recipient.userId, message.recipient._id, 'recipientsMessages');
            //     // });
            //     // console.log(recipientsMessages, 'recipientsMessages');
            // }

            // // console.log(recipientsMessages, 'recipientsMessages');
        } catch (error) {
            console.log(error);
        }
    }
    async function getRecipientsList() {
        try {
            //go check if the user is a mentor, if so, return an array of mentees which already have name and userId set.
            const {data} = await axios.post('/api/users/get-all-recipients', {ok: true});
            const recipients = data.allRecipients;
            const {user} = data;

            console.log(recipients,'recipient list from mentees -175');
            
            setSender({userId: user.id, name: {first: user.name.first, last: user.name.last}});
            console.log(recipients,'recipient list from mentees -178');
            if (recipients?.length > 0) {
                setUserList(recipients);
                setRecipient(recipients[0]);
                console.log(recipients,'recipient list from mentees, we`re mentors');

            }
            
            console.log(recipients,'recipient list from mentees -184');
            if (recipients === undefined || !recipients) {
                console.log(recipients,'recipient list from mentees -186');
                const {data} = await axios.post('/api/initiatives/get-all-recipients', {user});
                console.log(data);
                
                let localRecipients = data;
                console.log(localRecipients,'recipient list from initiative, we`re mentees');

                setUserList(localRecipients);
                setRecipient(localRecipients[0]);
                if (!localRecipients[0].name.first) throw new Error('no localRecipients');
                if (localRecipients[0].name.first) {
                    console.log(localRecipients[0].name.last, 'localRecipients[0].name.last');
                }
                console.log(localRecipients, 'localRecipients 189 chat.tsx');
                
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='chat'>
            <SideBar messageList={messageList} setRecipient={setRecipient} userList={userList} />
            {recipient ? <CurrentRecipient chatArea={chatArea} handleTabChange={handleTabChange} recipient={recipient} handleChatSearchBar={handleChatSearchBar} searchMessagesToggle={searchMessagesToggle} /> : null}
            <ChatWindow  recipient={recipient} sender={sender} chatArea={chatArea} dateFromObjectId={dateFromObjectId} scroll={scroll} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} getMessageList={getMessageList} messageList={messageList} setMessageList={setMessageList} />
        </div>
    );
}

export default Chat;
