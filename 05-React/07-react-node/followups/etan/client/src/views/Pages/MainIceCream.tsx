import {Outlet, useParams} from 'react-router-dom';


function MainIceCream() {
    const params = useParams();
    const {IceCreamType} = params;
    console.log(IceCreamType);
    
  return (
    <div>
        
        <Outlet/>
    </div>

  )
}

export default MainIceCream