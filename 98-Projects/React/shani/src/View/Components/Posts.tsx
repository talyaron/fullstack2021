import {TopicModel} from '../../App';

interface postProps {
  posts: Array<post>;
  userPosts: Array<post>;
  setPosts: Function;
  mode: boolean;
  filterdPosts: Array<any>;
  setFilterdPost: Function;
  trash:boolean;
  setTrash:Function;
}

interface post {
  postId?: any;
  topic:TopicModel;
  link?: string;
  imgUrl?: string;
  description: string;
  datePosted?: number;
}




const Posts = (props: postProps) => {
  const { userPosts, mode, setPosts, filterdPosts, setFilterdPost,trash,setTrash } = props;

  function drag(ev:any){
    ev.dataTransfer.setData("Text",ev.target.id);
    console.log(ev.target.id)
    setTrash(!trash)
    

    setTimeout(() => {
      setTrash(trash);
    }, 1000)
   
  
  }

  function handleFilterTopic(ev: any) {
    const theTopic = ev.target.value;
    if (theTopic === "all") {
      setFilterdPost(userPosts);
      console.log(userPosts);
    } else {
      const filteredTopic = userPosts.filter(
        (posts) => posts.topic === theTopic
      );

      setFilterdPost(filteredTopic);
    }
  }

  return (
    <div className="posts">
      <div className="posts__navbar" id={mode ? "dark" : "light"}>
        <input
          type="button"
          name="nodeJs"
          onClick={handleFilterTopic}
          value="nodeJS"
        />
        <input
          type="button"
          name="web development"
          onClick={handleFilterTopic}
          value="web development"
        />
        <input
          type="button"
          name="all"
          onClick={handleFilterTopic}
          value="all"
        />
        <input
          type="button"
          name="mongo+nodeJS"
          onClick={handleFilterTopic}
          value="mongo+nodeJS"
        />
        <input
          type="button"
          name="react"
          onClick={handleFilterTopic}
          value="react"
         
        />
      </div>

      <div className="posts--postsGrid">
        {filterdPosts
          .map((post: any, i) => {
            return (
              <div key={i} id={post.postId} className="posts__post" draggable="true" onDragStart={drag} >
                <div className="posts__post__top">
                  <p className="posts__post__top--topic">{post.topic} </p>
                  <p className="posts__post__top--date">{post.datePosted}</p>
                </div>
                <div className="posts__post__middle">
                  <img src={post.imgUrl} className="posts__post__middle--pic" />
                  <p className="posts__post__middle--description">
                    {post.description}
                  </p>
                </div>
                <div className="posts__post__bottom">
                  <a
                    href={post.link}
                    className="posts__post__bottom--link"
                    target="_blank"
                  >
                    link to git project
                  </a>
                </div>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Posts;
