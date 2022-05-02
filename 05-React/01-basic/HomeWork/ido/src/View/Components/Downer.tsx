import React from 'react';

interface DownerProps {
    downer:string;
  }

const Downer = (props:DownerProps) => {
    const { downer } = props;
    return (
          <div className='downer'>{downer}</div>
    );
  }
  export default Downer