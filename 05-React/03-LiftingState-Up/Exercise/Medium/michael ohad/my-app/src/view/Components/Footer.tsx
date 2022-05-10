interface card {
    text: string;
    img: string;
    id: string
  }

interface CardProps{
    arr:Array<card>;
}

const Footer = () => {
    // const {arr}= props;
    return (
        <div className="footer">
            <p>id:</p>
            <form >
                <input type="text" name='img' required={true} className='filed' placeholder='img url' />
                <input type="text" name='text' required={true} className='filed' placeholder='text' />
                <input type="submit" value="UPDATE" style={{boxShadow: '0 5px 0 0 black'}} className='button' />
                <button className="button" style={{boxShadow: '0 5px 0 0 black'}} >DELETE</button>
            </form>
        </div>
    )
}

export default Footer