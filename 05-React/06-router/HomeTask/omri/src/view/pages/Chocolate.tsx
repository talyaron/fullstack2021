import { Link, Outlet } from "react-router-dom"

const Chocolate = () => {
  return (
    <div className="App__main__flaveors__chocolate">
        <h4><Link id="link" to='chocolate/chocolate_chips'>Chocolate Chips</Link></h4>
        <h4><Link id="link" to='chocolate/chocolate_banana'>Chocolate Banana</Link></h4>
          <Outlet />
    </div>
  )
}

export default Chocolate