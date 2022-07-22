import { LegacyRef } from 'react'
import {MessageInterface, MessageUserInterface} from '../Chat'
import {Avatar} from '@mui/material'
interface RecipientCardProps{
    messageList: Array<MessageInterface>;
    user: MessageUserInterface;
    setRecipient: Function;
    setSelectedRec: Function;
    addToRefs:LegacyRef<HTMLLIElement>;
}
function RecipientCard(props: RecipientCardProps) {
    const {messageList,user, setRecipient, addToRefs, setSelectedRec} = props;
    const fullName:any = `${user.name.first + ' ' + user.name.last}` ;
    const initial = fullName.match(/\b(\w)/g).join('').toUpperCase();
    const makeRecMessages = () => {
        const newMessageList = messageList.filter((message) => {
            return  user.userId === message.recipient.userId || user.userId === message.sender.userId;
        });
        return newMessageList[newMessageList.length - 1]  
    };
    let lastMessage:MessageInterface = makeRecMessages();
  return (
<li
                                ref={addToRefs}
                                id={`${user.userId}`}
                                className='recipient'
                                onClick={() => {
                                    setSelectedRec(user);
                                    setRecipient(user);
                                }}>
                                <Avatar>{initial}</Avatar>
                                <div className='text'>
                                    <h2>
                                        {user.name.first} {user.name.last}
                                    </h2>
                                    <p>
                                        {lastMessage.text}
                                    </p>
                                </div>
                            </li>  )
}

export default RecipientCard