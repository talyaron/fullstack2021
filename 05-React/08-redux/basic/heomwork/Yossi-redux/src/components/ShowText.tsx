import {  useSelector } from 'react-redux'


const ShowText = () => {
    const {textInsert}= useSelector((state:any)=> state.inputText)
    // const dispatch = useDispatch();
    return (
        <div className='showText'>
            {/* <h1>Show Text</h1> */}
            <div>Dear John...</div>
            <div><h2>{textInsert}</h2></div>
        </div>
    )
}

export default ShowText