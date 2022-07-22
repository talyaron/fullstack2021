import {useId, useEffect} from 'react';
import {Avatar, InputBase} from '@mui/material';
import SearchMessages from '../Icons/SearchMessages';
import {UserInterface} from '../Chat';

interface CurrentRecipientProps {
    setSearchTerm: Function;
    recipient: UserInterface;
    handleChatSearchBar: Function;
    handleTabChange: Function;
    chatArea: String;
    searchMessagesToggle: boolean;
}
function CurrentRecipient(props: CurrentRecipientProps) {
    const {setSearchTerm,chatArea, recipient, handleChatSearchBar, searchMessagesToggle, handleTabChange} = props;
    const fullName:any = `${recipient.name.first + ' ' + recipient.name.last}` ;
    
    const initial = fullName.match(/\b(\w)/g).join('').toUpperCase();
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
                    <p className='userName'>{recipient.name.first} {recipient.name.last}</p>

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
                {searchMessagesToggle && <InputBase style={{backgroundColor: 'red'}} onChange={(ev) => {setSearchTerm(ev.target.value)}} />}
                <SearchMessages handleChatSearchBar={handleChatSearchBar} />
            </ul>
        </div>
    );
}

export default CurrentRecipient;
