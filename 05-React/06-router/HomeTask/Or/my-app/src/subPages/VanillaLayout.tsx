import { Link, Outlet } from "react-router-dom";

const VanillaLayout = () => {
    return (
        <div>
            <h3>Vanilla Ice - Cream Flavours</h3>
            <Link to='/Vanilla/French-Vanilla'>
                <button>French Vanilla</button>
            </Link>
            <Link to='/Vanilla/Chip'>
                <button>Vanilla Chip</button>
            </Link>
            <Outlet /></div>
    )
}

export default VanillaLayout