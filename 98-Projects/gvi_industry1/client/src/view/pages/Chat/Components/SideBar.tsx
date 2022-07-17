import {useId, useEffect, useState, useRef} from 'react';
import {InputBase} from '@mui/material';
import {UserInterface} from '../Chat';
import SearchUsersIcon from '../Icons/SearchUsers';
import SideBarDivider from '../Icons/SideBarDivider';
import {socket} from '../../../../index';

interface SideBarProps {

    userList: Array<any>;

    setRecipient: Function;

}

function SideBar(props: SideBarProps) {

    const {userList, setRecipient} = props;

    const [userListMap,setUserListMap] = useState(userList[0])

    const [selectedRec, setSelectedRec] = useState(false)

    const SelectedRef = useRef(null);
    
    const id = useId();

    useEffect(()=>{
        return (()=>{
            console.log('userlistmap sidebar'+ userListMap)
        })
    },[])

    return (
        <div className='chat__sideBar'>
            <div className='chat__sideBar__searchBar'>
                <div className={`search` + id}>
                    <InputBase placeholder='Search' />
                    <SearchUsersIcon />
                </div>
            </div>
            <ul className='chat__sideBar__recipientsList'>
                {userListMap ? (
                    userListMap.map((user:any, i:any) => {
                        return (
                            <li className={selectedRec ? "selected": "notSelected"}
                                key={i}
                                onClick={() => {
                                    // setRecipient(user);
                                    setSelectedRec(true)
                                }}
                                >
                                <p ref={SelectedRef}>{user.userName.first} {user.userName.last}</p>
                            </li>
                        );
                    })
                ) : (
                    <h1>userList</h1>
                )}
            </ul>
            {/* <SideBarDivider/> */}
        </div>
    );
}

export default SideBar;
