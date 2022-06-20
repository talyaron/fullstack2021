import {useState, useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './views/styles/global.scss';
import LoginPage from './views/pages/LoginPage';
import HomePage from './views/pages/HomePage';
import Chat from './views/components/Chat';
import {socket} from './index';



export interface Message {
    senderId: string;
    recipientId: string;
    text?: string;
    file?: any;
    time: string;
}

function App() {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [messageList ,setMessageList] = useState<Array<Message>>([]);
    const [currentMessage, setCurrentMessage] = useState<Message>();

    const joinRoom = (ev: any) => {
        setUsername(ev.target.previousElementSibling.value)
        setRoom(ev.target.value);
        if (username !== '' && room !== '') {
            socket.emit('join_room', room);
        }
    };

    useEffect(() => {
        socket.on('receive_message', (data) => {
            if (data) console.log(data.newMessage);
            setMessageList((list: Array<Message>) => [...list, data]);
            return () => {
              setMessageList((list: Array<Message>) =>list);
                socket.off('receive_message');
            };
        });
    }, [socket]);
    function getTime() {
        try {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            const second = date.getSeconds();
            const time = `${day}/${month}/${year}, ${hour}:${minute}:${second}`;
            return time;
        } catch (error) {
            console.log(error);
        }
    }
    async function sendMessage(ev: any) {
        ev.preventDefault();
        const {address, message} = ev.target.elements;
        const time = getTime();
        if (time) {
            const newMessage: Message = {senderId: '', recipientId: address, text: message, time: time};
            await socket.emit('sendMessage', newMessage);
        }
    }

    return (
        <AnimatePresence>
            <div className='wrapper'>
                <Router>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/' element={<Chat />}>
                            <Route path='/Home' element={<HomePage joinRoom={joinRoom} sendMessage={sendMessage} />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </AnimatePresence>
    );
}

export default App;
