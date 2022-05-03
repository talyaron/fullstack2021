interface boxProps{
    text?: string,
    title?:string
}

const Box = (props:boxProps) => {
  const { text, title } = props;
    return (
    <div className='box' >
        <p>{text} {title}</p></div>
  )
}

export default Box