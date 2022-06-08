import React from 'react'
import axios from 'axios'
async function handleResiter(ev: any) {
  ev.preventDefault();

  const username = ev.target.elements.username.value;
  const password = ev.target.elements.password.value;
  const samePassword = ev.target.elements.samePassword.value;

  console.log(username, password, samePassword);

  const { data } = await axios.post('/user/register-user', { username, password, samePassword })

  // if(data){
  //   if(data.alredyExisted){
  //     console.log(data.alredyExisted);
  //   }

  // }

  console.log(data);

}
function Register() {
  return (
    <div>
      <form onSubmit={handleResiter}>
        <input type="text" name="username" placeholder='put a new username' />
        <input type="text" name="password" placeholder='put a new password' />
        <input type="text" name="samePassword" placeholder='write the same password you write before' />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register