import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface IceCreamProps {
    type: string,
    topping: string,
    url: string
}

function IceCreamPage() {
    const { iceCreamId } = useParams();
    const [iceCream, setIceCream] = useState<IceCreamProps>({ type: "", topping: "", url: "" })
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/get-ice-cream?id=${iceCreamId}`)
            setIceCream({ ...data })
        }
        )();
    }, [iceCreamId]);

    return (
        <div className="ice cream">
            <h1>{iceCream.type}</h1>
            <h2>{iceCream.topping}</h2>
            <img src={iceCream.url} alt="" />
        </div>
    );
}

export default IceCreamPage;