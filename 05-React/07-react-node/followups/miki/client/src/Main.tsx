import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

interface MainProps {
    icecream: String;
    setIcecream: Function;
}

const Main = (props: MainProps) => {
    const { icecream, setIcecream } = props

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/icecream/taste')
            const { result } = data
            setIcecream(result[0]._id)
            
            
            
            // console.log(result[0]._id);      
        })()
    }, [])


    return (
        <div>

            <h1>Main Header</h1>

            <Link to='/home'>Home</Link>
            <Link to={`/home/${icecream}`}>IceCream</Link>

            <Outlet />

            <h1>Main Footer</h1>



        </div>
    )
}

export default Main