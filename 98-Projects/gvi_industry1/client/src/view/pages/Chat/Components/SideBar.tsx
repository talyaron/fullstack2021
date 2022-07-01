import {useId, useEffect} from 'react';
import {InputBase} from '@mui/material';
import {UserInterface} from '../Chat';

import SearchUsersIcon from '../Icons/SearchUsers'
import SideBarDivider from '../Icons/SideBarDivider'
import { socket } from '../../../../index';

interface SideBarProps {
    userList?: Array<UserInterface>;
    getUserList: Function;
    handleJoinRoom: Function;
}

function SideBar(props: SideBarProps) {
    const {userList, getUserList, handleJoinRoom} = props;
    useEffect(() => {
        return ()  => { 
            getUserList();
        };
    }, []);
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
                    userList.map((user, i) => {
                        return (
                            <li key={i} onClick={(ev) => handleJoinRoom(ev, user)}>
                                <p>{user.fullName}</p>
                            </li>
                        );
                    })
                ) : (
                    <h1>userList</h1>
                )}
            </ul>
            <SideBarDivider/>
            <ul className='chat__sideBar__Buttons'>
                <li className='btn'>100Tasks</li>
                <li className='btn'>Docs</li>
                <li className='btn'>Records</li>
                <li className='btn'>Home</li>
            </ul>
        </div>
    );
}

export default SideBar;
