import {useId, useEffect} from 'react';
import {Avatar, InputBase} from '@mui/material';
import {motion} from 'framer-motion';
import CallIcon from '../Icons/CallIcon';
import SearchMessages from '../Icons/SearchMessages';
import VideoIcon from '../Icons/VideoIcon';
import {UserInterface} from '../Chat';

interface CurrentRecipientProps {
    recipient: UserInterface;
    handleChatSearchBar: Function;
    handleTabChange: Function;
    chatArea: String;
    searchMessagesToggle: boolean;
}
function CurrentRecipient(props: CurrentRecipientProps) {
    const {chatArea, recipient, handleChatSearchBar, searchMessagesToggle, handleTabChange} = props;
    const fullName: any = recipient.fullName;
    const initial = fullName.match(/\b(\w)/g).join('');
    const id = useId();

    useEffect(() => {
        const pickedTab:any = document.querySelector(`.${chatArea.replace(' ', '_')}`);
        pickedTab.style.backgroundColor = 'transparent';
        pickedTab.setAttribute('picked', true)
        return () => {
            pickedTab.style.backgroundColor = 'blue';
            pickedTab.removeAttribute('picked')
        }
    }, [chatArea]);
    return (
        <div className='chat__currentRecipient'>
            <div className='chat__currentRecipient__info'>
                <Avatar>{initial}</Avatar>
                <div className={`text` + id}>
                    <p className='userName'>{recipient.fullName}</p>

                    <div
                        onClick={(ev) => {
                            handleTabChange(ev);
                        }}
                        className='activity'>
                        <button className='Conversation'>Conversation</button>
                        <div className="line"></div>
                        <button className='Shared_Docs'>Shared Docs</button>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <ul className='chat__currentRecipient__Buttons'>
                {searchMessagesToggle && <InputBase style={{backgroundColor: 'red'}} onChange={() => {}} />}
                <SearchMessages handleChatSearchBar={handleChatSearchBar} />
            </ul>
        </div>
    );
}

export default CurrentRecipient;
