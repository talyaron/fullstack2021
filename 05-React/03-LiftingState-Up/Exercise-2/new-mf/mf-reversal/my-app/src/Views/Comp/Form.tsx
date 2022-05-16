import { Arr } from '../../App'

interface formProps {
    array: Array<Arr>;
    setArray: Function;
}

function uid() {
    return Math.random().toString(36).slice(-6);
  }

const Form = (props: formProps) => {
    const {array, setArray} = props;

    function handleSubmit (ev:any) {

        ev.preventDefault()        

        const name = ev.target.name.value;
        const password = ev.target.password.value;
        const payload = {name, password, id: uid()}        

        setArray([...array, payload])

        ev.target.reset()

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Form