import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/About')
        }, 3000)
    }, [])
    return (
        <div>
            <p>Home</p>
            <Link to='/About'> About</Link>
        </div >
    )
}

export default Home