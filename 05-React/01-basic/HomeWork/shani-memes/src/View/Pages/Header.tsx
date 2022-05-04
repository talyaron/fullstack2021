import React from 'react'

interface pageHeaderProps{
pageName:string;
logoUrl:string;
}

 const Header = (props:pageHeaderProps) => {
     const {pageName,logoUrl}=props
  return (
    <div id="header" className='header'>
        <h1  className="pageName">{pageName}</h1>
        <img src={logoUrl}></img>
    </div>
  )
}

export default Header
