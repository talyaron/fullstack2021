import {useId, useEffect} from 'react';
import {InputBase} from '@mui/material';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {UserInterface} from '../Chat';
const HamburgerIcon = <FontAwesomeIcon style={{color: 'blue'}} icon={faBars} />;
interface SideBarProps {
    userList?: Array<UserInterface>;
    getUserList: Function;
}

function SideBar(props: SideBarProps) {
    const {userList, getUserList} = props;
    useEffect(() => {
        return () =>{
            getUserList();

        }

    },[])
    const {
        // userList
    } = props;
    const id = useId();
    return (
        <div className='chat__sideBar'>
            <div className='chat__sideBar__searchBar'>
                {HamburgerIcon}
                <div className={`search` + id}>
                    <FontAwesomeIcon style={{color: 'red'}} icon={'search'} pull='left' />
                    <InputBase />
                </div>
            </div>
            <ul className='chat__sideBar__recipientsList'>
                {userList
                    ? userList.map((user, i) => {
                          return <li key={i}>
                            <p>
                            {user.userName.last}
                            </p>
                            </li>;
                      })
                    : <h1>userList</h1>}
            </ul>
            <ul className='chat__sideBar__buttons'>
                <li className='btn'>100Tasks</li>
                <li className='btn'>Docs</li>
                <li className='btn'>Records</li>
                <li className='btn'>Home</li>
            </ul>
        </div>
    );
}

export default SideBar;
