import {useId, useEffect} from 'react';
import {InputBase} from '@mui/material';
import {UserInterface} from '../Chat';
import {ReactComponent as SearchUsersIcon} from '../Icons/SearchUsers.svg';
import {ReactComponent as SVGHamburgerIcon} from '../Icons/HamburgerIcon.svg';
import {ReactComponent as SideBarDivider} from '../Icons/SideBarDivider.svg';
import { socket } from '../../../../index';

interface SideBarProps {
    userList?: Array<UserInterface>;
    getUserList: Function;
}

function SideBar(props: SideBarProps) {
    const {userList, getUserList} = props;
    // useEffect(() => {
    //     return () => {
    //         getUserList();
    //     };
    // }, []);
    const id = useId();

    function handleJoinRoom(ev:any, id:any){
        const room = id;

        if(room != ''){
            console.log('hi',room)
            socket.emit('join-room',room)
        }

    }

    return (
        <div className='chat__sideBar'>
            <div className='chat__sideBar__searchBar'>
                <SVGHamburgerIcon style={{padding: '21px 26px'}} />
                <div className={`search` + id}>
                    <SearchUsersIcon />

                    <InputBase placeholder='Search' />
                </div>
            </div>
            <ul className='chat__sideBar__recipientsList'>
                {userList ? (
                    userList.map((user, i) => {
                        return (
                            <li key={i} onClick={(ev) => handleJoinRoom(ev, user.userId)}>
                                <p>{user.userName.last}</p>
                            </li>
                        );
                    })
                ) : (
                    <h1>userList</h1>
                )}
            </ul>
            <SideBarDivider style={{}}/>
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
