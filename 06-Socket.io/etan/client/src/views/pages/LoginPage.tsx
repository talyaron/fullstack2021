import {useId, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

interface LoginPageProps {
    handleLogin: Function;
    handleRegister: Function;
    loggedIn: Boolean;
}

function LoginPage(props: LoginPageProps) {
    const {handleRegister, handleLogin, loggedIn} = props;
    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn) {
            console.log('logged in on');
            navigate('/home')
            return () =>  console.log('logged in on off');
        }
        if(!loggedIn){
            console.log('logged in off');
            return () => console.log('logged in off off');
            
        }
        
    }, [loggedIn]);
    return (
        <div className='wrapper__LoginPage'>
            <form
                onSubmit={(ev) => {
                    handleLogin(ev);
                }}>
                <input type='email' name='email' placeholder='Enter your email address' />
                <input type='password' name='password' placeholder='Enter your password' />
                <input type='submit' value='Log In' />
            </form>
            <form
                onSubmit={(ev) => {
                    handleRegister(ev);
                }}>
                <input type='text' name='firstName' placeholder='first name' />
                <input type='text' name='lastName' placeholder='last name' />
                <input type='email' name='email' placeholder='email' />
                <input type='password' name='password' placeholder='password' />
                <select name='gender'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <input type='submit' value='Register' />
            </form>
        </div>
    );
}

export default LoginPage;
