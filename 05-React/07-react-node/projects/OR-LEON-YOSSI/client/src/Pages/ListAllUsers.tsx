import UserForm from '../View/Components/UserForm'
import { Link } from "react-router-dom";

import React from 'react'
interface AllUsersProps {
    userList: any
    handleRegister: Function
}

const ListAllUsers = (props: AllUsersProps) => {
    const { userList, handleRegister } = props
    return (
        <div>
            <UserForm handleRegister={handleRegister} />
            {userList.map((user: any, i: any) =>
                <Link to={`/${user._id}`}>
                    <div className='userCard' key={user.id}>
                        <div><h1>Author: {user.name}</h1></div>
                        <div className='profileImage'>
                            <img src={user.image} alt={user.name}></img>
                        </div>
                    </div>
                </Link>
            )}

        </div>
    )
}

export default ListAllUsers