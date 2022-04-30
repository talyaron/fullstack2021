
interface BoxProps {
    img:string;
}

const Box = (props: BoxProps) => {
    const { img } = props;

    return (
        <>

        <div><img src={img}/></div>
        </>
    )
}

export default Box