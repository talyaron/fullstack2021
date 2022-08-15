import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteText, setText, updateText } from '../../reducers/textSlice';
import './textArea.css';
const TextArea = () => {

    const text = useAppSelector((state: any) => state.inputText.value);
    const dispatch = useAppDispatch();
    console.log(text)


    function handleSubmit(ev: any) {
        ev.preventDefault();
        const input = ev.target.elements.textArea.value;

        dispatch(setText(input))
        console.log(input, input.id)
    }

    function handleDeleteText(id: any) {
        // const input = ev.target.elements.textArea.value;
        dispatch(deleteText(id))
    }

    function handleUpdateText(ev: any, id: any) {
        ev.preventDefault();
        const newText: any = ev.target.elements.newText.value;
        console.log(newText, id)
        dispatch(updateText({ id, newText }))
    }

    return (
        <div className='textAreaContainer'>
            <form name='form' className='formContainer' onSubmit={handleSubmit}>
                <textarea className='textArea' name='textArea' placeholder='Enter message...' required />
                <button className='submitButton'>Submit</button>
            </form>

            <div className='text'>
                {text.map((line: any, i: any) => {
                    return (
                        <div key={i}>
                            <h1>New message</h1>
                            <div className='lineText' onClick={() => handleDeleteText(line.id)}>{line.text}</div>
                            <form className='updateForm' onSubmit={(ev) => handleUpdateText(ev, line.id)}>
                                <input type="text" name='newText' required />
                                <button className='updateButton'>Update</button>
                            </form>
                            <hr className='hr' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TextArea