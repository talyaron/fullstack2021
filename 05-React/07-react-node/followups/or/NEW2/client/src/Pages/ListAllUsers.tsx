import React from 'react'
import { Link } from 'react-router-dom'
import UserForm from '../View/Components/UserForm'

interface AllUsersProps {
    userList: any
    // handleRegister: Function
}

const ListAllUsers = (props: AllUsersProps) => {
    const { userList } = props

    return (
        <div>
            {userList.map((user: any) =>
                <div >
                    <div key={user.id}>
                        <Link to={`/user/${user._id}`} className='userCard'>
                            <div><h1>{user.title}</h1></div>
                            <div><h1>Author: <h3>{user.name}</h3></h1></div>
                            <div className='profileImage'>
                                <img src={user.image} alt={user.name}></img>
                            </div>
                        </Link>
                        <div className='hr'><hr></hr></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListAllUsers