import React from 'react'
import ListAllUsers from './ListAllUsers'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios";

const OneUser = () => {
    const { id } = useParams()

    const [userList, setUserList]: any = useState([])

    useEffect(() => {
        (async () => {
            const { data }: any = await axios.post(`/api/getUser`, { id });
            const oneUser = data.oneUser
            setUserList(oneUser)
            console.log(oneUser)
        })()
    }, [])

    return (
        <div className='userPage'>
            <div className='userPageTitle'>
                <div className='UserTitle'>
                    <div><h2>User:</h2>{userList.name} </div>
                    <div><h2>Username:</h2>{userList.username} </div>
                </div>
                <div><img src={userList.image} alt="" /></div>
            </div>
            <div className='textBlog'>
                <div className='titleBox'><h2>{userList.title}</h2></div>
                <div className='allBlogText'>{userList.text}</div>
            </div>

        </div>
    )
}

export default OneUser