interface BoxProps{
    text:string
}

const Box = (props:BoxProps) => {
    const {text}= props;
  return (
    <div className='box'>Box: {text}</div>
  )
}

export default Box
