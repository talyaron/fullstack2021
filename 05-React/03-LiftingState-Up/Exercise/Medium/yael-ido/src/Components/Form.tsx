import React from 'react'
import PropTypes from 'prop-types'
interface FlowerProps{
    setImgUrl:Function
    setName:Function
}

const Form = (props:FlowerProps) => {
    function handleFlowers(ev:any){
        const {setImgUrl , setName} = props;
        const imgUrl = ev.target.elements.img.value
        const name = ev.target.elements.name.value

        setImgUrl(imgUrl)
        setName(name)
    }
  return (
    <form onSubmit={handleFlowers}>

        <input type="text" name="img" id="img" placeholder='enter img URL'/>
        <input type="text" name="name" id="name" placeholder='enter flower Name'/>
        <input type="submit" value="add" />

    </form>
  )
}



export default Form