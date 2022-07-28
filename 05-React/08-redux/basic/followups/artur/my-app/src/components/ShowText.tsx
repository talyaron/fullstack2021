import { useDispatch, useSelector } from 'react-redux'

const ShowText = () => {
    const {textInsert}= useSelector((state:any)=> state.inputText)
    // const dispatch = useDispatch();
    return (
        <div className='showText'>
            {/* <h1>Show Text</h1> */}
            <p>hey</p>
            <p><h2>{textInsert}</h2></p>
        </div>
    )
}

export default ShowText