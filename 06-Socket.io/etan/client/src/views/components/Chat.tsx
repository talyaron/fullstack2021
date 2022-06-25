import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {socket} from '../../index';
import {checkCookies} from '../../App';
interface ChatProps {
    username: String,
    room: string;
    setUsername: Function;
    joinRoom: Function;
    setRoom: Function;
    setUser: Function;
}
function Chat(props: ChatProps) {
    const { username,setUser, joinRoom, setRoom, room, setUsername} = props;
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            (async () => {
                const login = await checkCookies();
                if (!login.ok) navigate('/login');
                setUsername(login.id);
            })();
            console.log('done cookieChecking');
        };
    }, []);
    useEffect(() => {
        joinRoom();
    }, [room]);
    useEffect(() => {
        setUser();
    }, [username]);
    //   useEffect(() => {
    //     socket.on('receive_message', (data) => {
    //       if(data)
    //       console.log(data.messageData);
    //         setMessageList((list: Array<ChatProps>) => [...list, data]);
    //         // return () => {
    //         //   setMessageList((list: Array<ChatProps>) =>[list]);
    //         //     socket.off('receive_message');
    //         // };
    //     });
    // }, [socket]);

    // useEffect(() => {
    //     (async ()=>{
    //     const destination:any = await checkCookies()
    //     console.log(destination);
    // })()

    // }, []);
    return (
        <div className='comp-Chat'>
            ChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChat
            <Outlet />
        </div>
    );
}

export default Chat;
