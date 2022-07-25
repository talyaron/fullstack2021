import {useId, useContext} from 'react';
import {InputBase} from '@mui/material';
import {MessageUserInterface} from '../Chat';
import SearchUsersIcon from '../Icons/SearchUsers';
import RecipientCard from '../Components/RecipientCard';
import {ChatContext} from '../../../Contexts/ChatContext';

interface SideBarProps {
    userList: Array<MessageUserInterface>;
}

function SideBar() {
    const {userList} = useContext<SideBarProps>(ChatContext);
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
                        return <RecipientCard user={user} key={i} />;
                    })
                ) : (
                    <h1>userList</h1>
                )}
            </ul>
        </div>
    );
}

export default SideBar;
