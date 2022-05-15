

function Update({handleUpdateImageName, handleDelete, image, title, url}:any) {


    return (
        <div className="updateBox">
            <form onSubmit={(ev) => handleUpdateImageName(ev, image.id)}>
                <input type="text" name="newTitle" placeholder="enter new title" defaultValue={title}/>
                <input type="text" name="newUrl" placeholder="enter new url" defaultValue={url}/>
                <input type="submit" className="submit" value={'UPDATE IMAGE'}/>
            </form>
            <div className="delete"><button onClick={() => handleDelete(image.id)}>DELETE</button></div>
        </div>
    );
}

export default Update;