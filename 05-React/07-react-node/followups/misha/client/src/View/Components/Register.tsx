import React from 'react'

const Register = (props:any) => {
  return (
    <div>
        <form onSubmit={props.submit}>
        <input type="text" name='name' placeholder='name' />
        <input type="number" name='number' placeholder='age' />
        <button type='submit'>REGISTER</button>
        </form>



    </div>
  )
}

export default Register