import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import LoginForm from "./LoginForm";
import axios from 'axios';

export interface LoginArray {
    name: String;
    password: String;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState<LoginArray>()

    async function handleLogin(e: any) {
        e.preventDefault()

        try {

            const name = e.target.name.value;
            const password = e.target.password.value;

            const payload = { name, password }
            // setLogin(payload)

            const { data } = await axios.post('/users/login', {name, password})
            const {userLogin} = data
            if (data.length === 0) {
                console.log("no matching user");
            } else {
                console.log(userLogin._id);
                navigate("/ChatPage")
                
            }
            

            if (!data) throw new Error("error");


        } catch (error) {
            console.log('error.message');

        }





        e.target.reset()
    }

    // useEffect(()=>{
    //     console.log(login)
    // }, [login])

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }}
        >
            <button onClick={() => { navigate("/ChatPage") }}>ChatPage</button>
            <LoginForm handleLogin={handleLogin} />


        </motion.div>
    )
}

export default LoginPage