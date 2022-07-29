import React from 'react';
import logo from './logo.svg';
import {Counter} from './Views/Components/Counter';
import {useAppSelector, useAppDispatch} from './app/hooks';
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
                <button onClick={handleGetPicAsync}>Want to see some dogs?</button>
                <Pic />
            </header>
        </div>
    );
}

export default App;
