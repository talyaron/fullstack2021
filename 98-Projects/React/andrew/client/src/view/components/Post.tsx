import axios from 'axios'
import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
const Post = (props: any) => {
    const navigate = useNavigate();
    const { post } = props
    const [user, setUser] = useState<any>(false)
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`api/users/get-post-user?userId=${post.ownerId}`)
            setUser({ ...data.user })
        })()
    }, [])

    return (
        <div className='post'>
            {
                user.pic &&
                <div className='post__author'>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(user.pic)}`} alt="" />
                    <h3 className='hover' onClick={() => { navigate(`/users/${user._id}`) }}>by: {user.username}</h3>
                </div>
            }
            <h2 className='hover' onClick={() => { navigate(`/${post._id}`) }}>{post.title}</h2>
        </div>
    )
}

export default Post