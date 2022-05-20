import Pictures from './Pictures'
import Filter from './Filter'
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
}

const Body = (props: bodyProps) => {
  const { pictures,setPictures,pictureArray } = props
  return (
    <div>
      <Filter pictures={pictures} setPictures = {setPictures} pictureArray={pictureArray} />
      <Pictures pictures={pictures} />
    </div>
  )
}

export default Body