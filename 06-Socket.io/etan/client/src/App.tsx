import {useState, useEffect } from 'react';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import './views/styles/global.scss';
import LoginPage from './views/pages/LoginPage';
import HomePage from './views/pages/HomePage';
import Chat from './views/components/Chat';
import {socket} from './index';
import axios from 'axios';

export interface Message {
    senderId: string;
    recipientId: string;
    text?: string;
    file?: any;
    time: string;
}
export const checkCookies = async () => {
    try {
        const {data} = await axios.post('/api/users/check-cookies');
        // console.log(data);
        return await data;
    } catch (error) {
        console.log(error);
    }
};

function App() {
    const [loggedIn, setLoggedIn] = useState<Boolean>(false)
    const [usersList, setUsersList] = useState<Array<any>>([]);
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [messageList, setMessageList] = useState<Array<Message>>([]);
    const [currentMessage, setCurrentMessage] = useState<Message>();
    // const location = useLocation();
    const joinRoom = () => {
        if (room !== '') {
            console.log('match');
            socket.emit('join_room', room);
        }
    };
    const setUser = () => {
        if(username !== '') {
            console.log(username);
            
            console.log('setup');

            socket.emit('set_user', {data: username});
        }
    }
    // socket functions
    useEffect(() => {
        socket.on('connection', (result) => {
            try {
                console.log(result.length);
                if (result.length === 1) throw new Error('no other users are connected');
                if (result.length > 1) {
                    setUsersList(result);
                }
            } catch (error) {
                console.log(error);
            }

            // const client = findClientsSocket()
            // console.log(client.connect);
        });
        socket.on('receive_message', (data) => {
            try {
                if (data) console.log(data.newMessage);
                setMessageList((list: Array<Message>) => [...list, data]);
                console.log(messageList);
            } catch (error) {
                console.log(error);
            }
        });
        return () => {
            setMessageList((list: Array<Message>) => list);
            socket.off('receive_message');
            socket.off('connection');
        };
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

    // website functions

    interface UserRegistrationInfo {
        firstName: String;
        lastName: String;
        email: String;
        password: String;
        gender: String;
    }
    interface UserLoginInfo {
        email: String;
        password: String;
    }
    async function handleLogin(ev: any) {
        ev.preventDefault();
        let {email, password} = ev.target.elements;
        email = email.value;
        password = password.value;
        if (email && password) {
            const loginData: UserLoginInfo = {email, password};
            const {data} = await axios.post('/api/users/login', {loginData});
            if(data.ok === true) {
                setLoggedIn(true)
            }
        }
    }
    async function handleRegister(ev: any) {
        ev.preventDefault();
        let {firstName, lastName, email, password, gender} = ev.target.elements;
        firstName = firstName.value;
        lastName = lastName.value;
        email = email.value;
        password = password.value;
        gender = gender.value;
        if (firstName && lastName && email && password && gender) {
            const registrationData: UserRegistrationInfo = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                gender: gender,
            };
            console.log(registrationData, 'registrationData');
            const {data} = await axios.post('/api/users/register', {registrationData});
            if(data.ok === true) {
                setLoggedIn(true)
            }
        }
    }
    return (
        <AnimatePresence>
            <div className='wrapper'>
                <Router>
                    <Routes>
                        <Route path='/' element={<Chat username={username} setUser={setUser} setUsername={setUsername} room={room} setRoom={setRoom} joinRoom={joinRoom}/>}>
                            <Route path='Home' element={<HomePage usersList={usersList} joinRoom={joinRoom} sendMessage={sendMessage} />} />
                        </Route>
                        <Route path='/login' element={<LoginPage loggedIn={loggedIn} handleLogin={handleLogin} handleRegister={handleRegister} />} />
                    </Routes>
                </Router>
            </div>
        </AnimatePresence>
    );
}

export default App;
