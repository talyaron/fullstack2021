
import React,{useState} from 'react';
import useSound from 'use-sound';
import ContactMe from './ContactMe';
interface footerProps{
  mode:boolean;
  setMode:Function;
  userPosts:Array<any>;
  setPosts:Function;
}
interface post {
  topic:"all"| "web development" | "mongo+nodeJS" | "nodeJS" | "react";
  link: string;
  imgUrl: string;
  description: string;
  datePosted?:number;
  postId:any,
}

export enum Modal{
  CONTACT = 'contact',
  POST = 'post',
  NONE = 'none'
}

const Footer = (props:footerProps) => {
  // const [addPostForm,setAddPostForm]=useState(false);

  // const [showContactInfo,setContactInfo]=useState(false)
  const [showModal, setShowModal] = useState<Modal>(Modal.NONE)
  

  const newPost='audio/newPost.mp3';
  const[playPostSound,setPlay]=useState(0.6);
  const [playNewPost]=useSound(newPost,{
    playPostSound,
    volume: 0.9,
  });

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
    //const newColor=ev.target.elements.newPostColor.value;
    const postId=uid();
     const newPost=true

    const today=new Date();
    const time = today.getHours() + ":" + today.getMinutes()
    const todayDate=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    const datePosted=todayDate+ '  ' +time ;
    console.log(postId,topic,datePosted,description,link,imgUrl,newPost)
    const addedPost={postId,topic,datePosted,description,link,imgUrl,newPost}
   
   playNewPost()
    setPosts([...userPosts,addedPost]);

     const lastCard=document.querySelector(`[id=${postId}]`);
    // console.log(lastCard)
    // lastCard?.setAttribute('data-new','true')
    setTimeout(()=>{
     
       if((addedPost.newPost=true)){
        const lastCard=document.querySelector(`[id=${postId}]`);
        lastCard?.setAttribute('data-new','true')
         setTimeout(()=>{
          lastCard?.removeAttribute("data-new");
          console.log(lastCard);

         },5000)
       }
      
      
      
    },100);

    setShowModal(Modal.NONE)
    
  }
  
  
  return (
    <div className="footer" id={mode?'dark':'light'}>
       
        <button className='deletePost'>delete a post</button>
        {/* drag and drop ill try to make i throw into a trash can */}

        <button className='newPost' onClick={()=>setShowModal(Modal.POST)}>add Post </button>
        
        <button className='myContactInfo' onClick={()=>setShowModal(Modal.CONTACT)}>contact me</button>
        

        
        <form  className={showModal === Modal.POST?'showForm':'hideForm'} onSubmit={handleNewPost} id={mode?'dark':'light'}>
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
         {/* <label htmlFor='newPostColor' > add color</label> */}
         {/* <input type="color" id='newPostColor' name="newPostColor"/> */}
        
         </div>
         <input type="submit" name="submitPost" value="post" />
        </form>
        
          <ContactMe showModal={showModal} mode={mode}/>
        
      
       
     </div>
  )
}

export default Footer