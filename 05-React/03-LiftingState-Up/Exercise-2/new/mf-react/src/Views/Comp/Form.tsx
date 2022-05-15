
interface AddProps {
    add: any;
    setAddition: Function;
}

function uid() {
    return Math.random().toString(36).slice(-6);
  }


const Form = (props: AddProps) => {

    const { add, setAddition } = props;

    function handleSubmit(ev: any) {

        ev.preventDefault();

        const name = ev.target.name.value;
        const password = ev.target.password.value;
        const id = uid();

        const payload = { name, password, id }
        setAddition([...add, payload])

        ev.target.reset();

    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' />
                <input type="password" name="password" placeholder='password' />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default Form