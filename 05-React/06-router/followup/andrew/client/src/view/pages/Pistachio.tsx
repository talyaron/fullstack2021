import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import IceCreamGrid from "../components/IceCreamGrid";

interface IceCreamProps {
    type: string,
    topping: string,
    url: string
}

function Pistachio() {
    const [iceCreams, setIceCreams] = useState<Array<IceCreamProps>>([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/get-ice-creams?type=pistachio')
            setIceCreams([...data])
        }
        )();
    }, [])

    return (
        <div>
            <h1>Pistachio</h1>
            <IceCreamGrid iceCreamArray={iceCreams} />
            <Outlet />
        </div>
    );
}

export default Pistachio;