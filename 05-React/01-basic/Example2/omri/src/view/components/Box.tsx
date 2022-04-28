interface BoxProps{
    text: string,
    title:string
}

const Box = (props:BoxProps) => {
    const {text}= props;
  return (
    <div className='box'>Box: {text}</div>
  )
}

export default Box