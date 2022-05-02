import React from "react";

interface FooterProps {
    text: string;

}

const Footer = (props:FooterProps) => {
    const {text}= props;

    return (
        <div className='footer'>Yo-Box: {text}</div>

    );
}
export default Footer;

  