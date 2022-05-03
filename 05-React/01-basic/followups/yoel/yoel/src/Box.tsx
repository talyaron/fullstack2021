interface BoxProps{
  text:string
}

const box = (props:BoxProps) => {
  const {text} = props;
  return (
    <div className='box'>box:{text}</div>
  )
}

export default box