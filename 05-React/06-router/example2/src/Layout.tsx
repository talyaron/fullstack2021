import{Outlet} from 'react-router-dom'

function LayoutComp(){
    return(
        <div>
            <h1>My app</h1>
            <Outlet />
        </div>
    )
}

export default LayoutComp