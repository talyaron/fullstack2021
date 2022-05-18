import { User } from '../../App';
import Box from './Box';

interface ArrayProps {
    array: Array<User>;
    setArray: Function;
}

const Wrapper = (props: ArrayProps) => {
    const { array, setArray } = props;

    return (
        <div>
            {array.map((user: any, i: number) => {
                return (
                    <Box key={i} user={user} array={array} setArray={setArray} />
                )
            })}
        </div>
    )
}

export default Wrapper