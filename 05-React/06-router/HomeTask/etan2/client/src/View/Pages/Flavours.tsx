import React, { useEffect, useState } from "react";
import axios from "axios";
import Outlet from "react-router-dom";

interface FlavoursProps {
  layout: string;
  flavour: string;
}

function Flavours(props: FlavoursProps) {
  const { flavour, layout } = props;
  const [image, setImage] = useState<any>();
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
    const base64ToString = Buffer.from(result, "base64").toString()


    setImage({data: base64ToString});
    console.log(image);
    
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
      {image ? <img src={"data:image/jpeg;base64,"+image.data} />: ''}
      {/* {`${image}`} */}
    </div>
  );
}

export default Flavours;
