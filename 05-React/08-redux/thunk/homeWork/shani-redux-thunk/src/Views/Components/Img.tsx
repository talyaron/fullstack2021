import { useAppSelector, useAppDispatch } from "../../app/hooks";
import axios from "axios";
import React, { useEffect } from "react";
import { selectImg, selectImgStatus, Status } from "../../features/imgSlice";
import { getImgAsync } from "../../features/imgAPI";


export const Img = () => {
  const dispatch = useAppDispatch();
  const img = useAppSelector(selectImg);
  const imgStatus = useAppSelector(selectImgStatus);

  

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
      <button onClick={handleGetGif}>Get Gif</button>
      <img src={img} />
      {imgStatus === Status.LOADING ? <div className="loader"></div> : null}
    </div>
  );
};
