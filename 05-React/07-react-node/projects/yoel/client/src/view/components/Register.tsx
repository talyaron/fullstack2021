import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
async function handleResiter(ev: any, navigate: any) {
  ev.preventDefault();

  const username = ev.target.elements.username.value;
  const password = ev.target.elements.password.value;
  const samePassword = ev.target.elements.samePassword.value;

  console.log(username, password, samePassword);

  const { data } = await axios.post('/user/register', { username, password, samePassword })



  if (data.ok) {
 
    
    navigate(('/home'));
  }
  else if(!data.ok){
    console.log(data.message);
    
    navigate(('/register'));
  }

}
function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={event => handleResiter(event, navigate)}>
        <input type="text" name="username" required placeholder='put a new username' />
        <input type="text" name="password" required placeholder='put a new password' />
        <input type="text" name="samePassword" required placeholder='write the same password you write before' />
        <input type="submit" value="Register" />
      </form>
      
    </div>
  )
}

export default Register