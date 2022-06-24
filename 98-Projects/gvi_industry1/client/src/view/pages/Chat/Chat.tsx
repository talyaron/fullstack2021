import {useState} from 'react';
import axios from 'axios';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas, faL, faR, faB} from '@fortawesome/free-solid-svg-icons';
import ChatWindow from './Components/ChatWindow';
import CurrentRecipient from './Components/CurrentRecipient';
import SideBar from './Components/SideBar';
library.add(fas, faL, faR, faB);

export interface UserInterface {
    userId: String;
    userName: {first: String; last: String};
}
export interface MessageInterface {
    sender: UserInterface;
    recipients: Array<UserInterface>;
    text?: String;
    file?: String;
}

function Chat() {
    const [messageList, setMessageList] = useState<Array<MessageInterface>>();
    const [userList, setUserList] = useState<Array<UserInterface>>(
        [
    {
        userId: "62b50ec96bd21c886f8fc3ad",
        userName: {
            first: "Etan",
            last: "Heyman"
        }
    },
    {
        userId: "62b50f046bd21c886f8fc3ae",
        userName: {
            first: "Michael",
            last: "Dubovyk"
        }
    },
    {
        userId: "62b50f5b6bd21c886f8fc3af",
        userName: {
            first: "Michael",
            last: "Frankel"
        }
    },
    {
        userId: "62b50fc26bd21c886f8fc3b0",
        userName: {
            first: "Andrew",
            last: "Lishafay"
        }
    }
]

    );
    async function getUserList() {
        // const {data} = await axios.post('/api/users/get-recipients', {ok: true})
        // console.log(data);
    }
    return (
        <div className='chat'>
            <SideBar
            getUserList={getUserList}
             userList={userList} 
             />
            <CurrentRecipient />
            <ChatWindow 
            messageList={messageList}
             />
        </div>
    );
}

export default Chat;
