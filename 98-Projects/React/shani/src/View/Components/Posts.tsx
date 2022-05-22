import React from "react";
interface postProps {
  posts: Array<post>;
  userPosts:Array<post>;
  setPosts:Function;
  mode:boolean;

}

interface post {
  postId?:any,
  topic: "web development" | "mongo+nodeJS" | "nodeJS" | "react";
  link?: string;
  imgUrl?: string;
  description: string;
  datePosted?: number;
}

//{userPosts.filter(posts=>posts.topic=='nodeJS') ,setPosts({posts:userPosts})} 
const Posts = (props: postProps) => {
 
  const { userPosts,mode,setPosts} = props;
  const allPosts=userPosts;
 
  function handleFilterNode(ev:any){
    const theTopic=ev.target.value;
    // const copy = [...userPosts];
    // const filter=[]
    const filterNode=allPosts.filter(posts=>posts.topic===theTopic);
    console.log(allPosts)
 console.log( userPosts)
    setPosts(filterNode)
    
  }
 
  return (
    <div className="posts">
      <div className="posts__navbar" id={mode? 'dark':'light'}>
      {/* <button onClick={handleFilterNode} >nodeJs</button> */}
      <input type="button" name='nodeJs' onClick={handleFilterNode} value='nodeJS'/>
      <input type="button" name='web development' onClick={handleFilterNode} value='web development'/>
      {/* <button onClick={handleFilterNode} >webDev</button> */}
      </div>

      <div className="posts--postsGrid">
        {userPosts.map((post: any,i) => {
          return (
            <div  key={i} className="posts__post">
              <div className="posts__post__top">
                <p className="posts__post__top--topic">{post.topic} </p>
                <p className="posts__post__top--date">{post.datePosted}</p>
              </div>
              <div className="posts__post__middle">
              <img src={post.imgUrl} className="posts__post__middle--pic" />
              <p className="posts__post__middle--description">{post.description}</p>
              </div>
              <div className="posts__post__bottom">
              <a href={post.link} className="posts__post__bottom--link" target="_blank">link to git project</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
