import { NewArray } from '../../App';
import Card from './Card'

interface GridProps {
  handleUpdate: Function;
  array: Array<NewArray>;
  handleDelete: Function;
}

const Grid = (props: GridProps) => {
  const { array, handleUpdate, handleDelete } = props;

  return (
    <div>
            {array.map((user: any, i: number) => {
                return (
                  <Card key={i} user={user} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                    
                  )
            })}
    </div>
  )
}

export default Grid