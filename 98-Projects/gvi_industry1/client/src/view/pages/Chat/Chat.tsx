import {useState, useEffect} from 'react';
import axios from 'axios';
import ChatWindow from './Components/ChatWindow';
import CurrentRecipient from './Components/CurrentRecipient';
import SideBar from './Components/SideBar';


export interface UserInterface {
    userId: String;
    userName: {first: String; last: String};
}
export interface MessageInterface {
    sender: UserInterface;
    // recipients: Array<UserInterface>;
    text?: String;
    file?: String;
}

function Chat() {
    const [messageList, setMessageList] = useState<Array<MessageInterface>>([
        {sender: {
          userId: "62b50ec96bd21c886f8fc3ad",
          userName: {
            first: "Etan",
            last: "Heyman"
          }
        },
        // recipients: [
        //   {
        //     "userName": {
        //       first: "Michael",
        //       last: "Dubovyk"
        //     },
        //     userId: "62b50f046bd21c886f8fc3ae"
        //   },
        //   {
        //     userId: "62b50f5b6bd21c886f8fc3af",
        //     userName: {
        //       "first": "Michael",
        //       "last": "Frankel"
        //     }
        //   },
        //   {
        //     userId: "62b50fc26bd21c886f8fc3b0",
        //     userName: {
        //       first: "Andrew",
        //       last: "Lishafay"
        //     }
        // }
        // ],
        text: "Good Evening!"
}]);
    const [userList, setUserList] = useState<Array<UserInterface>>([
        {
            userId: '62b50ec96bd21c886f8fc3ad',
            userName: {
                first: 'Etan',
                last: 'Heyman',
            },
        },
        {
            userId: '62b50f046bd21c886f8fc3ae',
            userName: {
                first: 'Michael',
                last: 'Dubovyk',
            },
        },
        {
            userId: '62b50f5b6bd21c886f8fc3af',
            userName: {
                first: 'Michael',
                last: 'Frankel',
            },
        },
        {
            userId: '62b50fc26bd21c886f8fc3b0',
            userName: {
                first: 'Andrew',
                last: 'Lishafay',
            },
        },
    ]);
    useEffect(() => {
        return() => {
    setMessageList( [... messageList])
            console.log(messageList, 'messageList -Chat');
        }
    }, []);
    async function getMessageList() {
        try {
            const {data} = await axios.post('/api/messages/get-messages', {ok: true});
            console.log(data);

            // return()=>{

            // }
        } catch (error) {
            console.log(error);
        }
    }
    async function getUserList() {
        try {
            const {data} = await axios.post('/api/users/get-all-recipients', {ok: true});
            console.log(data);

            // return()=>{

            // }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='chat'>
            <SideBar getUserList={getUserList} userList={userList} />
            <CurrentRecipient />
            <ChatWindow getMessageList={getMessageList} messageList={messageList} />
        </div>
    );
}

export default Chat;
