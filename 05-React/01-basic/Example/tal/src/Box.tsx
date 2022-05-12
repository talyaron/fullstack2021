interface BoxProps{
    text:string
}

const Box = (props:BoxProps) => {
    const {text}= props;
  return (
    <div className='box'>Yo-Box: {text}</div>
  )
}

export default Box