import { useAppSelector, useAppDispatch } from "../../app/hooks";
import axios from "axios";
import React, { useEffect } from "react";
import { selectImg, selectImgStatus, Status } from "../../features/imgSlice";
import { getImgAsync } from "../../features/imgAPI";

export const Img = () => {
  const dispatch = useAppDispatch();
  const img = useAppSelector(selectImg);
  c

  

  async function handleGetGif() {
    try {
      ///----another way to do it but not with thunk
      //   const { data } = await axios.get("https://api.imgflip.com/get_memes");
      //   let show = data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
      //     if (!data) throw new Error("missing meme");
      //     dispatch(setImg(show.url))

      dispatch(getImgAsync());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
        <div className="pageHeader"><h1 className="pageTitle">Meme Template Generator </h1>
      <img src='https://cdn130.picsart.com/336759945011211.png?type=webp&to=min&r=240' className="flower"/></div>
      
      <div>
        <button onClick={handleGetGif}>Get a meme template</button>
      </div>

     
      {imgStatus === Status.LOADING ? <div className="loader"></div> :  <div><img src={img}  className="imgMeme"/></div>}
    </div>
  );
};
