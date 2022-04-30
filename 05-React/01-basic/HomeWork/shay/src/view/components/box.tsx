interface BoxProps {
  img: string;
  title: string;
}


const Box = (props: BoxProps) => {
  const { title, img } = props;
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default Box;
