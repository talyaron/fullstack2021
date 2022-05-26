import { Whatsapp } from './ChatPage'
import Message from './Message';


interface ArrayProps {
    messageArray: Array<Whatsapp>;
}

const MessageArray = (props: ArrayProps) => {
    const { messageArray } = props;
    console.log(messageArray);


    return (
        <div className='box messageGrid'>
            {messageArray.map((message: any, i: number) => {
                return (
                    <Message key={i} message={message} />
                )
            })}
        </div>
    )
}

export default MessageArray