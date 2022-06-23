import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

interface HomePageProps {
    sendMessage: Function;
    joinRoom: Function;
    usersList: Array<any>;
}
function HomePage(props: HomePageProps) {
    const {sendMessage, joinRoom, usersList} = props;
    return (
        <div>
            <form
                onSubmit={(ev) => {
                    sendMessage(ev);
                }}>
                <input type='text' name='username' placeholder='enter your username' />
                <input
                    onKeyUp={(ev) => {
                        joinRoom(ev);
                    }}
                    type='text'
                    name='address'
                    placeholder='address'
                />
                <input type='text' name='message' placeholder='Message' />
                <input type='submit' value='send' />
            </form>
            {usersList&&<ul>{usersList.map((user, i)=> <li key={i}>userId:{user}</li>)}</ul>}
            <Outlet />
        </div>
    );
}
export default HomePage;
