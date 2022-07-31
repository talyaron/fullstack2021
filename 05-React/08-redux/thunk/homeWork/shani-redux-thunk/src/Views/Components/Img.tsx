import React,{useState}from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import axios from "axios";
import { selectImg } from "../../features/imgSlice";

export const Img = () => {
    //const [meme,setMeme]=useState<Array<string>>([])
    const [meme,setMeme]=useState("")
  const dispatch = useAppDispatch();
  const img = useAppSelector(selectImg);
  async function handleGetGif() {
    try {
      const { data } = await axios.get("https://api.imgflip.com/get_memes");
      const { url } = data.data.memes;

     
      for (var i = 0; i < data.data.memes.length; i++) {
        let value = data.data.memes[i];

        //console.log(value.url);

        setMeme(data.data.memes[i].url)
        
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      Img
      
      
      <button onClick={handleGetGif}>Get Gif</button>
      <img src={meme}/>
      {/* <div>
      {meme.map((m: any, i) => {
            return (
              <div key={i}  >
                <img src={m.url} />
              </div>
            );
          })}
          </div> */}
    
    </div>
  );
};
