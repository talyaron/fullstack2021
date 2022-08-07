import {LegacyRef, useEffect, useState, useContext} from 'react';
import {MessageInterface, MessageUserInterface} from '../Chat';
import {Avatar} from '@mui/material';
import {ChatContext} from '../../../Contexts/ChatContext';

interface RecipientCardProps {
    user: MessageUserInterface;
}
function RecipientCard(props: RecipientCardProps) {
    interface RecipientCardCtx {
        messageList: Array<MessageInterface>;
        setRecipient: Function;
        addToRefs: LegacyRef<HTMLLIElement>;
        dateFromObjectId: Function;
    }
    const {addToRefs, messageList, setRecipient, dateFromObjectId} = useContext<RecipientCardCtx>(ChatContext);
    const {user} = props;
    const [lastMessage, setLastMessage] = useState<MessageInterface>();
    const fullName: any = `${user.name.first + ' ' + user.name.last}`;
    const initial = fullName
        .match(/\b(\w)/g)
        .join('')
        .toUpperCase();
    const makeRecLastMessage = async () => {
        const newMessageList = messageList.filter((message) => {
            return user.userId === message?.recipient?.userId || user.userId === message?.sender?.userId;
        });
        return newMessageList[newMessageList.length - 1];
    };
    useEffect(() => {
        
        (async () => {
            setLastMessage(await makeRecLastMessage());
        })();
    }, [messageList]);

    return (
        <li
            ref={addToRefs}
            id={`${user.userId}`}
            className='recipient'
            onClick={() => {
                setRecipient(user);
            }}>
            <Avatar sx={{width: 56, height: 56}}>{user.image ? <img className="recipient_image" src={`${user.image}`} alt={`${user.image}`} /> : initial}</Avatar>
            <div className='recipient_text'>
                <h2 className='recipient_text_name'>
                    {user.name.first} {user.name.last}
                </h2>
                <p className='recipient_text_lastMessage'>
                    {lastMessage?.text}
                    <sub className='recipient_text_lastMessage-time'>{lastMessage && dateFromObjectId(lastMessage._id).slice(15, 21)}</sub>
                </p>
            </div>
        </li>
    );
}

export default RecipientCard;
