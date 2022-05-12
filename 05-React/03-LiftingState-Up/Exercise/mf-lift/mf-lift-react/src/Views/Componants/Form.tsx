interface FormProps {
    array: Array<CardArray>;
    setArray: Function;
}

interface CardArray {
    img: String;
    title: String;
    id: String;
}

const Form = (props: FormProps) => {
    const { array, setArray } = props;

    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2)
      }

    function handleAddCard(ev: any) {

        ev.preventDefault()

        const image1: String = ev.target.elements.url.value;
        const text1: String = ev.target.elements.text.value;

        const payload: CardArray = { img: image1, title: text1, id: uid()  }

        setArray([...array, payload])

        console.log(array);


        ev.target.reset();
    }

    return (
        <div>

            <form onSubmit={handleAddCard}>
                <input type="url" name="url" placeholder='url' />
                <input type="text" name="text" placeholder='text' />
                <input type="submit" value="Submit" />
            </form>


        </div>
    )
}

export default Form