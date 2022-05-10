import React from 'react'


// interface HeaderProps{
//     logoUrl:string;
//     shopName:string;
// }
import logo from "../images/logo.png"
 const Header = () => {
  return (
      <div className="header">
          <img src={logo}/>
          <h1 >SHSHop </h1>
          <div>counter</div>
         
    
      </div>
    
  )
}

export default Header 
