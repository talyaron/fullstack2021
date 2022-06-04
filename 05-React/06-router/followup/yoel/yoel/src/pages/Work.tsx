import { Link ,useNavigate} from 'react-router-dom';
import {useEffect} from 'react'

function Work() {
    const navigate = useNavigate();
    // useEffect(()=>{
    //     setTimeout(()=>{navigate('/work')},2000)
    // })
  return (

    <div className="red">
        <h2>Work</h2>
        <Link to ='/'>Home</Link>
    </div>
  )
}

export default Work