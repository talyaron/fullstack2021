import Picture from './Picture'
import { Img } from '../../App'

interface LibraryProps {
  pictures: Array<Img>;
  deleteFunction: Function;
  updateFunction: Function;
}

const Library = (props: LibraryProps) => {
  const { pictures, deleteFunction, updateFunction } = props
  return (
    <div className='library'>
      {pictures.map((picture, i) => {
        return (
          <Picture key={i} picture={picture} deleteFunction={deleteFunction} updateFunction={updateFunction}/>
        )
      })}
    </div>
  )
}

export default Library;