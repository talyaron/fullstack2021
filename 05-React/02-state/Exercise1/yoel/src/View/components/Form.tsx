import React from 'react'

  
interface propForm{
  handleSubmit:any,
}

function Form(prop:propForm) {
  return (
    <form onSubmit={prop.handleSubmit}>
      <input type="text" name="img" placeholder='put an image'/>
      <input type="text" name="text" placeholder='enter name '/>
      <input type="submit" value="Add" />
    </form>
  )
}

export default Form