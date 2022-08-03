
import {useAppDispatch,useAppSelector} from './app/hooks';
import {getPicAsync} from './features/picComp/picCompApi';
import {selectPicStatus, status} from './features/picComp/picCompSlice'
import Pic from './Views/Components/Pic';
import './styles/global.scss';



function App() {
    const dispatch = useAppDispatch();
    const picCompStatus = useAppSelector(selectPicStatus)

    const handleGetPicAsync =  () => {
        try {
            dispatch(getPicAsync());
        } catch (error) {console.error(error);
        }
    };

    return (
        <div className='App'>
            <header className='App-header'>
               <button className='myButton' onClick={handleGetPicAsync}>{picCompStatus === status.LOADING ? 'Loading...' : 'Want to see some dogs?'}</button>
                <Pic />
            </header>
        </div>
    );
}

export default App;
