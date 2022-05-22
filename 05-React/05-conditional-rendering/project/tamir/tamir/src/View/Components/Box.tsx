// interface box {
//     handlebox:Function
// }
const Box = () => {

  return (
    <div className="Box" >
      <h1 className="Box__h1"> .סרטים, תוכניות טלוויזיה ועוד בלי הגבלה</h1>
      <h3 className="Box__h3">לצפות בכל מקום. לבטל בכל שלב.</h3>
      <h5 className="Box__h5">
        רוצה להתחיל לצפות? יש להזין את כתובת האימייל כדי ליצור מינוי או להפעיל
        מחדש מינוי.
      </h5>
      <div className="Box__input">
        <input
          className="Box__submit"
          type="submit"
          value="קדימה מתחילים"
        />
        <input
          className="Box__text"
          type="text"
          name=""
          id=""
          placeholder="האימייל שלך"
        />
      </div>
    </div>
  );
};

export default Box;
