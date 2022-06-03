import React from 'react'
// import axios from "axios"

interface RegProps{
  submit: Function;
}

const registration = (props:RegProps) => {


  return (
    <div>
      <form onSubmit={()=>props.submit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder='Name'/>

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
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default registration