import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { getCookie } from "../../App";

const SignIn = () => {
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

        const username: string = ev.target.username.value;
        const password: string = ev.target.password.value;
        const { data } = await axios.post('/api/users/get-user', { username, password })
        if (data.ok) {
            setAlert('Logged in!')
            navigate(`/profile`)

        }
        else setAlert('Password or username are incorrect')

    }
    return (
        <main>
            <h2>Welcome back to Dot Blog!</h2>
            <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="username">Enter your Username</label>
                <input type="text" name='username' id='username' />
                <label htmlFor="password">Enter your password</label>
                <input type="password" name='password' id='password' />
                <input type="submit" value="Log-in" />
            </form>
            <h2 className='alert'>{alert}</h2>
            <h3 className='hover' onClick={() => { navigate(`/register`) }}>Don't have a user? click here to register</h3>
        </main>
    )
}

export default SignIn