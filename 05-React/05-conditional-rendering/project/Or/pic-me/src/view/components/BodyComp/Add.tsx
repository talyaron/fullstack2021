
interface addProps {
    add: Boolean
    setAdd: Function
    setPictures: Function
    pictureArray: Array<pic>
    uid: Function

}
interface pic {
    picUrl: any;
    people: string;
    time: string;
    id: string
}
const Add = (props: addProps) => {
    const { add, setAdd, setPictures, pictureArray, uid } = props
    function handleAddPicture(ev) {
        ev.preventDefault()
        const newPicUrl = ev.target.newPicUrl.value
        const newPeople = ev.target.newPeople.value
        const newTime = ev.target.newTime.value
        const newPic = { picUrl: newPicUrl, people: newPeople, time: newTime, id: uid() }
        setPictures([...pictureArray, newPic])

    }
    return (
        <div>
            <button className='add' onClick={() => setAdd(!add)}>
               <p>Add Image</p>
            </button>
            <form className={add?"form":"form-active"} onSubmit={handleAddPicture}>
                <input type="text" name="newPicUrl" id="" placeholder="Enter image URL" />
                <input type="text" name="newPeople" id="" placeholder="Who is in the picture" />
                <input type="text" name="newTime" id="" placeholder="From where is the picture" />
                <button className="submit" type="submit" value="Submit">Submit</button>

            </form>
        </div>
    )
}

export default Add