import { useNavigate } from 'react-router-dom';
import axios from 'axios'

async function handleLogin(ev: any, navigate: any) {
    ev.preventDefault();


    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;

    const { data } = await axios.post('/user/log-in', { username, password });

    const { existUser } = data;


  
    
    if (data.ok) {
        const { data } = await axios.post('/article/get-article', { existUser })//I got confused (it's another folder)

        
        if (data) {
            navigate(('/home'));    
        }else{
          // we need to write here something   
        }
    }
    else {
        navigate(('/register'));
    }

}
function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={event => handleLogin(event, navigate)}>
                <input type="text" name="username" required placeholder='put your username ' />
                <input type="text" name="password" required placeholder='put your password' />
                <input type="submit" value="log-in" />
            </form>
        </div>
    )
}

export default Login;