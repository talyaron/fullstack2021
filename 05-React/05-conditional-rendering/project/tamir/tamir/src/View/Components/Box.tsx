interface boxprops {
  handleaddone: Function;
  setname: Function;
}

const Box = (props: boxprops) => {
  const { setname, handleaddone } = props;

  function handlesubmit(ev: any) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    
    setname(name);
    handleaddone(name);
  }

  return (
    <div className="Box">
      <h1 className="Box__h1"> .סרטים, תוכניות טלוויזיה ועוד בלי הגבלה</h1>
      <h3 className="Box__h3">.לצפות בכל מקום. לבטל בכל שלב</h3>
      <h3 className="Box__h3">.מלא את שמך להוספת מנוי</h3>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="your name here" />
        <input type="submit" value="join" />
      </form>
    </div>
  );
};

export default Box;
