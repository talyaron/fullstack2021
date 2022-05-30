import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <h1>BI Israel</h1>
                <div className='header-container'>
                    <Link to='/home'>Home</Link><Link to='/home/about'>About</Link>
                    <Link to='/home/marketing'>Marketing</Link><Link to='/home/medical'>Medical</Link>
                </div>
            </header>
            <Outlet />
            <footer className='footer'>
                All rights reserved to BI Israel 2022
            </footer>
        </div>
    )
}

export default Layout