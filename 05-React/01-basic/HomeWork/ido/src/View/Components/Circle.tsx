import React from 'react';

interface CircleProps {
    url:string;
  }

const Circle = (props:CircleProps) => {
    const { url } = props;
    return (
          <img className='middle-circle' src={url} alt={"lalal"} />
    );
  }
  export default Circle