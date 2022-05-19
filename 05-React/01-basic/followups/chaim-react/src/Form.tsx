import React from 'react'


interface FormProps {
  text: string
  img: string
  id: string
  handleAdd:Function

}
const Form=(Props:FormProps)=>{
  

function handleAdd(ev: any) {
  console.log(ev);
  ev.preventDefault()

  const text = ev.target.elements.text.value;
  const img = ev.target.elements.img.value;
  const id= ev.target.elements.value



}

function handleUpdate(ev: any) {
}
const box = (props: FormProps) => {
  const { text, img, id } = props
  
  return (
    <div className="Box">
      <form onSubmit={handleAdd}><input type="text" name='text' placeholder='name' id='' />
        <label>img</label>
        <input type="img" name='img' placeholder='imgURL' id='' />
        <input type='submit' value='SUBMIT'>SUBMIT</input>
      </form>
      <form onSubmit={handleUpdate}>
        <input type='text' name='text' placeholder="" />
      </form>
    </div>
  )
}
}
export default Form