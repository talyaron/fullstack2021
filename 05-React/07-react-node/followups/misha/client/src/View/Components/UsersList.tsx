import React from 'react';
import UserForm from './RegistrationForm';

const UsersList = (props:any) => {

    const {userList,handleDelete,handleUpdate} = props;

  return (
    <div className='userListContainer'>
         {userList.map((user: any, i) =>
        <div key={i} className='user-container'>
          <div className='user-texts'>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
          <h3>Occupation: {user.occupation}</h3>
          </div>
          <div className='user-image-container'>
            <img src={user.image} alt={user.name}></img>
          </div>
          
          {/* <UserForm submit={handleUpdate} id={user._id} button='UPDATE' /> */}
          <button onClick={handleDelete} id={user._id} className='.button-14'>DELETE</button>
          

        </div>
      )}
    </div>
  )
}

export default UsersList