import React from 'react'



type Props = {
    setCards:Function
}

function Form({setCards}: Props) {

    function addUser(ev:any){
        ev.preventDefault()
        console.dir(ev.target.elements);
        let newUser
        for(let i=0;i<15;i++){

        }
        
    }
  return (
    <form onSubmit={addUser} style={{display:'flex',flexDirection:'column'}}>
        <input type="text" name="fN"  placeholder='first'/>
        <input type="text" name="lN"  placeholder='last'/>
        <input type="text" name="dis"  placeholder='dis'/>
        <input type="text" name="Img" placeholder='img'/>
        <input type="email" name="email" id="" placeholder='email'/>
        <input type="text" name="coun" placeholder='coun'/>
        <input type="date" name="date" id="" placeholder='date'/>
        <input type="text" name="companies" id="" placeholder='companies'/>
        <input type="text" name="linkedInProfile" id="" placeholder='linkedInProfile'/>
        <input type="number" name="phone" id="" placeholder='phone'/>
        <input type="text" name="initiatives" id="" placeholder='initiatives'/>
        <input type="password" name="password" id="" placeholder='password'/>
        <input type="text" name="type" id="" placeholder='type'/>
        <input type="text" name="fieldsOfKnowledge" id="" placeholder='fieldsOfKnowledge'/>
        <input type="text" name="sector" id="" placeholder='sector'/>
        <input type="submit" name='submit' value="add"/>

        {/* image: File,
    email: String,
    country: String,
    lastEntry: Date,
    companies: Array,
    linkedInProfile: String,
    phone: Number,
    initiatives: Array,
    password: String,
    type: UserType,
    fieldsOfKnowledge: Array,
    sectors:Sector */}

        </form>
  )
}

export default Form