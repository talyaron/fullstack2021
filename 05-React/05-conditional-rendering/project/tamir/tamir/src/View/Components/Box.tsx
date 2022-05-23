interface box {
  handleaddone: Function;
  id:string
}

const Box = (props: box) => {
  const { handleaddone } = props;
  return (
    <div className="Box">
      <h1 className="Box__h1"> .סרטים, תוכניות טלוויזיה ועוד בלי הגבלה</h1>
      <h3 className="Box__h3">לצפות בכל מקום. לבטל בכל שלב.</h3>

      <div className="Box__input" onSubmit={(ev) => handleaddone(ev)}>
        <input className="Box__submit" type="submit" value="הוסף מנוי" />
        <input type="text" name="name" placeholder="your name here" />
        <input className="Box__text" type="text" name="phone" placeholder="האימייל שלך" />
      </div>
    </div>
  );
};

export default Box;
