import {useId, useEffect, useState, useRef} from 'react';
import {Avatar, InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface, UserInterface} from '../Chat';
import SearchUsersIcon from '../Icons/SearchUsers';
import SideBarDivider from '../Icons/SideBarDivider';
import {socket} from '../../../../index';
import RecipientCard from './RecipientCard';

interface SideBarProps {
    messageList: Array<MessageInterface>;
    userList: Array<MessageUserInterface>;

    setRecipient: Function;
}

function SideBar(props: SideBarProps) {
    const {messageList, userList, setRecipient} = props;
    const [selectedRec, setSelectedRec] = useState<any>('');
    const SelectedRefs: any = useRef([]);
    SelectedRefs.current = [];
    const id = useId(); 
    const addToRefs = (el: any) => {
        if (el && !SelectedRefs.current.includes(el)) {
            SelectedRefs.current.push(el);
        }
    };

    useEffect(() => {
        SelectedRefs.current.forEach((recipient: any) => {
            if (recipient.classList.contains('selected')) {
                recipient.classList.remove('selected');
            }

            if (selectedRec) {
                if (selectedRec._id === recipient.id) {
                    recipient.classList.add('selected');
                }
            }
        });
    }, [selectedRec]);
    return (
        <div className='chat__sideBar'>
            <div className='chat__sideBar__searchBar'>
                <div className={`search` + id}>
                    <InputBase placeholder='Search' />
                    <SearchUsersIcon />
                </div>
            </div>
            <ul className='chat__sideBar__recipientsList'>
                {userList ? (
                    userList.map((user: any, i: any) => {
                        return <RecipientCard messageList={messageList} addToRefs={addToRefs} setSelectedRec={setSelectedRec} setRecipient={setRecipient} user={user} key={i} />;
                    })
                ) : (
                    <h1>userList</h1>
                )}
            </ul>
        </div>
    );
}

export default SideBar;
