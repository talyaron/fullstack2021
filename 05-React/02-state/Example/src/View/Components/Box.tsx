interface BoxProps {
  text: string;
  title: string;
}
const Box = (props: BoxProps) => {
  const { text, title } = props;
  return (
    <div className="box">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Box;
