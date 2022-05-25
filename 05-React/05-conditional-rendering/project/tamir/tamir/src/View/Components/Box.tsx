interface boxprops {
  handleaddone: Function;
  setname: Function;

  setimg: Function;
}

const Box = (props: boxprops) => {
  const { setname, setimg, handleaddone } = props;

  function handlesubmit(ev: any) {
    ev.preventDefault();
    const img = ev.target.elements.img.value;
    const name = ev.target.elements.name.value;

    setname(name);
    setimg(img);
    handleaddone(name, img);
  }

  return (
    <div className="Box">
      <h1 className="Box__h1"> .סרטים, תוכניות טלוויזיה ועוד בלי הגבלה</h1>
      <h3 className="Box__h3">לצפות בכל מקום. לבטל בכל שלב.</h3>

      <form onSubmit={handlesubmit}>
        <input type="text" name="img" placeholder="your img here" />
        <input type="text" name="name" placeholder="your name here" />
        <input type="submit" value="join" />
      </form>
    </div>
  );
};

export default Box;
