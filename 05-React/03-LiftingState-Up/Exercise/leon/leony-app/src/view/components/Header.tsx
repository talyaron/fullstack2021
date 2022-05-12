interface HeaderProps {
    text: string;
}

const Header = (props: HeaderProps) => {
    const { text } = props;

    return (
        <div className='header'> {text}</div>

    );
}
export default Header;