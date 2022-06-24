import {useId, useEffect} from 'react';
import {InputBase} from '@mui/material';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {UserInterface} from '../Chat';
import {ReactComponent as SearchUsersIcon} from '../SearchUsers.svg';
import {ReactComponent as SVGHamburgerIcon} from '../HamburgerIcon.svg';
import {ReactComponent as SideBarDivider} from '../SideBarDivider.svg';

const HamburgerIcon = <FontAwesomeIcon style={{color: 'blue'}} icon={faBars} />;
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
    const {
        // userList
    } = props;
    const id = useId();
    return (
        <div className='chat__sideBar'>
            <div className='chat__sideBar__searchBar'>
                <SVGHamburgerIcon style={{padding: '21px 26px'}} />
                <div className={`search` + id}>
                    <SearchUsersIcon />
                    {/* <FontAwesomeIcon style={{color: 'red'}} icon={'search'} pull='left' /> */}
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
