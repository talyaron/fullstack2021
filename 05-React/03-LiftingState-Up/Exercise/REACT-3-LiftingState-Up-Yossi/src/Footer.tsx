

function Footer({handleUpdateFooter, handleDelete, id, title, url}:any) {


    return (
        <div>
            <form onSubmit={(ev) => handleUpdateFooter(ev, id)}>
                <input type="text" name="newTitle" placeholder="enter new title" defaultValue={title}/>
                <input type="text" name="newUrl" placeholder="enter new url" defaultValue={url}/>
                <input type="submit" className="submit" value={'UPDATE IMAGE'}/>
            </form>
            <div className="delete"><button onClick={() => handleDelete(id)}>DELETE</button></div>
        </div>
    );
}

export default Footer;