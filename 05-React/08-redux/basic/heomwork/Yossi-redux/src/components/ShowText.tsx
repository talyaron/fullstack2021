import { useDispatch, useSelector } from 'react-redux'
import { changeText } from '../redux/text'

const ShowText = () => {
    const {textInsert}= useSelector((state:any)=> state.inputText)
    // const dispatch = useDispatch();
    return (
        <div className='showText'>
            {/* <h1>Show Text</h1> */}
            <p>Dear John...</p>
            <p><h2>{textInsert}</h2></p>
        </div>
    )
}

export default ShowText