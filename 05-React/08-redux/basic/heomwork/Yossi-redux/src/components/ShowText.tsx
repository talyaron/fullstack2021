import { useDispatch, useSelector } from 'react-redux'
import { changeText } from '../redux/text'


const ShowText = () => {
    const  textInsert  = useSelector((state: any) => state.inputText.value)
    const themeColor = useSelector((state: any) => state.changeColor.value)

    const dispatch = useDispatch();

    return (
            <div className='showTextWrapper'>
                <div className='textField'>
                    <textarea placeholder="Continue writing..." onChange={(e) => dispatch(changeText(e.target.value))} />
                </div>
                <div className='showText' style={{background: themeColor}}>
                    <p>Dear John...</p>
                    <p><h2>{textInsert}</h2></p>
                </div>
            </div>
    )
}

export default ShowText