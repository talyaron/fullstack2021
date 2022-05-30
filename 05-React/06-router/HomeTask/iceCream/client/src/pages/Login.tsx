import { useNavigate } from 'react-router-dom'


interface LoginProps {
    handleLogin: any;
    login: boolean;
}

const Login = (props: LoginProps) => {
    const { handleLogin, login } = props;
    const navigate = useNavigate()

    if (login) {
        navigate('/home')
    }


    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input type="text" name="name" placeholder="name" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" value="Login" />
            </form>

            

        </div>
    )
}

export default Login