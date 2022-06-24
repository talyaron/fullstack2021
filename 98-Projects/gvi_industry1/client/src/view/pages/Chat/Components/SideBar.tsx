import {useId} from 'react';
import {InputBase} from '@mui/material';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const HamburgerIcon = <FontAwesomeIcon style={{color: 'blue'}} icon={faBars} />;
interface SideBarProps {
}
function SideBar(props: SideBarProps) {
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
            <ul className='chat__sideBar__recipientsList'></ul>
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
