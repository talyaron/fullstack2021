import React from 'react'
import { VideoInfo } from '../../RootClient';



interface VideosCardProps {
  video: VideoInfo;
}

const VideoCard = (props: VideosCardProps) => {
  const { video } = props

  return (
    <div className='comp__videoCard'>

      <img src={video.img} alt="" />

      <div className="text">

        <h1>{video.name}</h1>
        <p>{video.user}</p>
        <p>{video.views}  •  {video.date}</p>

      </div>



    </div>
  )
}

export default VideoCard