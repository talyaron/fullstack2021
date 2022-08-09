import { useAppSelector, useAppDispatch } from "./app/hooks";
import { selectImage, selectImageStatus, Status} from "./reducers/imageSlice";
import { getImageAsync } from "./reducers/imageAPI";
import './App.css';

function App() {

  const image = useAppSelector(selectImage);
  const imageStatus = useAppSelector(selectImageStatus);
  const dispatch = useAppDispatch();

  async function handleGetImage(ev:any) {
    try{
    dispatch(getImageAsync())
    }catch(err){
      console.error(err);
    }
  }
  return (
    <div className="App">
      <button onClick={handleGetImage}>Get Image</button>
      <img src={image}></img>
    </div>
  );
}

export default App;
