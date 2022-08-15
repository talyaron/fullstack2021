import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import ChatWindow from './components/ChatWindow';
import CurrentRecipient from './components/CurrentRecipient';
import SideBar from './components/SideBar';
import {socket} from '../../../index';
import {ChatProvider} from '../../Contexts/ChatContext';
export interface nameInterface {
    first: string;
    last: string;
}
export interface MessageUserInterface {
    userId: String;
    name: nameInterface;
    image?: String;
}
export interface UserInterface {
    _id: String;
    name: nameInterface;
    image?: String;
}
export interface MessageInterface {
    _id?: String;
    sender?: MessageUserInterface;
    recipient?: MessageUserInterface;
    text?: string;
    file?: String;
    time?: String;
}

function Chat() {
    
    const [chatArea, setChatArea] = useState('Conversation');
    const [messageList, setMessageList] = useState<Array<MessageInterface>>([]);
    //set to empty so we don't get errors about undefined userInterface:
    //FIXME: this
    const [sentMessage, setSentMessage] = useState<String>('');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sentFile, setSentFile] = useState<any>('');
    const [recipient, setRecipient] = useState<any>({_id: '1', name: {first: 'a', last: 'a'}});
    const [sender, setSender] = useState<MessageUserInterface>({userId: '', name: {first: '', last: ''}});
    const [userList, setUserList] = useState<Array<any>>([]);
    const [searchTerm, setSearchTerm] = useState<String>('');
    const SelectedRefs: any = useRef([]);
    const messageListRef = useRef<HTMLUListElement>(null);
    const messageInputRef = useRef<any>(null);

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
    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
}, [messageList, chatArea, recipient]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket]);

    useEffect(() => {
        getRecipientsList();
        return () => {};
    }, []);

    useEffect(() => {
        handleJoinRoom();
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userList]);

    useEffect(() => {
        return () => {
            getMessageList();
        };
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipient]);

    function handleChatSearchBar(ev:any) {

        setSearchTerm(ev.target.value);

    }

    async function handleSendMessage(e:any) {
        try {
            e.preventDefault();
            let id: any = recipient?._id;

            if (!id) {
                id = recipient.userId;
            }
            // don't Delete!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // file solution kind of broke it all:
            // console.log(sentFile.url, 'sentFile');

            // const fileLink = sentFile.url;
            // let fileLink = await sentFile;
            // if (fileLink !== '' || fileLink !== undefined) {
            //     // goes inside even though it is false
            //     console.log(sentFile === '');
            //     console.log(fileLink === '');

            //     console.log(sentFile);
            //     const payload = {
            //         text: '',
            //         sender: sender,
            //         recipient: recipient,
            //         file: fileLink,
            //     };
            //     socket.emit('send-message', payload);
            //     return;
            // }
            if (sentMessage === '') throw new Error('Type something!');

            const payload = {
                text: sentMessage,
                sender: sender,
                recipient: recipient,
                file: '',
            };
            socket.emit('send-message', payload);
return setSentMessage('')
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
                // if (!localRecipients[0].name.first) throw new Error('no localRecipients');
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='chat'>
            <ChatProvider value={{setMessageList, searchTerm, messageInputRef,setSentFile, sender, handleSendMessage,messageListRef,handleTabChange,addToRefs, messageList, setRecipient,dateFromObjectId,sentMessage, setSentMessage, recipient, chatArea, handleChatSearchBar, userList}}>
                <SideBar/>
                {recipient ? <CurrentRecipient /> : null}
                <ChatWindow />
            </ChatProvider>
        </div>
    );
}

export default Chat;
