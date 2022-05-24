interface propEdit {
    id: number,
    boxes: any,
    setBoxes: Function
}
function handleSubmit(id: number, ev: any, boxes: any, setBoxes: Function) {
    ev.preventDefault()
    const title = ev.target.elements.title.value;
    const img = ev.target.elements.img.value;
    handleUpdate(id, img, title, boxes, setBoxes); // here he will get the title and id (id because how we'll know how to change )
}
function handleUpdate(id: number, img: string, title: string, boxes: any, setBoxes: Function) {
    // in update first of all we need to found the place of the object we want to change
    const index = boxes.findIndex((box: any) => box.id === id)
    // if he will not found same id he will return -1 so
    if (index !== -1) {
        if (img && title) {
            //important! we need to create a copy because we won't use the real state 
            const newBoxes = [...boxes];
            newBoxes[index].img = img;
            newBoxes[index].title = title; // now I'm doing to "Replace"
            // and now to change the copy with the setter 
            setBoxes([...newBoxes])
        }
    }
}
function handleDelete(id: number, boxes: any, setBoxes: Function) {


    const newBoxes = boxes.filter((box: any) => box.id !== id)// not sure it's good 

    console.log(newBoxes);

    setBoxes([...newBoxes])
}
function EditBox(prop: propEdit) {
    const { id, boxes, setBoxes } = prop;
    return (
        <div className="input">
            <form className="form" onSubmit={(event) => handleSubmit(id, event, boxes, setBoxes)}>
                <input type="text" name="title" placeholder="write here a new name" />
                <input type="text" name="img" placeholder="put here the new picture" />
                <input type="submit" value="Update" />
            </form>

            <button onClick={(event) => handleDelete(id, boxes, setBoxes)}>Delete</button>
        </div>
    )
}

export default EditBox