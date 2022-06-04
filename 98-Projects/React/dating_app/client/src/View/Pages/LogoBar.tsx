import React from 'react'
import { Link,Outlet} from "react-router-dom";
//needed outlet to show login. links are used if i want it part of the
//header layout and stuff.outlet lets the stuff in the tag show
const LogoBar = () => {
  return (
    <div className='logoBar'>
        <h1>Logo Bar</h1>
        <Outlet/>
    </div>
  )
}

export default LogoBar