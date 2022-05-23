import Pictures from './Pictures'
import Filter from './Filter'
import Add from './Add'
interface pic {
  picUrl: any;
  people: string;
  time: string;
  id: string
}

interface bodyProps {
  pictures: Array<pic>
  setPictures: Function
  pictureArray: Array<pic>
  setAdd: Function
  add: Boolean
  uid: Function
  setBig: Function
  isBigPic: Boolean
  bigPicSrc: String
  setBigPicSrc: Function
}

const Body = (props: bodyProps) => {
  const { pictures, setPictures, pictureArray, add, setAdd, uid, setBig, isBigPic, bigPicSrc, setBigPicSrc} = props
  return (
    <div>
      <Filter pictures={pictures} setPictures={setPictures} pictureArray={pictureArray} />
      <Pictures pictures={pictures} setBig={setBig} isBigPic={isBigPic} bigPicSrc={bigPicSrc} setBigPicSrc={setBigPicSrc} />
      <Add add={add} setAdd={setAdd} setPictures={setPictures} pictureArray={pictureArray} uid={uid} />
    </div>
  )
}

export default Body