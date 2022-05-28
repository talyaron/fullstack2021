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
  const [image, setImage] = useState<any>();
  const [imageLink, setImageLink] = useState<any>();
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
    // console.log('here');
    const { data } = await axios.post(`/iceCream/final-form`, searchTerm);
    // console.log(data);
    const { rest } = data;
    const result = rest.data;
    const base64ToString = Buffer.from(result, "base64").toString();
    const blob = new Blob([base64ToString], { type: "image/jpeg;base64" });
    console.dir(blob);
    const imgLink = "data:image/jpeg:base64" + base64ToString;


    setImage({ data: base64ToString });
    // console.dir(result[0]);
    // console.dir(result[1]);
    // console.dir(result[2]);
    // console.dir(result);
    // console.dir(result.toString());
    // console.dir(base64ToString);
    console.log(blob);
    console.log(imgLink);

    setImageLink(imgLink);
    // console.dir(document.querySelector('[data-img]'));

    // console.log(buffer, "buffer");
  }
  useEffect(() => {
    lookupImage();
  }, []);

  return (
    <div>
      <p>flavour</p>
      {layout} {""}
      {flavour}
      {image ? <img src={imageLink} /> : "a"}
      {image ? (
        <img
          data-img
          src="https://i.picsum.photos/id/73/536/354.jpg?hmac=u1S3sBzV2rM1WoaId-uq7nQSuXP3BFkXF80Jcn-QiZE"
          id="11"
        />
      ) : (
        ""
      )}
      {`${image}`}
    </div>
  );
}

export default Flavours;
