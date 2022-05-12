interface card {
    text: string;
    img: string;
    id: string
  }

interface CardProps{
    arr:Array<card>;
}

const Footer = () => {
    return (
        <div className="footer">
            {/* <p>id:</p> */}
            <form >
                <input type="text" name='img' required={true} className='filed' placeholder='img url' />
                <input type="text" name='text' required={true} className='filed' placeholder='text' />
                <input type="submit" value="UPDATE"  className='f_button' />
                <button className="f_button" >DELETE</button>
            </form>
        </div>
    )
}

export default Footer