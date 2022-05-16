interface BoxProps {
    user: any;
    setArray: any;
    array: any;
}
const Box = (props: BoxProps) => {
    const { user, setArray, array } = props;

    function handleDelete(ev: any, id: any) {

        setArray(array.filter((elm: any) => elm.id !== id))

    }

    function handleUpdate (ev: any, id: any) {

        ev.preventDefault();

        const name = ev.target.name.value;
        const password = ev.target.password.value;

        const index = array.findIndex((elm:any) => elm.id === id)
        array[index].name = name;
        array[index].password = password;
    
        setArray([...array])
    
        ev.target.reset();

    }

    return (
        <div>
            <h1>{user.name}</h1>
            <h4>{user.password}</h4>
            <button onClick={(event) => handleDelete(event, user.id)}>Delete</button>

            <form onSubmit={(event) => handleUpdate(event, user.id)}>

                <input type="text" name="name" placeholder="name" defaultValue={user.name}/>
                <input type="password" name="password" placeholder="password" defaultValue={user.password} />
                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default Box