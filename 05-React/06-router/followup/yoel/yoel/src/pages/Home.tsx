import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="green">
            <h1>Home</h1>
            <Link to='/work'>Work</Link>
        </div>
    )
}

export default Home