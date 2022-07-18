import React from 'react'
import { VideoInfo } from '../../RootClient';
import SideBar from './SideBar';

//components
import VideoCard from './VideoCard'


interface VideosGridProps {
  videoList: Array<VideoInfo>;
  setOpenSideBar: Function;
  openSideBar: Boolean;
  logedUserId: String;
  handleGotoMyVideos:Function;
}

const VideosGrid = (props: VideosGridProps) => {
  const { videoList, setOpenSideBar, openSideBar, logedUserId, handleGotoMyVideos } = props;

  return (
    <div className='comp__videosGrid'>

      <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} logedUserId={logedUserId} handleGotoMyVideos={handleGotoMyVideos} />

      {videoList.map((video: VideoInfo, i: number) => {
        return (
          <VideoCard key={i} video={video} />
        )
      })}

      <div className="placeholderSideBar"></div>




    </div>
  )
}

export default VideosGrid