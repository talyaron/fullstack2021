import { PacmanLoader } from 'react-spinners';
import { useAppSelector } from '../../app/hooks';
import {selectPic, selectPicStatus, status} from '../../features/picComp/picCompSlice'

function Pic() {
  const image = useAppSelector(selectPic)
  const imageReady:status = useAppSelector(selectPicStatus)
  return (
    <div className="picComp">

{imageReady === status.LOADING? <PacmanLoader/> 
:
<img src='{image}' className="App-logo" alt="" />
}
    </div>
  )
}

export default Pic