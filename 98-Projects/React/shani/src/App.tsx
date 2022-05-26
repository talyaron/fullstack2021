import React,{useState,useTransition} from 'react';

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
  topic:topicModel;
  link?: string;
  imgUrl?: string;
  description: string;
  datePosted:string;
}
export enum topicModel{
  ALL = 'all',
  WEB = 'web development',
  MONODE = 'mongo+nodeJS',
  NODE = 'nodeJS',
  REACT = 'react',
 
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
    aboutMe:'Welcome to my blog! My journey in web development started after i finished my army service. I studied in sheCodes,then after half a year I started studying fullstack in INT. Enjoy scrolling through my projects :)',
    profileImage:"https://cdn.britannica.com/51/188751-050-D4E1CFBC/Beyonce-2010.jpg",
    friends: [{ friendPic:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',friendName: "patrick" }],
    posts: [
      {postId:uid(),datePosted:'28-10-2021',link:'https://github.com/ShaniRom',imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/INT_logo.png/1135px-INT_logo.png', topic:topicModel.WEB, description: "Started studying in INT!" },
      {postId:uid(),datePosted:'18-5-1010',link:'https://github.com/talyaron/fullstack2021/tree/main/98-Projects/Mongoose-Project/Airbnb/airbnb-localStorage',imgUrl:'https://www.pngkey.com/png/full/60-605967_airbnb-logo-png.png', topic:topicModel.MONODE , description: "Me and my group made a clone of the airbnb app! click link to see it " },
      {postId:uid(),datePosted:'25-5-1010',link:'https://github.com/talyaron/fullstack2021/tree/main/98-Projects/React/shani',imgUrl:'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1', topic: topicModel.REACT, description: "For my first react project I decided to make a blog that can act as a resume showing my skills and links to other projects.Click the link to check the code out " },
    ],
  }
 
  
  
  
];

// NOTE--counter for counter of posts,color for post background,color modes

function App() {
  const [userPosts,setPosts]=useState<Array<post>>(users[0].posts ) ;
  const [filterdPosts, setFilterdPost] = useState<Array<post>>(users[0].posts)
 

  const [mode,setMode]=useState(false)

  const [trash,setTrash]=useState(false)

  const[party,setParty]=useState(false)
  
 
  
  return (
    <div className={party?"App-Party":"App"} id={mode? 'dark':'light'}>
      <Header mode={mode} setMode={setMode}/>
  
      <div className='container'>

        {users.map((user:any,i)=>{
          return( <UserPage key={i} user={user} party={party} setParty={setParty} trash={trash} setTrash={setTrash} userPosts={userPosts} mode={mode} setMode={setMode} setPosts={setPosts} filterdPosts={filterdPosts}  setFilterdPost={setFilterdPost}/>)
          //  return <UserPage key={i} name={user.name} friends={user.friends}/>
          //why do i need map here 
        })}
        
      </div>

      <Footer  setPosts={setPosts} userPosts={userPosts} mode={mode} setMode={setMode} trash={trash} setTrash={setTrash}/>


   </div>
  );
}

export default App;
