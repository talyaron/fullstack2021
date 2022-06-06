import React from 'react'

const UserForm = (props: any) => {

    const{ handleRegister }=props
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Name' autoComplete="off"/>
                <input type="age" name="age" placeholder='Age' autoComplete="off"/>
                <input type="text" name="occupation" placeholder='Occupation' />
                <input type="username" name="username" placeholder='Username' autoComplete="off"/>
                <input type="password" name="password" placeholder='Password' autoComplete="off"/>
                <input type="text" name="image" placeholder='Image' autoComplete="off"/>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default UserForm