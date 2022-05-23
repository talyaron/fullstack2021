interface BigPicProps {
    bigPicSrc:any
    isBigPic:Boolean
    setBig:Function

  }
const BigPic = (props:BigPicProps) => {
    const {bigPicSrc,isBigPic,setBig} = props
  return (
    <div className="big-pic" onClick={()=>setBig(!isBigPic)}>
        <img className="big-pic__pic" src={bigPicSrc} alt="" />
    </div>
  )
}

export default BigPic