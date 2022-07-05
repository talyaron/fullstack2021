interface DeleteArticleProps{
    articleId: string;
    ownerId: string;
    handleDeleteArticle: Function;
    setAnimation:Function;
    setTransition: Function;
    transition:any;
}

function DeleteArticle(props: DeleteArticleProps) {
    const {handleDeleteArticle, ownerId, articleId,setAnimation, setTransition, transition} = props;

  return (
    <button onClick={()=>{
      setTransition({duration:2})
      setAnimation({scale:0})
      handleDeleteArticle(ownerId, articleId)
    }}>Delete</button>
    )
}

export default DeleteArticle