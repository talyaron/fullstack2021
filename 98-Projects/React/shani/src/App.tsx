import React,{useState,useEffect,useTransition} from 'react';

import './View/styles/global.scss';
import UserPage from './View/Components/UserPage';
import Header from './View/Components/Header';
import Footer from './View/Components/Footer'

interface UserProps {
  name: string;
  userId:any;
  lastName: string;
  profileImage: string;
  birthday: string;
  aboutMe:string;
  friends?: Array<friends>;
  posts: Array<post>;
}
interface friends {
  friendPic?:string;
  friendName?: string;
}
interface post {
  postId:any,
  topic:"other"| "web development" | "mongo+nodeJS" | "nodeJS" | "react";
  link: string;
  imgUrl: string;
  description: string;
  datePosted:string;
}
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const users: Array<UserProps> = [
  {
    name: "Shani",
    userId:uid(),
    lastName: "Rom",
    birthday: "November 4th 1999",
    aboutMe:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis et reprehenderit? Perspiciatis harum repellendus hic natus minus eos praesentium magnam aut nemo sit tempora, quaerat architecto. Expedita, porro inventore?',
    profileImage:"https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg",
    friends: [{ friendPic:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',friendName: "patrick" }],
    posts: [
      {postId:uid(),datePosted:'6-6--1010',link:'https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg',imgUrl:'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1', topic: "nodeJS", description: "Started studying in INT!" },
      {postId:uid(),datePosted:'5-5-1010',link:'https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg',imgUrl:'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1', topic: "web development", description: "Started studying in INT!" },
      {postId:uid(),datePosted:'4-4-1010',link:'https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg',imgUrl:'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1', topic: "web development", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias vitae dignissimos, architecto accusamus ea minus vel nisi rerum harum numquam sint aliquid magnam, nobis corporis reiciendis nesciunt officia. Natus." },
    ],
  }
 
  
  
  
];

// NOTE--counter for counter of posts,color for post background,color modes

function App() {
  const [userPosts,setPosts]=useState<Array<post>>(users[0].posts);

  const [mode,setMode]=useState(false)
  
 
  
  return (
    <div className="App" id={mode? 'dark':'light'}>
      <Header mode={mode} setMode={setMode}/>
  
      <div className='container'>

        {users.map((user:any,i)=>{
          return( <UserPage key={i} user={user} userPosts={userPosts} mode={mode} setMode={setMode} setPosts={setPosts}/>)
          //  return <UserPage key={i} name={user.name} friends={user.friends}/>
          //why do i need map here 
        })}
        
      </div>

      <Footer  setPosts={setPosts} userPosts={userPosts} mode={mode} setMode={setMode}/>


   </div>
  );
}

export default App;
