
import React,{useState} from 'react';
import useSound from 'use-sound';
import ContactMe from './ContactMe';
import {TopicModel} from '../../App';
interface footerProps{
  mode:boolean;
  setMode:Function;
  userPosts:Array<any>;
  setPosts:Function;
  trash:boolean;
  setTrash:Function;
}
interface post {
  topic:TopicModel;
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

  const {userPosts,setPosts,mode,setMode,trash,setTrash}=props
  function drop(ev:any){
    ev.preventDefault();
    const data=ev.dataTransfer.getData("Text");
    const el:any= document.getElementById(data);
    el.parentNode.removeChild(el);
    console.log(data)
    console.log(el)
    
  }
  function allowDrop(ev:any){
    ev.preventDefault();
    
  }

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
       
        <button className='deletePost' id={mode?'dark':'light'}  onDrop={drop}
          onDragOver={allowDrop}><input type="image" src={trash?"images/deleteOpen.png":'images/deleteClose.png'} className='deletePost__img'style={{ height:"40px" ,width:"40px"}}/></button>
    

        <button className='newPost' onClick={()=>setShowModal(Modal.POST)} id={mode?'dark':'light'}><input type="image" src="images/addPost.png" style={{ height:"40px" ,width:"40px"}}/> </button>
        
        <button className='myContactInfo' onClick={()=>setShowModal(Modal.CONTACT)} id={mode?'dark':'light'}><input type="image" src="images/contacts.png" style={{ height:"40px" ,width:"40px"}}/> </button>
        

        
        <form  className={showModal === Modal.POST?'showForm':'hideForm'} onSubmit={handleNewPost} id={mode?'dark':'light'}>
     
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
        
        
         </div>
         <input type="submit" name="submitPost" value="post" />
        </form>
        
          <ContactMe showModal={showModal} mode={mode}/>
        
      
       
     </div>
  )
}

export default Footer