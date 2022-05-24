interface propAddBox {
  boxes: any;
  setBoxes: Function
}
function addArt(title: string, img: string, boxes: any, setBoxes: Function) {


  const obj = { title, img };
  boxes = [...boxes, obj]


  setBoxes([...boxes]); // I use the real boxes without copy because it's now worked
  
}
function handleSubmit(ev: any, boxes: any, setBoxes: Function) {
  ev.preventDefault();

  const title = ev.target.elements.title.value;
  const img = ev.target.elements.img.value;


  addArt(title, img, boxes, setBoxes)

}
function AddBox(prop: propAddBox) {
  const { boxes, setBoxes } = prop;
  return (
    <div>
      <form className = 'border' onSubmit={(event) => handleSubmit(event, boxes, setBoxes)}>
      <h2>for add a new art </h2>
        <input type="text" name="title" placeholder="put here a name   " />
        <input type="text"  name="img" placeholder="put here a img " />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddBox