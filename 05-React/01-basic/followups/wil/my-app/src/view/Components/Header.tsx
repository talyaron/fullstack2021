interface HeaderProps{ text:string}


const Header = (props:HeaderProps) => {
    const {text} = props;
    return (
        <div>
        <h5>{text}</h5>
        </div>
    )
}

export default Header