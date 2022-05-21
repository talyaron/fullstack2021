import React from "react";
interface postProps {
  posts: Array<post>;
  userPosts:Array<post>;
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
const Posts = (props: postProps) => {
  const { userPosts,mode} = props;
  return (
    <div className="posts">
      <div className="posts__navbar" id={mode? 'dark':'light'}>filter posts</div>

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
