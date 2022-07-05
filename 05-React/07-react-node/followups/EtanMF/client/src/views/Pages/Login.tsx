import {useId} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

interface LoginProps {
    handleLogin: Function;
    handleCreate: Function;
}

function Login(props: LoginProps) {
    const {handleLogin, handleCreate} = props;
    const id = useId();
    return (
        <motion.div className='wrapper' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
            <h1 className='wrapper__Login-title'>BlogPosts</h1>
            <div className='wrapper__Login'>
                <form onSubmit={(e) => handleLogin(e)} className='form-login'>
                    <h3>Login:</h3>
                    <div className='form-login-labelArea'>
                        <label htmlFor='loginEmail'>Email</label>
                        <input autoComplete='off' type='email' name='email' placeholder='email' id='loginEmail' required />
                        <div className='line' />
                    </div>
                    <div className='form-login-labelArea'>
                        <label htmlFor='loginPassword'>First Name</label>
                        <input autoComplete='off' type='password' name='password' placeholder='password' id='loginPassword' required />
                        <div className='line' />
                    </div>
                    <input type='submit' value='Login' />
                </form>

                <form
                    onSubmit={(event) => {
                        console.log(event);
                        handleCreate(event);
                    }}
                    className='form-register'>
                    <h3>Register:</h3>
                    <fieldset className='form-register-fieldset'>
                        <legend>Personal Information</legend>
                        <div className='form-register-fieldset-labelArea'>
                            <label htmlFor='registerFirstName'>First Name</label>
                            <input type='text' name='firstName' placeholder='First Name' id='registerFirstName' required />
                            <div className='line' />
                        </div>
                        <div className='form-register-fieldset-labelArea'>
                            <label htmlFor='registerLastName'>Last Name</label>
                            <input type='text' name='lastName' placeholder='last name' id='registerLastName' required />
                            <div className='line' />
                        </div>
                    </fieldset>
                    <fieldset className='form-register-fieldset'>
                        <legend>Login Information</legend>
                        <div className='form-register-fieldset-labelArea'>
                            <label htmlFor='registerEmail'>Email</label>
                            <input type='email' name='email' placeholder='email' id='registerEmail' required />
                            <div className='line' />
                        </div>
                        <div className='form-register-fieldset-labelArea'>
                            <label htmlFor='registerPassword'>Password</label>
                            <input type='password' name='password' placeholder='password' id='registerPassword' required />
                            <div className='line' />
                        </div>
                    </fieldset>
                    <fieldset className='form-register-fieldset'>
                        <legend>Professional Information</legend>
                        <div className='form-register-fieldset-labelArea'>
                            <label htmlFor='registerWorkspace'>Work Space</label>
                            <input type='text' name='workSpace' placeholder='workSpace' id='registerWorkspace' required />
                            <div className='line' />
                        </div>
                        <div className='form-register-fieldset-labelArea'>
                            <label htmlFor='registerPosition'>Position</label>
                            <input type='text' name='position' placeholder='position' id='registerPosition' required />
                            <div className='line' />
                        </div>
                    </fieldset>
                    <input type='submit' value='Create' />
                </form>
            </div>
        </motion.div>
    );
}

export default Login;
