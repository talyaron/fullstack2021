
interface FooterProps {
    text: string;

}

const Footer = (props: FooterProps) => {
    const { text } = props;

    return (
        <div className='footer'> {text}</div>

    );
}
export default Footer;

