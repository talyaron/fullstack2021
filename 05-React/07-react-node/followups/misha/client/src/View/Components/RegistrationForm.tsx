
import React,{useRef,useEffect} from 'react'


const UserForm = (props:any) => {

    const {submit,button,id,unexist} = props;

    const uNameInput:any = useRef()

    useEffect(()=>{
        if(unexist && uNameInput.current){
            uNameInput.current.classList.add("existError")
            setTimeout(()=>{
                uNameInput.current.classList.remove("existError")
            },2000)
        }
    },[unexist])

    return (
        <div className='reg-form-container'>
            <form onSubmit={submit} id={id}>

                <div className='input-container'>
                <input type="text" name="name" placeholder='name' autoComplete='off' />
                </div>
                <div className='input-container'>
                <input type="number" name="age" placeholder='Age' autoComplete='off'/>
                </div>
                <div ref={uNameInput} className='input-container' >
                <input  type="text" name="username" placeholder='Username' autoComplete='off'/>
                {unexist && <div className='data-error'>Sorry, that username is taken.</div>}
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