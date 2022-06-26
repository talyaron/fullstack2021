import axios from 'axios'
interface AddBlogFormProps{
    setBlogs:Function;
    blogs:Array<any>
}

function AddBlogForm(props:AddBlogFormProps) {

    const {setBlogs,blogs} = props;

     async function addBlog(ev:any){
      ev.preventDefault()
     
      const blogName = ev.target.elements.name.value;
      const body = ev.target.elements.body.value;
      const image = ev.target.elements.image.value;
      
      
      const newBlog = {name:blogName,body,image}
      
       await axios.patch('/api/blogs/get-addBlog',{newBlog})
       setBlogs([...blogs,newBlog])
      window.location.reload();


  }

  return (
    <form onSubmit={addBlog} className="main_form">
          <input className="main_form-fieldName" type="text" name="name" placeholder="blog name" required/>
          <textarea className="main_form-fieldBody" rows={10} cols={50}  name="body" placeholder="write your blog text ... " required />
          <br />
          <input className="main_form-fieldImage" type="text" name="image" placeholder='enter image url..'/>
          <input type="submit" value="add blog" className="btn"/>
        </form> 
  )
}

export default AddBlogForm