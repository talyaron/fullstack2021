interface card {
    text: string;
    img: string;
    id: string
  }
  interface CardProps{
      setArr:Function;
      arr:Array<card>;
  }
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }


const Form = (props:CardProps) => {
    const {setArr,arr}=props;
    function handleAddCard(ev: any) {
        ev.preventDefault();
        const text = ev.target.text.value;
        const img = ev.target.img.value;
        const obj = { text, img, id: uid() };
        setArr([...arr, obj]);
        ev.target.reset()
      }



    return (
        <div>
            <form onSubmit={handleAddCard}  >
          <input type="text" name='img' required={true} className='filed' placeholder='img url' />
          <input type="text" name='text' required={true} className='filed' placeholder='text' />
          <br/>
          <input type="submit" value="Add card" className='button' />

        </form>
        </div>
    )
}

export default Form