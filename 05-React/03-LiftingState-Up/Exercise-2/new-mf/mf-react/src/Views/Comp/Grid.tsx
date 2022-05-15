import Add from './Add';
import { Arr } from '../../App'

interface GridProps {
    arr: Array<Arr>;
    handleUpdate: Function;
    handleDelete: Function;
}

const Grid = (props: GridProps) => {
    const { arr, handleUpdate, handleDelete } = props;
    return (
        <div>
            {arr.map((user: any, i: number) => {
                return (
                    <Add key={i} user={user} handleUpdate={handleUpdate} handleDelete={handleDelete}  />
                )
            })}
        </div>
    )
}

export default Grid