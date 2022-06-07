import React from 'react'
interface AllUsersProps {
    userList: any
}

const ListAllUsers = (props: AllUsersProps) => {
    const { userList } = props
    return (
        <div>
            {userList.map((user: any, i:any) =>
                <div className='userCard' key={user.id}>
                    <div><h1>Author: {user.name}</h1></div>
                    <div className='profileImage'>
                        <img src={user.image} alt={user.name}></img>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ListAllUsers