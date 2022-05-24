import { Whatsapp } from './ChatPage';

interface MessageProps {
    message: any;
}

const Message = (props: MessageProps) => {
    const { message } = props;


    return (
        <div className='box message'>
            <p>{message.text}</p>
        </div>
    )
}

export default Message