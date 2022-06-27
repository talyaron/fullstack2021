import {useState, useEffect, useId} from 'react';
import axios from 'axios';
import ChatWindow from './Components/ChatWindow';
import CurrentRecipient from './Components/CurrentRecipient';
import SideBar from './Components/SideBar';
import {socket} from '../../../index';
import {ObjectId} from 'mongoose'

export interface MessageUserInterface {
    userId: String;
    userName: {first: String; last: String};
}
export interface UserInterface {
    _id: String;
    userName: {first: String; last: String};
}
export interface MessageInterface {
    _id?:String;
    sender: MessageUserInterface;
    recipients: Array<MessageUserInterface>;
    text?: String;
    file?: String;
    time?: String;
}

function Chat() {
    const [scroll, setScroll] = useState('')
    const [ sentMessage, setSentMessage ] = useState ('');
    const [room, setRoom] = useState('');
    const [messageList, setMessageList] = useState<Array<MessageInterface>>([]);
    const [userList, setUserList] = useState<Array<UserInterface>>([]);
    
    function handleJoinRoom(ev: any, id: any) {
        const room = id;
        if (room !== ''|| room) {
            console.log('hi', room);
            socket.emit('join-room', room);
        }
        setRoom(room);
    }

    useEffect(() => {
        console.log('on');
        socket.on('receive-message', (message:MessageInterface) => {
            console.log('received');
            const id:any = message._id
            let dateFromObjectId =   (messageId:string) => {
                if(messageId){
                    console.log(messageId, 'message id');
                    return (`${new Date(parseInt(messageId.substring(0, 8), 16) * 1000)}`)
                }
            };
            const payload = {
                text: message.text,
                sender: {userId: '', userName: {first: '', last: ''}},
                recipients: [...message.recipients],
                file: '',
                time: dateFromObjectId(id)
            };
            console.log(payload, 'payload');
            setMessageList((messageList: Array<MessageInterface>) => [...messageList, payload]);
            console.log('data text:' + message.text)
            setScroll("0")
        });

        return () => {

            console.log('off');
            socket.off('receive-message');
        };
    }, [socket]);

    function handleSendMessage(ev:any){
        // console.log(ev);
        
        const payload = {

            text: sentMessage,
            sender: {userId: '', userName: {first: '', last: ''}},
            recipients: [{userId: room, userName: { first: '', last:''}},{userId: room, userName: { first: '', last:''}}],
            file: '',
        };
        socket.emit('send-message',payload)
        setMessageList((messageList: Array<MessageInterface>) => [...messageList, payload]);
    }
    
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
        <div  className='chat'>
            <SideBar handleJoinRoom={handleJoinRoom} getUserList={getUserList} userList={userList} />
            <CurrentRecipient />
            <ChatWindow scroll={scroll} setSentMessage={setSentMessage} handleSendMessage={handleSendMessage} getMessageList={getMessageList} messageList={messageList} setMessageList={setMessageList} />
        </div>
    );
}

export default Chat;
