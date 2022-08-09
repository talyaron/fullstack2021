import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getPhotosAsync } from './galleryApi';
import { selectPhotos, selectPhotosStatus, Status } from './GalleySlice';
import Spinner from './spinner/Spinner';

function App() {

  const dispatch = useAppDispatch();

  const photos: any = useAppSelector(selectPhotos)
  const photosStatus = useAppSelector(selectPhotosStatus)

  useEffect(() => {
    dispatch(getPhotosAsync());
  }, [dispatch])

 
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="App">
      <h1>REDUX PHOTO GALLERY</h1>
      <p>this is my photo gallery</p>
      <hr />
      <div className='gallery'>
        {photos && photos.map((photo: any) =>
          <img
            key={photo.id}
            src={photo.download_url}
            alt={photo.author}
            width='300'
            height='300'
          />
        )}
      </div>
      <div className='spinner-button'>
        {photosStatus === Status.LOADING ? <Spinner /> : null}
      <button onClick={() => dispatch(getPhotosAsync())}>VIEW MORE</button>
      </div>
    </div>
  );
}

export default App;
