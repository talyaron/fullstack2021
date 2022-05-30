import { Link, Outlet } from "react-router-dom";

const ChocolateLayout = () => {
  return (
    <div className='ChocolateLayout'>
                <h3>Chocolate Ice - Cream Flavours</h3>
        <Link to='/Chocolate/mokka'>
            <button>mokka</button>
        </Link>
        <Link to='/Chocolate/sprinkles'>
            <button>Chocolate - Sprinkles</button>
        </Link>
        <Outlet/>
    </div>
  )
}

export default ChocolateLayout