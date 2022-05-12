interface LaunchProps {
    id: String;
}

const Button = (props: LaunchProps) => {

    const {id} = props;

    function handleLaunchUpdate(ev: any) {

        console.log(ev.target.id);

    }

    return (
        <div>

            <button id={} onClick={handleLaunchUpdate}>Launch Update</button>

        </div>
    )
}

export default Button