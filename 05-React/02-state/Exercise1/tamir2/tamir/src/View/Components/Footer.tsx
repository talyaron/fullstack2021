import { useState } from 'react';
import { newone } from '../../App'
export interface FooterProps {
  settext: Function;
  setimg: Function;
  
}


const Footer = (props: FooterProps) => {
  const { settext, setimg } = props

  function handlesubmit(ev: any) {
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    const img = ev.target.elements.img.value;

    settext(text);
    setimg(img);
    console.log(text, img);


  }

  return (

    <div className='Footer'>

      <form onSubmit={handlesubmit}>
        <input type="text" name='text' />
        <input type="text" name='img' />
        <input type="submit" value="update" />
      </form>
    </div>

  )


}

export default Footer