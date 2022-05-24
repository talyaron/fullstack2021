import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import ChatPage from './Views/Components/ChatPage';
import LoginPage from './Views/Components/LoginPage';


const AnimatedRouts = () => {
    const location = useLocation();

    return (

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<LoginPage />} />
                <Route path={"/ChatPage"} element={<ChatPage />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRouts