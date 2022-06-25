import {useState, useEffect} from 'react';
import axios from 'axios';
import ChatWindow from './Components/ChatWindow';
import CurrentRecipient from './Components/CurrentRecipient';
import SideBar from './Components/SideBar';
import {socket} from '../../../index';

export interface MessageUserInterface {
    userId: String;
    userName: {first: String; last: String};
}
export interface UserInterface {
    _id: String;
    userName: {first: String; last: String};
}
export interface MessageInterface {
    sender: MessageUserInterface;
    // recipients: Array<MessageUserInterface>;
    text?: String;
    file?: String;
}

function Chat() {
    function handleJoinRoom(ev: any, id: any) {
        const room = id;
        if (room !== ''|| room) {
            console.log('hi', room);
            socket.emit('join-room', room);
        }
    }
    const [messageList, setMessageList] = useState<Array<MessageInterface>>([
        //         {sender: {
        //           userId: "62b50ec96bd21c886f8fc3ad",
        //           userName: {
        //             first: "Etan",
        //             last: "Heyman"
        //           }
        //         },
        //         // recipients: [
        //         //   {
        //         //     "userName": {
        //         //       first: "Michael",
        //         //       last: "Dubovyk"
        //         //     },
        //         //     userId: "62b50f046bd21c886f8fc3ae"
        //         //   },
        //         //   {
        //         //     userId: "62b50f5b6bd21c886f8fc3af",
        //         //     userName: {
        //         //       "first": "Michael",
        //         //       "last": "Frankel"
        //         //     }
        //         //   },
        //         //   {
        //         //     userId: "62b50fc26bd21c886f8fc3b0",
        //         //     userName: {
        //         //       first: "Andrew",
        //         //       last: "Lishafay"
        //         //     }
        //         // }
        //         // ],
        //         text: "Good Evening!"
        // }
    ]);
    const [userList, setUserList] = useState<Array<UserInterface>>([
        
    ]);
    

    useEffect(() => {
        console.log('on');

        socket.on('receive-message', (data) => {
            console.log('received');

            const payload = {
                text: data.message,
                sender: {userId: '', userName: {first: '', last: ''}},
                recipients: [],
                file: '',
            };
            setMessageList((messageList: Array<MessageInterface>) => [...messageList, payload]);
            // console.log('data message:' + data.message)
        });

        return () => {
            console.log('off');
            socket.off('recieve-message');
        };
    }, [socket]);

    async function getMessageList() {
        try {
            const {data} = await axios.post('/api/messages/get-messages', {ok: true});
            console.log(data.allMessages, 'messageList');
            setMessageList(data.allMessages);
            // return()=>{

            // }
        } catch (error) {
            console.log(error);
        }
    }
    async function getUserList() {
        try {
            const {data} = await axios.post('/api/users/get-all-recipients', {ok: true});
            console.log(data.allUsers, 'userList');
            setUserList(data.allUsers);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='chat'>
            <SideBar handleJoinRoom={handleJoinRoom} getUserList={getUserList} userList={userList} />
            <CurrentRecipient />
            <ChatWindow getMessageList={getMessageList} messageList={messageList} setMessageList={setMessageList} />
        </div>
    );
}

export default Chat;
