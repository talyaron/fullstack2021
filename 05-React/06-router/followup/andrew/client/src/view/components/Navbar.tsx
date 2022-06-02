import { Link, Outlet } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div className='header'>
                <img src="https://i.pinimg.com/originals/de/09/06/de0906dd9f676fe01d5e62acaca81a26.png" alt="ice cream" />
                <nav>
                    <Link className='link' to="/">Home</Link>|
                    <Link className='link' to="/pistachio">Pistachio</Link>|
                    <Link className='link' to="/vanilla">Vanilla</Link>|
                </nav>
                <h1>ICE-CREAM</h1>
            </div>
            <Outlet />
        </div>
    );
}

export default Navbar