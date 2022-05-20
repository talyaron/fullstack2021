import React,{useState} from "react";
import Friends from './Friends';
import Posts from './Posts';
interface UserProps {
  userPosts:Array<any>;

  mode:boolean;
  setMode:Function;

  user:{
   
   
    name?: string;
    lastName?: string;
    userId?:any;
    profileImage?: string;
    birthday?: string;
    aboutMe?:string;
    friends: Array<friend>;
    posts: Array<post>;
   
  }
}
interface friend {
  friendPic:string;
  friendName: string;
}
interface post {
  topic:"web development" |"mongo+nodeJS" |"nodeJS"|"react";
  link: string;
  imgUrl: string;
  description: string;
  datePosted?:number;
 
  
}

const UserPage = (props:UserProps) => {
  const {user,userPosts,mode,setMode} = props

  
  
  
  return (
     <div className="User" >
      <div className="aboutUser">
      <img src={user.profileImage}/>
      <div className="aboutUser__info">
        <div>edit info</div>
        <p className="aboutUser__info--name" >{user.name} {user.lastName}</p>        
        <p className="aboutUser__info--birthday" >{user.birthday}</p>
        <p className="aboutUser__info--description" >{user.aboutMe}</p>
        
      </div>
      <div className="other">
        <div>date today</div>
        <button onClick={()=>setMode(!mode)}>dark of light mode</button>
        <div>party mode</div>
      </div>
      
      </div>
      {/* <Friends friends={user.friends}/> */}
      
     <Posts posts={user.posts}  userPosts={userPosts} />


     {/* for post i will need state and counter. upate post is form. state is used to update stuff */}
     
    </div>
    
  );
};

export default UserPage;
