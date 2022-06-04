import React from 'react'

const Register = (props: any) => {
    return (
        <div>
            <form onSubmit={props.submit}>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='Name' autoComplete='off'/>

                <label htmlFor="age">Age</label>
                <input type="number" name="age" placeholder='Age' autoComplete='off'/>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder='Username' autoComplete='off'/>

                <label htmlFor="occupation">Occupation</label>
                <input type="text" name="occupation" placeholder='Occupation' autoComplete='off'/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Password' autoComplete='off' />

                <label htmlFor="image">Image</label>
                <input type="text" name="image" placeholder='Image' autoComplete='off' />

                <button type='submit'>REGISTER</button>
            </form>



        </div>
    )
}

export default Register