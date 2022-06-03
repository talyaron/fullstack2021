import React from 'react'
import axios from "axios"



const registration = () => {

async function handleRegister(ev: any) {
  ev.preventDefault()
  console.log("data" + ev);
  let { name, age, username, occupation, password, image } = ev.target
  const { data } = await axios.post('/api/addUser', { name, age, username, occupation, password, image })


}


  return (
    <div>
      <form onSubmit={ev=>handleRegister(ev)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder='Name' onChange={()=>console.log('dcd')} 
        
        />

        {/* <label htmlFor="age">Age</label>
        <input type="age" name="age" placeholder='Age' />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder='Username' />

        <label htmlFor="occupation">Occupation</label>
        <input type="text" name="occupation" placeholder='Occupation' />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder='Password' />

        <label htmlFor="image">Image</label>
        <input type="img" name="image" placeholder='Image' /> */}
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default registration