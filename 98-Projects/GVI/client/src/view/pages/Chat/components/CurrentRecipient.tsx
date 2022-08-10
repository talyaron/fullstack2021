import { useId, useEffect,  useContext } from 'react';
import { Avatar, InputBase } from '@mui/material';
import SearchMessages from '../Icons/SearchMessages';
import { UserInterface } from '../Chat';
import { ChatContext } from '../../../Contexts/ChatContext';

interface CurrentRecipientProps {
    recipient: UserInterface;
    handleChatSearchBar: Function;
    handleTabChange: Function;
    chatArea: String;
    searchMessagesToggle: boolean;
}
function CurrentRecipient() {
    const { chatArea, recipient, handleTabChange } = useContext<CurrentRecipientProps>(ChatContext);
    const fullName: any = `${recipient.name.first + ' ' + recipient.name.last}`;
    const initial = fullName.match(/\b(\w)/g).join('').toUpperCase();
    const id = useId();

    useEffect(() => {
        const pickedTab: any = document.querySelector(`.${chatArea.replace(' ', '_')}`);
        pickedTab.style.backgroundColor = '#cdcdcd';
        pickedTab.setAttribute('picked', true)
        return () => {
            pickedTab.style.backgroundColor = 'transparent';
            pickedTab.removeAttribute('picked')
        }
    }, [chatArea]);
    return (
        <div className='chat__currentRecipient'>
            <div className='chat__currentRecipient__info'>
                <Avatar>{recipient.image? <img src={`${recipient.image}`} alt="" className="image" /> :initial }</Avatar>
                <div className={`text` + id}>
                    <p className='userName'>{recipient.name.first} {recipient.name.last}</p>

                    <div

                        className='activity'>
                        <button className='Conversation' onClick={(ev) => {
                            handleTabChange(ev);
                        }}>Conversation</button>
                        <button className='Shared_Docs' onClick={(ev) => {
                            handleTabChange(ev);
                        }}>Shared Docs</button>
                    </div>
                </div>
            </div>
            <ul className='chat__currentRecipient__Buttons'>
                {/* {searchMessagesToggle && <InputBase style={{ backgroundColor: 'red' }} />}
                <SearchMessages handleChatSearchBar={handleChatSearchBar} /> */}
            </ul>
        </div>
    );
}

export default CurrentRecipient;
