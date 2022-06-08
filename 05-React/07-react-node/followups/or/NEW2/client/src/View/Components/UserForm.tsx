import React from 'react'

const UserForm = (props: any) => {

    const { handleRegister, id } = props

    return (
        <div>
            <form onSubmit={handleRegister} id={id} className="registerForm">
                <h1>Register</h1>
                <input type="text" name="name" placeholder='Name' />
                <input type="number" name="age" placeholder='Age' />
                <textarea name="text" placeholder='Text' />
                <input type="text" name="username" placeholder='Username' />
                <input type="password" name="password" placeholder='Password' />
                <input type="text" name="image" placeholder='Image' />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default UserForm