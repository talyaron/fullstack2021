import React from 'react'

const Login = (props: any) => {
    return (
        <div className='login-container'>
            <form onSubmit={props.submit} className='login-form'>
                <div>
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" name="username" placeholder='Username' autoComplete='off' />
                </div>
                <div>
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" name="password" placeholder='Password' autoComplete='off' />
                </div>
                <button type='submit'>LOGIN</button>
            </form>



        </div>
    )
}

export default Login