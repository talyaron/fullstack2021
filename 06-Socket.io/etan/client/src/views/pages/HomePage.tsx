import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

interface HomePageProps {
    sendMessage: Function;
    joinRoom: Function;
}
function HomePage(props: HomePageProps) {
    const {sendMessage, joinRoom} = props;

    return (
        <div>
            <form
                onSubmit={(ev) => {
                    sendMessage(ev);
                }}>
                <input type='text' name='username' placeholder='enter your username' />
                <input
                    onChange={(ev) => {
                        joinRoom(ev);
                    }}
                    type='text'
                    name='address'
                    placeholder='address'
                />
                <input type='text' name='message' placeholder='Message' />
                <input type='submit' value='send' />
            </form>
            <Outlet />
        </div>
    );
}

export default HomePage;
