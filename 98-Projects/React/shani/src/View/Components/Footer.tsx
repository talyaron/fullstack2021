
import React,{useState} from 'react';
import ContactMe from './ContactMe';
interface footerProps{
  mode:boolean;
  setMode:Function;
  userPosts:Array<any>;
  setPosts:Function;
}
interface post {
  topic:"web development" |"mongo+nodeJS" |"nodeJS"|"react";
  link: string;
  imgUrl: string;
  description: string;
  datePosted?:number;
}

const Footer = (props:footerProps) => {
  const [addPostForm,setAddPostForm]=useState(false);

  const [showContactInfo,setContactInfo]=useState(false)

  const {userPosts,setPosts,mode,setMode}=props

  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  function handleNewPost(ev:any){
    ev.preventDefault()
    const topic=ev.target.elements.newPostTopic.value;
    const description=ev.target.elements.newPostDescription.value;
    const link=ev.target.elements.newPostLink.value;
    const imgUrl=ev.target.elements.newPostPhoto.value;
    const newColor=ev.target.elements.newPostColor.value;
    const id=uid();

    const today=new Date();
    const time = today.getHours() + ":" + today.getMinutes()
    const todayDate=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    const datePosted=todayDate+ '  ' +time ;
    console.log(id,topic,datePosted,description,link,imgUrl,newColor)
    const addedPost={id,topic,datePosted,description,link,imgUrl,newColor}
   

    setPosts([...userPosts,addedPost])
    
  }
  
  
  return (
    <div className="footer" id={mode?'dark':'light'}>
       
        <button className='deletePost'>delete a post</button>
        {/* drag and drop ill try to make i throw into a trash can */}

        <button className='newPost' onClick={()=>setAddPostForm(!addPostForm)}>add a post</button>
        {/* onClick={()=>contactMe(!showContactMe)} */}
        <button className='myContactInfo' onClick={()=>setContactInfo(!showContactInfo)}>contact me</button>
        {/* contact me will open a box of my info to contact me  */}

        
        <form  className={addPostForm? 'showForm':'hideForm'} onSubmit={handleNewPost} id={mode?'dark':'light'}>
         {/* can do when that the newest post will have a sticker that says the newest one and fix the order of it posted*/}
         <h3>New Post</h3>
         <div className='formGrid' >
         <select  name="newPostTopic" className="newPostTopic">
            <option selected disabled >Topic</option>
            <option value="other">Other</option>
            <option value="webDevelopment">Web development</option>
            <option value="mongo+nodeJS">MongoDB+NodeJS</option>
            <option value="nodeJS">NodeJS</option>
            <option value="react">React</option>            
        </select>
         <input type="text" placeholder='add a description' name="newPostDescription"/>
         <input type="url" placeholder=' add link here' name="newPostLink" />
         <input type="text" placeholder=' add imgUrl here'  id="newPostPhoto" name="newPostPhoto"  accept="image/*" />
         <label htmlFor='newPostColor' > add color</label>
         <input type="color" id='newPostColor' name="newPostColor"/>
        
         </div>
         <input type="submit" name="submitPost" value="post" />
        </form>
        
          <ContactMe showContactInfo={showContactInfo} mode={mode}/>
        
      
       
     </div>
  )
}

export default Footer