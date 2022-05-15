import { Arr } from '../../App';

interface AddProps {
    user: Arr;
    handleUpdate: any;
    handleDelete: any;
}

const Add = (props: AddProps) => {
    const { user, handleUpdate, handleDelete } = props;

    return (
        <div>
            <h1>{user.name}</h1>
            <h4>{user.password}</h4>

            <form onSubmit={(event) => handleUpdate(event, user.id)}>
                <input type="text" name="name" placeholder='name' />
                <input type="password" name="password" placeholder='password' />
                <input type="submit" value="Update" />
            </form>

            <button onClick={(event) => handleDelete(event, user.id)}>Delete</button>

        </div>
    )
}

export default Add