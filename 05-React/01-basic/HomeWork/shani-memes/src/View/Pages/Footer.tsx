
import React from "react";

interface footerProps{
  footerText:string
}


const Footer = (props:footerProps) => {
  const {footerText}=props
  return (
    <div className="footer">
      <h3 className="footerText">{footerText}</h3>
    </div>
  )
}


export default Footer;
