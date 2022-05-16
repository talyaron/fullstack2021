interface FormProps {
    handleSubmit: any;
}

const Form = (props: FormProps) => {

    const { handleSubmit } = props;

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