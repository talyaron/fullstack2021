import React from 'react'

const Login = (props: any) => {
    return (
        <div>
            <form onSubmit={props.submit}>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder='Username' autoComplete='off' />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Password' autoComplete='off' />

                <button type='submit'>LOGIN</button>
            </form>



        </div>
    )
}

export default Login