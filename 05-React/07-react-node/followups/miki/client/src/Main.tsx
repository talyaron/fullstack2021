import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import IceCreamFlavourArray from './App'

interface MainProps {
    vanilla: String;
    setVanilla: Function;
    chokate: String;
    setChokate: Function;
    chokateArray: any;
    setChokatArray: Function;
    admin: String;
}

const Main = (props: MainProps) => {
    const { chokate, setChokate, vanilla, setVanilla, chokateArray, setChokatArray, admin} = props


    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/icecream/taste')
            const { result } = data

            const chokateIndex = result.findIndex((elem: any) => elem.taste === "chokate")
            const chokateTaste = result[chokateIndex].taste
            const chokateSubTaste = result[chokateIndex].subTaste

            const vanillaIndex = result.findIndex((elem: any) => elem.taste === "vanilla")
            const vanillaTaste = result[vanillaIndex].taste
            const vanillaSubTaste = result[vanillaIndex].subTaste

            const chokatePayload = {taste: chokateTaste, subpTaste: chokateSubTaste }
            const vanillaPayload = {taste: vanillaTaste, subpTaste: vanillaSubTaste }

            setChokatArray([...chokateArray, chokatePayload])            
            
            
            

            setChokate(chokateSubTaste)
            setVanilla(vanillaSubTaste)

        })()
    }, [])


    return (
        <div>

            <h1>Main Header</h1>

            {admin === 'admin'?  <Link to={`/home/admin`}>Admin</Link> : null}

           
            <Link to={`/home/chokate/${chokate}`}>Choose Chokate</Link>
            <Link to={`/home/vanilla/${vanilla}`}>Choose Vanilla</Link>

            <Outlet />

            <h1>Main Footer</h1>



        </div>
    )
}

export default Main