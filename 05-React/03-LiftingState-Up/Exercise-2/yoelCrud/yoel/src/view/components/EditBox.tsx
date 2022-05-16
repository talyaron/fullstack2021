interface propEdit {
    id: number,
    boxes: any,
    setBoxes: Function
}
function handleSubmit(id: number, ev: any, boxes: any, setBoxes: Function) {
    ev.preventDefault()
    const title = ev.target.elements.title.value;
    handleUpdate(id, title, boxes, setBoxes); // here he will get the title and id (id because how we'll know how to change )
}
function handleUpdate(id: number, title: string, boxes: any, setBoxes: Function) {
    // in update first of all we need to found the place of the object we want to change
    const index = boxes.findIndex((box: any) => box.id === id)
    // if he will not found same id he will return -1 so
    if (index !== -1) {
        //important! we need to create a copy because we won't use the real state 
        const newBoxes = [...boxes];
        newBoxes[index].title = title; // now I'm doing to "Replace"
        // and now to change the copy with the setter 
        setBoxes([...newBoxes])
    }
}
function handleDelete(){
    
}
function EditBox(prop: propEdit) {
    const { id, boxes, setBoxes } = prop;
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(id, event, boxes, setBoxes)}>
                <input type="text" name="title" />
                <input type="submit" value="Update" />
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default EditBox