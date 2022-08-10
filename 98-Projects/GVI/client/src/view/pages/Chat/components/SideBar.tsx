import {useId, useContext} from 'react';
import {InputBase} from '@mui/material';
import {MessageUserInterface} from '../Chat';
import SearchUsersIcon from '../Icons/SearchUsers';
import RecipientCard from './RecipientCard';
import {ChatContext} from '../../../Contexts/ChatContext';

interface SideBarProps {
    userList?: Array<MessageUserInterface>;
    handleChatSearchBar: Function;
}



function SideBar() {

    const {userList, handleChatSearchBar} = useContext<SideBarProps>(ChatContext);

    const id = useId();
    return (
        <div className='chat__sideBar'>
            <div className='chat__sideBar__searchBar'>
                <div className={`search` + id}>
                    <InputBase placeholder='Search' onChange={(event)=>handleChatSearchBar(event)} />
                    <SearchUsersIcon />
                </div>
            </div>
            <ul className='chat__sideBar__recipientsList'>
                {(userList && userList.length > 0) ? (
                    userList.map((user: any, i: any) => {
                        return <RecipientCard user={user} key={i} />;
                    })
                ) : (
                    null
                )}
            </ul>
        </div>
    );
}

export default SideBar;
