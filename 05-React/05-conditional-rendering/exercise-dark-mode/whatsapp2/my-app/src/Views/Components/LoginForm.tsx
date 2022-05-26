import { AnyTxtRecord } from 'dns';
import {LoginArray} from './LoginPage'

interface LoginFormProps {
    handleLogin: any;
}


const LoginForm = (props: LoginFormProps) => {
    const {handleLogin} = props;

  return (
    <div>

        <form onSubmit={handleLogin}>
            <input type="text" name="name" placeholder='name' />
            <input type="password" name="password" placeholder='password' />
            <input type="submit" value="LOGIN" />
        </form>
        

    </div>
  )
}

export default LoginForm