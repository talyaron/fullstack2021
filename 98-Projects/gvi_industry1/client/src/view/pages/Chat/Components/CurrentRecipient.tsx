import {useId} from 'react';
import {Avatar} from '@mui/material';
import CallIcon from '../Icons/CallIcon';
import SearchMessages from '../Icons/SearchMessages';
import VideoIcon from '../Icons/VideoIcon';


interface CurrentRecipientProps {}
function CurrentRecipient(props: CurrentRecipientProps) {


    const id = useId();
    return (
        <div className='chat__currentRecipient'>
            <div className='chat__currentRecipient__info'>
                <Avatar>EH</Avatar>
                <div className={`text` + id}>
                    <p className="userName">Etan Heyman</p>
                    {/* איך נביא last active? */}
                    <p className='activity'>Last active Today</p>
                </div>
            </div>
            <ul className='chat__currentRecipient__Buttons'>
                <a href=''>
                    <SearchMessages />
                    <CallIcon/>
                    <VideoIcon />
                </a>
            </ul>
        </div>
    );
}

export default CurrentRecipient;
