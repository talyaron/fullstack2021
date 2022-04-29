interface HeaderProps {
  text: String
}

const Header = (props: HeaderProps) => {
  const { text } = props;
  return (
    <div className='header'>{text}</div>
  )
}

export default Header