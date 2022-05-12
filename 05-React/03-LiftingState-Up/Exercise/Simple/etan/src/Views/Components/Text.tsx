import React from 'react'
interface TextProps {
  color: string;
}
function Text(props:TextProps) {
  const {color} = props;
  return (
    <div color={color}>Text</div>
  )
}

export default Text