
interface FormProps{
    addImageFunction: any;
}

const Form = (props:FormProps) => {
    const {addImageFunction} = props
    return (
        <form onSubmit={addImageFunction} className='form'>
            <label htmlFor="text">Input a name for the image</label>
            <input type="text" name='text' id='text' />
            <label htmlFor="img">Input the image URL</label>
            <input type="text" name='img' id='img' />
            <input type="submit" />
        </form>
    )
}

export default Form;
