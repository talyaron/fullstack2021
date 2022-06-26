import React from 'react'

const Login = (props: any) => {

    const {loginFail} = props;

    return (
        <div className='login-container'>
            <form onSubmit={props.submit} className='login-form'>


                <div className={!loginFail ? 'input-container' : 'input-container existError'}>
                <input type="text" name="username" placeholder='Username' autoComplete='off' />
                </div>
                <div className={!loginFail ? 'input-container' : 'input-container existError'}>
                <input type="password" name="password" placeholder='Password' autoComplete='off' />
                </div>

                {loginFail && <span className='data-error' >Sorry, username or password doesnt match.</span>}

                <button type='submit' className='.button-14'>LOGIN</button>
            </form>



        </div>
    )
}

export default Login

