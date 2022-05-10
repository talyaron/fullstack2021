import Form from "./Form"

interface card {
    text: string;
    img: string;
    id: string
  }
  interface CardProps{
      setArr:Function;
      arr:Array<card>;
  }



const HEADER = (props:CardProps) => {
    const {setArr,arr}=props;
    return (
        <div>
            <h1>welcome to our site!</h1>

            <div className='form' >
                <Form setArr={setArr} arr={arr} />
            </div>

        </div>
    )
}

export default HEADER