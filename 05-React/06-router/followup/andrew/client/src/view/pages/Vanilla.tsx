import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import IceCreamGrid from "../components/IceCreamGrid";

interface IceCreamProps {
    type: string,
    topping: string,
    url: string
}

function Vanilla() {
    const [iceCreams, setIceCreams] = useState<Array<IceCreamProps>>([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/get-ice-creams?type=vanilla')
            setIceCreams([...data])
        }
        )();
    }, [])

    return (
        <div>
            <h1>Vanilla</h1>
            <IceCreamGrid iceCreamArray={iceCreams} />
            <Outlet />
        </div>
    );
}

export default Vanilla;