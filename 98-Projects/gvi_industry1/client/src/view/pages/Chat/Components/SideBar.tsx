import {useId, useEffect, useState, useRef, LegacyRef} from 'react';
import {Avatar, InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface, UserInterface} from '../Chat';
import SearchUsersIcon from '../Icons/SearchUsers';
import SideBarDivider from '../Icons/SideBarDivider';
import {socket} from '../../../../index';
import RecipientCard from './RecipientCard';

interface SideBarProps {
    addToRefs:LegacyRef<HTMLLIElement>;
    messageList: Array<MessageInterface>;
    userList: Array<MessageUserInterface>;
    dateFromObjectId: Function;
    setRecipient: Function;
    setSelectedRec: Function;
}

function SideBar(props: SideBarProps) {
    const { setSelectedRec ,addToRefs,dateFromObjectId, messageList, userList, setRecipient} = props;
    const id = useId(); 
    
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
                        return <RecipientCard dateFromObjectId={dateFromObjectId} messageList={messageList} addToRefs={addToRefs} setSelectedRec={setSelectedRec} setRecipient={setRecipient} user={user} key={i} />;
                    })
                ) : (
                    <h1>userList</h1>
                )}
            </ul>
        </div>
    );
}

export default SideBar;
