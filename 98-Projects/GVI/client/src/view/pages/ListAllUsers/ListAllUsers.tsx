

// interface AllUsersProps {
//     userList: any
//     // handleRegister: Function
// }

const ListAllUsers = (props:any) => {

    const { userList } = props

    return (
        <div>
            {userList.map((user: any, i:any) =>
                <div key={i} className='listName'>
                    <div><h1>First Name:</h1> <h2>{user.firstName}</h2></div>
                    <div><h1>Last Name:</h1> <h2>{user.lastName}</h2></div>
                </div>
            )}
        </div>
    )
}

export default ListAllUsers