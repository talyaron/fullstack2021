import { useNavigate } from "react-router-dom";

interface IceCreamProps {
    type: string,
    topping: string,
    url: string,
    id: string
}

const IceCream = (props: IceCreamProps) => {
    const navigate = useNavigate();
    const { type, topping, url, id } = props
    return (
        <div>
            <h1 className="hovered" onClick={() => { navigate(`/${type}/${id}`) }}>{type} with {topping} </h1>
            {/* <img src={url} alt={topping} /> */}
        </div>
    )
}

export default IceCream