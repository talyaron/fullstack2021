import TextInput from './components/TextInput';
import TextList from './components/TextList';
import {HashLoader} from 'react-spinners';
import {useAppSelector} from './app/hooks';
import {selectTextStatus, statusEnum} from './features/Text/textSlice';

function App() {
    const textStatus: statusEnum = useAppSelector(selectTextStatus);
    return (
        <div className='App'>
            <div className='chatArea'>
                { textStatus === statusEnum.LOADING ? <HashLoader loading={textStatus === statusEnum.LOADING} /> : 
                <TextList />
                }
                <TextInput />
            </div>
        </div>
    );
}

export default App;
