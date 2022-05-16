interface ball {
  handleclick: Function;
  id: string;

}

const Ball = (props: ball) => {
  const { handleclick, id } = props;
  return <div className="ball"  onClick={() => handleclick()} id={id}   >
  </div>;
};

export default Ball;
