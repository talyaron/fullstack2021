import { useId, useEffect, useState, useRef } from 'react';
import { InputBase } from '@mui/material';
import { UserInterface } from '../Chat';
import SearchUsersIcon from '../Icons/SearchUsers';
import SideBarDivider from '../Icons/SideBarDivider';
import { socket } from '../../../../index';


interface SideBarProps {

    userList: Array<any>;

    setRecipient: Function;

}

function SideBar(props: SideBarProps) {

    const { userList, setRecipient } = props;

    const [userListMap, setUserListMap] = useState(userList[0])

    const [selectedRec, setSelectedRec] = useState<any>('')

    // const SelectedRefs = useRef<HTMLLIElement>(null!);
    const SelectedRefs: any = useRef([])
    SelectedRefs.current = [];

    const id = useId();


    const addToRefs = (el: any) => {

        if (el && !SelectedRefs.current.includes(el)) {
            SelectedRefs.current.push(el)
        }
    }

    useEffect(() => {

        SelectedRefs.current.forEach((recipient: any) => {

            if (recipient.classList.contains('selected')) {
                recipient.classList.remove('selected')
            }

            if (selectedRec) {
                if (selectedRec._id === recipient.id) {
                    recipient.classList.add('selected')
                }
            }



        });


    }, [selectedRec])

    return (
        <div className='chat__sideBar'>
            <div className='chat__sideBar__searchBar'>
                <div className={`search` + id}>
                    <InputBase placeholder='Search' />
                    <SearchUsersIcon />
                </div>
            </div>
            <ul className='chat__sideBar__recipientsList'>
                <>
                {console.log(userList)}
                </>
                {userList ? ( 
                    userList.map((user: any, i: any) => {
                        return (
                            <li
                                ref={addToRefs}
                                key={i}
                                id={user._id}
                                className='recipient'
                                onClick={() => {
                                    setSelectedRec(user)
                                    setRecipient(user);
                                }}
                            >
                                <p >{user.name.first} {user.name.last}</p>
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
