import {useId, useEffect} from 'react';
import {InputBase} from '@mui/material';
import {UserInterface} from '../Chat';
import {ReactComponent as SearchUsersIcon} from '../Icons/SearchUsers.svg';
import {ReactComponent as SVGHamburgerIcon} from '../Icons/HamburgerIcon.svg';
import {ReactComponent as SideBarDivider} from '../Icons/SideBarDivider.svg';

interface SideBarProps {
    userList?: Array<UserInterface>;
    getUserList: Function;
}

function SideBar(props: SideBarProps) {
    const {userList, getUserList} = props;
    useEffect(() => {
        return () => {
            getUserList();
        };
    }, []);
    const id = useId();
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
                            <li key={i}>
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
