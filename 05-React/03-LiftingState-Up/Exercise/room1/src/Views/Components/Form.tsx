import React from 'react'

interface FormProps{
    setTextColor:Function;
    setBodyColor:Function
}



const Form = (props:FormProps) => {
    const {setTextColor,setBodyColor}=props
    function handleSubmitForm(ev:any){
        ev.preventDefault()
        const textColor:any=ev.target.elements.textColor.value
        const bodyColor:any=ev.target.elements.bodyColor.value

        console.log(textColor,bodyColor)
        setTextColor(textColor);
        setBodyColor(bodyColor)
    }
  return (
    <form onSubmit={handleSubmitForm}>
        <label htmlFor="textColor">Change Text Color</label>
        <input type="color" id="textColor" name="textColor"/>
        <label htmlFor="bodyColor">Change Body Color</label>
        <input type="color"  id="bodyColor" name="bodyColor"/>
        <input type="submit" value="Submit"/>

    </form>
  )
}


export default Form