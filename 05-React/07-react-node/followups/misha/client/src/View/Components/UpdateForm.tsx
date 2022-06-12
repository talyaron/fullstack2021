
import React,{useEffect} from 'react'


const UpdateForm = (props:any) => {

    const {submit,button,id,unexist, passwordsMatch} = props;


    return (
        <div className='reg-form-container'>
            <form onSubmit={submit} id={id}>

                <div className='input-container'>
                <input type="text" name="name" placeholder='Name' autoComplete='off' />
                </div>
                <div className='input-container'>
                <input type="number" name="age" placeholder='Age' autoComplete='off'/>
                </div>
                <div className={!unexist ? 'input-container' : 'input-container existError'} >
                <input  type="text" name="username" placeholder='Username' autoComplete='off'/>
                {unexist && <div className='data-error'>Sorry, that username is taken.</div>}
                </div>
                <div className='input-container'>
                <input type="text" name="occupation" placeholder='Occupation' autoComplete='off'/>
                </div>
                <div className={!passwordsMatch ? 'input-container' : 'input-container existError'}>
                <input type="password" name="password" placeholder='Password' autoComplete='off' />
                {passwordsMatch && <div className='data-error'>Sorry, passowrds dont match.</div>}
                </div>
                <div className={!passwordsMatch ? 'input-container' : 'input-container existError'}>
                <input type="password" name="passwordConfirm" placeholder='Confirm Password' autoComplete='off' />
                {passwordsMatch && <div className='data-error'>Sorry, passowrds dont match.</div>}
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

export default UpdateForm