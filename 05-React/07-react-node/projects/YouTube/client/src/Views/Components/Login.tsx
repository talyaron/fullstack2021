import React, { useRef } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { fontSize } from '@mui/system';

interface LoginProps {
    setOpenLogin: Function;
    openLogin: Boolean;
    handleLogin: Function;
    loginConfirm: Boolean;
}

const Login = (props: LoginProps) => {
    const { setOpenLogin, openLogin, handleLogin, loginConfirm } = props
    console.log(loginConfirm);
    

    function handleOpenLogin () {

        setOpenLogin(!openLogin)

    }


    return (
        <div className='comp__login'>
            <div className="login" onClick={() => handleOpenLogin()}>
                <AccountCircleOutlinedIcon className='icon' />
                <p>Login</p>
            </div>

            {openLogin ?

                <>

                    <div className="form">

                        <form onSubmit={(e: any) => handleLogin(e)}>
                            <input type="text" name="name" placeholder='name' />
                            <input type="password" name="password" placeholder='password' />
                            <input type="submit" value="Login" />
                            {loginConfirm ? 
                            <p className='alert'>Name Or Password are inncorect,<br></br>please try again!</p>
                            : null}

                        </form>



                        <div className="blur" onClick={() => setOpenLogin(false)}></div>
                    </div>
                </>



                :

                null


            }



        </div>
    )
}

export default Login