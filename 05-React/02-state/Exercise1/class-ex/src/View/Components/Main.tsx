interface MainProps {
    img: string;
    text:string
}

const main = (props: MainProps) => {
    const { img,text } = props;
    return (
        <div>
x
            <img src={img} alt="" />
        </div>
    )
}

export default main;