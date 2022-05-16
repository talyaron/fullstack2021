import { Arr } from '../../App';
import Card from './Card'

interface GridProps {
    array: Array<Arr>;
    setArray: Function;
}

const Grid = (props: GridProps) => {
    const { array, setArray } = props;

    return (
        <div>
            {array.map((item: any, i: number) => {
                return (

                    <Card key={i} item={item} setArray={setArray} array={array} />

                )
            })}
        </div>
    )
}

export default Grid