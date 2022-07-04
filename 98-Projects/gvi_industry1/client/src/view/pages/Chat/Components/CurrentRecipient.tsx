import {useId} from 'react';
import {Avatar, InputBase} from '@mui/material';
import {motion} from 'framer-motion'
import CallIcon from '../Icons/CallIcon';
import SearchMessages from '../Icons/SearchMessages';
import VideoIcon from '../Icons/VideoIcon';
import {UserInterface} from '../Chat';


interface CurrentRecipientProps {
    recipient: UserInterface;
    handleChatSearchBar:Function
    searchMessagesToggle:boolean;
}
function CurrentRecipient(props: CurrentRecipientProps) {
    const {recipient, handleChatSearchBar, searchMessagesToggle} = props;
    const fullName: any = recipient.fullName;
    const initial = fullName.match(/\b(\w)/g).join('');
    const id = useId();
    return (
        <div className='chat__currentRecipient'>
            <div className='chat__currentRecipient__info'>
                <Avatar>{initial}</Avatar>
                <div className={`text` + id}>
                    <p className='userName'>{recipient.fullName}</p>
                    {/* איך נביא last active? */}
                    <p className='activity'>Last active Today</p>
                </div>
            </div>
            <ul className='chat__currentRecipient__Buttons'>
            {searchMessagesToggle && <InputBase style={{backgroundColor: 'red'}} onChange={()=>{}}/>}
                    <SearchMessages handleChatSearchBar={handleChatSearchBar
                    }/>
                    <CallIcon />
                    <VideoIcon />
            </ul>
        </div>
    );
}

export default CurrentRecipient;
