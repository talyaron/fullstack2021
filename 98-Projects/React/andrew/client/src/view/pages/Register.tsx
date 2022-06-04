import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../App';

const Register = () => {
    const [alert, setAlert] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const cookie = getCookie('userInfo')
            if (cookie) {
                navigate(`/profile`)
            }
        })()

    }, [])

    async function handleRegisterSubmit(ev: any) {
        ev.preventDefault()
        setAlert('');
        if (ev.target.password.value === ev.target.passwordConfirm.value) {
            const username: string = ev.target.username.value;
            const password = ev.target.password.value;
            const { data } = await axios.post('/api/users/add-user', { username, password })
            if (data.ok){
                setAlert('Account Created! welcome to Dot Blog!')
                navigate(`/profile`)
            } 
            else setAlert('Username already exists, please choose a different one')

        }
        else {
            setAlert('password do not match!')
        }

    }
    return (
        <main>
            <h2>Join the Dot Blog community!</h2>
            <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' />
                <label htmlFor="password">Choose a password</label>
                <input type="password" name='password' id='password' />
                <label htmlFor="passwordConfirm">Confirm your password</label>
                <input type="password" name='passwordConfirm' id='passwordConfirm' />
                <input type="submit" value="Register" />
            </form>
            <h2 className='alert'>{alert}</h2>
            <h3 className='hover' onClick={() => { navigate(`/sign-in`) }}>Already registered? click here to sign in</h3>
        </main>
    )
}

export default Register

