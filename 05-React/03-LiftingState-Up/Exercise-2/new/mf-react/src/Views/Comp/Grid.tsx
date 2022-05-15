import Add from './Add';
import { Arr } from '../../App'

interface GridProps {
    addArray: Array<Arr>;
    handleUpdate: Function;
}

const Grid = (props: GridProps) => {
    const { addArray, handleUpdate } = props;
    return (
        <div>
            {addArray.map((user: any, i: number) => {
                return (
                    <Add key={i} user={user} handleUpdate={handleUpdate}  />
                )
            })}
        </div>
    )
}

export default Grid