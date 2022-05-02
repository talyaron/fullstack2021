interface HeaderProps {
    title:string,
   img:string,
  }
  
  
  const Header = (props: HeaderProps) => {
    const { title, img } = props;
    return (
      <div>
    <h2>{title}</h2>
    <img src={img} alt="" />
      </div>
    );
  };
  
  export default Header;
  