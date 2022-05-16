import { NewArray } from '../../App';

interface CardProps {
  handleUpdate: Function;
  handleDelete:Function;
  user: any;
}

const Card = (props: CardProps) => {
  const {user, handleUpdate, handleDelete} = props;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.password}</p>

      <form onSubmit={(event) => handleUpdate(event, user.id)}>
                <input type="text" name="name" placeholder='name' />
                <input type="password" name="password" placeholder='password' />
                <input type="submit" value="Update" />
            </form>
            <button onClick={(event)=> handleDelete(event, user.id)}>Delete</button>
      
    </div>
  )
}

export default Card