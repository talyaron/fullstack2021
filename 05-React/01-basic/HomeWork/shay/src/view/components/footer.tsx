interface FooterProps {
  text: string;
  icon: string;
  img: string;
}

const Footer = (props: FooterProps) => {
  const { text, icon, img } = props;
  return (
    <div>
      <p>{text}</p>
      <a href={icon}>
        <img src={img} />
      </a>
    </div>
  );
};

export default Footer;
