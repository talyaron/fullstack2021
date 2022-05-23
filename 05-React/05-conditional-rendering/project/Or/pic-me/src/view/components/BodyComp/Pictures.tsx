import BigPic from './BigPic'

interface picturesProps {
  pictures: Array<pic>
  setBig:Function
  isBigPic:Boolean
  bigPicSrc:String
  setBigPicSrc:Function
}

interface pic {
  picUrl: any;
  people: string;
  time: string;
  id: string
}

const Pictures = (props: picturesProps) => {
  const { pictures,setBig,isBigPic, bigPicSrc,  setBigPicSrc} = props
  
  function handleOpenModal(picSrc:string){
    setBig(!isBigPic)
    setBigPicSrc(picSrc)

  }
  return (
    <div >
      <div className="pictures">
        {pictures.map((pic: any, i: number) => {
      return (<img onClick={()=>handleOpenModal(pic.picUrl)} className='pictures__pic' key={i} src={pic.picUrl} alt="" />)
        })}
      </div>
      {isBigPic && <BigPic bigPicSrc={bigPicSrc} isBigPic={isBigPic} setBig={setBig} />}
    </div>
  )
}

export default Pictures