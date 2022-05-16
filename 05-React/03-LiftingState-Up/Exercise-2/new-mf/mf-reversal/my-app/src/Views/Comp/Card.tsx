import { Arr } from '../../App'

interface CardProps {
    item: any;
    array: Array<Arr>;
    setArray: Function;
}

const Card = (props: CardProps) => {

    const { item, array, setArray } = props;

    function handleDelete(ev: any, id: any) {

        setArray(array.filter((user: any) => user.id != id));

    }

    function handleUpdate(ev: any, id: any) {


        ev.preventDefault()

        const name = ev.target.name.value;
        const password = ev.target.password.value;

        const index = array.findIndex((user: any) => user.id === id);
        array[index].name = name;
        array[index].password = password;


        setArray([...array])

        ev.target.reset()

    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.password}</p>
            <button onClick={(event) => handleDelete(event, item.id)}>Delete</button>

            <form onSubmit={(event) => handleUpdate(event, item.id)}>
                <input type="text" name="name" placeholder="name" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" value="update" />
            </form>
        </div>
    )
}

export default Card