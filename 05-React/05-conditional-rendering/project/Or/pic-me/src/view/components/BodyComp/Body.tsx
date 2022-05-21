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
  setPictures:Function
  pictureArray: Array<pic>
  setAdd:Function
  add:Boolean
  uid:Function
}

const Body = (props: bodyProps) => {
  const { pictures,setPictures,pictureArray, add,setAdd,uid } = props
  return (
    <div>
      <Filter pictures={pictures} setPictures = {setPictures} pictureArray={pictureArray}  />
      <Pictures pictures={pictures} />
      <Add add = {add} setAdd = {setAdd} setPictures = {setPictures} pictureArray={pictureArray}uid={uid} />
    </div>
  )
}

export default Body