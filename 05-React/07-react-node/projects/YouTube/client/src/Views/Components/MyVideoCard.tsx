import React from 'react'

interface MyVideoCardProps {
    video: any;
}

const MyVideoCard = (props: MyVideoCardProps) => {
    const { video } = props

    return (
        <div>

            <p>{video.name}</p>

        </div>
    )
}

export default MyVideoCard