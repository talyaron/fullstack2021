import React from "react";

interface footerProps {
  footerText: string;
}

const Footer = (props: footerProps) => {
  const { footerText } = props;
  return (
    <div className="footer">
      <div className="ticker-move">
        <div className="footerText">{footerText}</div>
       
      </div>
    </div>
  );
};

export default Footer;
