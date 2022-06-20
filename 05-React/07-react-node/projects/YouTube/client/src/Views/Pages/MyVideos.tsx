import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import MyVideoCard from '../Components/MyVideoCard'

interface MyVideosProps {
    handleGetAllVideos: Function;
    userVideosArray: any;
}

const MyVideos = (prop: MyVideosProps) => {
    const { handleGetAllVideos, userVideosArray } = prop;
    const { userId } = useParams()

    useEffect(() => {
        handleGetAllVideos(userId)
    }, [])

    return (
        <div>MyVideos: {userId}


        {userVideosArray.map((video:any, i:any) => {
            return (

                <MyVideoCard key={i} video={video} />

            )
        })}

        
        
        </div>
    )
}

export default MyVideos