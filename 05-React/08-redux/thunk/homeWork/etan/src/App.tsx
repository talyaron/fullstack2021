
import {useAppDispatch} from './app/hooks';
import {getPicAsync} from './features/picComp/picCompApi';
import Pic from './Views/Components/Pic';
import './styles/global.scss';



function App() {
    const dispatch = useAppDispatch();

    const handleGetPicAsync =  () => {
        try {
            dispatch(getPicAsync());
        } catch (error) {console.error(error);
        }
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <button className='myButton' onClick={handleGetPicAsync}>Want to see some dogs?</button>
                <Pic />
            </header>
        </div>
    );
}

export default App;
