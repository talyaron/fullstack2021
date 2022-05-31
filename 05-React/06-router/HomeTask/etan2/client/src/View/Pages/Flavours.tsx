import React, { useEffect, useState } from "react";
import buffer from "buffer";
import axios from "axios";
import Outlet from "react-router-dom";

interface FlavoursProps {
  layout: string;
  flavour: string;
}

function Flavours(props: FlavoursProps) {
  const { flavour, layout } = props;
  const [imgSize, setImgSize] = useState('')
  const [image, setImage] = useState<any>();
  const [imageLink, setImageLink] = useState("");
  const [imageLink1, setImageLink1] = useState<any>();
  const searchInfo = {
    main: layout,
    secondary: flavour,
  };
  const flavourSearchString = flavour.replace(/\s/g, "+");
  console.log(flavour);

  const searchTerm = {
    searchTerm: `${layout}+${flavourSearchString}+ice+cream`,
  };

  // console.log(`https://www.google.com/search?q=${searchTerm}&hl=en&tbm=isch&sclient=img`);
  async function lookupImage() {
    try {
      const { data } = await axios.post(`/iceCream/final-form`, searchTerm);
      const { rest } = data;
      const result = rest.data;
      
      // const ToString = Buffer.from(result).toString();
      // const base64ToString = Buffer.from(result, "base64").toString();
      // const imgLinkSetter = "data:image/jpeg:base64" + toString;
      // const imgLinkSetter1 = "data:image/jpeg:base64" + base64ToString;
      // setImage({ data: base64ToString });
      // setImageLink1(imgLinkSetter1);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    lookupImage();
  }, []);

//useEffect on when functions are called:

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log(h, w);
    const imgW = ((w/2));
    const imgH = ((h/2));
console.log(imgW, imgH);
setImgSize(`${imgW}x${imgH}`);

    
    setImageLink(
      `https://dummyimage.com/${imgSize}&text=${searchTerm.searchTerm}`
    );
  }, [lookupImage]);


  return (
    <div className="layout__flavour-wrapper">
      <p>{flavour}</p>
      {/* {layout} {""}
      {flavour} */}
      {/* {image ?  */}
      <img src={imageLink} /> 
       {/* : "type a"} */}
      {/* {image ? */}
      {/* <img src={`${imageLink1}`} /> */}
      {/* : "type b"} */}
      {/* {image ? (
        <img
        data-img
        src="https://i.picsum.photos/id/73/536/354.jpg?hmac=u1S3sBzV2rM1WoaId-uq7nQSuXP3BFkXF80Jcn-QiZE"
        id="11"
        />
        ) : (
          "test"
          )}
        <span>{`${image}`} type c</span> */}
    </div>
  );
}

export default Flavours;
