import {useId} from 'react';
import {Avatar} from '@mui/material';
import {ReactComponent as SearchMessages} from '../Icons/SearchMessages.svg';
import {ReactComponent as VideoIcon} from '../Icons/VideoIcon.svg';
import {ReactComponent as CallIcon} from '../Icons/CallIcon.svg';


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
                    <CallIcon />
                    <VideoIcon />
                </a>
            </ul>
        </div>
    );
}

export default CurrentRecipient;
