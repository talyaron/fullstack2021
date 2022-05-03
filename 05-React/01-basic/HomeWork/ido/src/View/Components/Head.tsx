import React from 'react';


interface HeaderProps {
    textOne: string;
    textTwo:string
  }

const Header = (props:HeaderProps) => {
    const { textOne , textTwo } = props;
    return (
        <div className="header">
            <ul className='header_list'>
                <li className='header_list-option'>{textOne}</li>
                <li className='header_list-option'>{textTwo}</li>
            </ul>
        </div>
      
    );
  }
  export default Header


