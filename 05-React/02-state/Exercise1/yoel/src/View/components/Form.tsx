
interface propForm{
  handleSomething:Function// we write the name of the function we write in the App//
  //"otherFunction it's a "handleSomething" 
}

function Form(prop:propForm) {
function handleSubmit(ev:any){
  const {handleSomething} = prop;
  ev.preventDefault();

  const image = ev.target.elements.image.value; 
  const text = ev.target.elements.text.value; 

  const obj = { text, image };

  handleSomething(obj);



  
  
}
  return (
    
    <form onSubmit={handleSubmit}>
      <input type="text" name="image" placeholder='put an image'/>
      <input type="text" name="text" placeholder='enter name '/>
      <input type="submit" value="Add" />
    </form>
  )
}

export default Form