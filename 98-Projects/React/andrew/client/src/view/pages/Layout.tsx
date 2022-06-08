import { Link, Outlet } from 'react-router-dom'
const Layout = () => {


    return (
        <div>
            <div className='header'>
                <h1>&lt;Dot Blog/&gt;</h1>
                <nav>
                    <Link className='link' to="/">Home</Link>|
                    <Link className='link' to="/search">Search</Link>|
                    <Link className='link' to="/sign-in">Sign-in</Link>|
                    <Link className='link' to="/register">Register</Link>
                </nav>
                <img src="https://cdn-icons-png.flaticon.com/512/49/49334.png" alt="blog logo" />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout