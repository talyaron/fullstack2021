import { Link, Outlet } from "react-router-dom"


const Main = () => {
  return (
    <div className="App__main">
      <h1>IceCream Shop</h1>
      <div className="App__main__flaveors">
        <h3><Link id="link"   to='/Chocolate'>Chocolate</Link></h3>
        <h3><Link id="link"  to='/Vanilla'>Vanilla</Link></h3>
      </div>
      <Outlet />
    </div>
  )
}

export default Main