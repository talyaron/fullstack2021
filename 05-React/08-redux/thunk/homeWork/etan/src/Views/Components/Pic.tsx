import {HashLoader, PacmanLoader} from 'react-spinners';
import {useAppSelector} from '../../app/hooks';
import {selectPic, selectPicStatus, status} from '../../features/picComp/picCompSlice';

function Pic() {
    const image = useAppSelector(selectPic);
    const imageReady: status = useAppSelector(selectPicStatus);
    return <div className='picComp'>{
      imageReady === status.LOADING ?
       <
        // PacmanLoader
        HashLoader
         loading={imageReady === status.LOADING} speedMultiplier={1} size='30px' color='#d5b8ff' /> 
       
       : <img src={image} className='App-logo' alt='' />}</div>;
}

export default Pic;
