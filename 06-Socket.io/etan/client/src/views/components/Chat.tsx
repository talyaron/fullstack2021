import {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import {socket} from '../../index'
function Chat() {
  const navigate = useNavigate();

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

useEffect(() =>{navigate('home')},[])
  return (
    <div className="comp-Chat">ChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChat
    
    <Outlet/></div>
  )
}

export default Chat