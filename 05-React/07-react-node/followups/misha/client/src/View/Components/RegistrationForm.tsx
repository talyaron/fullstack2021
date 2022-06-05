import React from 'react'


const UserForm = (props:any) => {

    const {submit,button,id} = props;

    return (
        <div className='reg-form-container'>
            <form onSubmit={submit} id={id}>

                <div className='input-container'>
                <input type="text" name="name" placeholder='name' autoComplete='off' data-error="Sorry, that username is taken."/>
                </div>
                <div className='input-container'>
                <input type="number" name="age" placeholder='Age' autoComplete='off'/>
                </div>
                <div className='input-container'>
                <input type="text" name="username" placeholder='Username' autoComplete='off'/>
                </div>
                <div className='input-container'>
                <input type="text" name="occupation" placeholder='Occupation' autoComplete='off'/>
                </div>
                <div className='input-container'>
                <input type="password" name="password" placeholder='Password' autoComplete='off' />
                </div>
                <div className='input-container'>
                <input type="text" name="image" placeholder='Image' autoComplete='off' />
                </div>
                <div className='input-container'>
                <button type='submit' >{button}</button>
                </div>
            </form>



        </div>
    )
}

export default UserForm