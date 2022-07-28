import { useDispatch } from 'react-redux'
import { changeColor } from '../redux/theme'

const ChangeColor = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <input type="color" onChange={(e) => dispatch(changeColor(e.target.value))} />
        </div>
    )
}

export default ChangeColor