import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/global.scss';
import Form from './Form';
import Header from './Header';
import LowerHeader from './LowerHeader';
import MessageArray from './MessageArray';
import SearchBar from './SearchBar';
import DashBoard from './DashBoard';
import Profile from './Profile';
import { motion } from "framer-motion";
import axios from 'axios';




export interface Whatsapp {
  text: String;
  id: String;
}

function ChatPage() {

  const [messageArray, setMessageArray] = useState<Array<Whatsapp>>([])
  const [dark, setDark] = useState(true)

  async function handleSubmit(ev: any) {

    ev.preventDefault()

    const text = ev.target.text.value;
    const newPostDate = new Date().toLocaleDateString();
    const newPostHour = new Date().getHours();
    const newPostMinutes = new Date().getMinutes();
    const newPostSeconds = new Date().getSeconds();
    const newPostTime = `${newPostDate}, ${newPostHour}:${newPostMinutes}:${newPostSeconds}`;

    const payload = {text, id: uuidv4(), date: newPostTime}
    setMessageArray([...messageArray, payload])

    const {data} = await axios.post('/posts/add-message', payload);
    console.log(data);
    

    ev.target.reset()

  }

  const lightMode = {backgroundColor: 'transparent'}
  const darkMode = {backgroundColor: 'grey'}


  return (

      <motion.div style={dark? lightMode : darkMode} className="container" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .8 }}
  >

        <Header dark={dark}></Header>
        <LowerHeader setDark={setDark} dark={dark}></LowerHeader>
        <Profile></Profile>
        <MessageArray messageArray={messageArray} />


        <SearchBar></SearchBar>
        <DashBoard></DashBoard>
        <Form handleSubmit={handleSubmit} />



      </motion.div>
  );
}

export default ChatPage;
