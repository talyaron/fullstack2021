import React, { useState } from "react";

import Footer from "./view/components/Footer";
import Box from "./view/components/Box";
import "./styles/global.scss";
import { text } from "stream/consumers";
import Header from "./view/components/Header";
interface BoxProps {
  text: String;
  title: String;
  img: String;
}



function App() {
  const [boxes, setBoxes] = useState([
    {
      id: "fdsdfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "gfgfgf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "fdsdhfghfghfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "fdsdghfghfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "fdjhgjsdfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "fdsdghjgfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "fdghjgsdfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "fdsghjdfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
    {
      id: "fdghjghjsdfsf",
      title: "Manchester",
      text: "United",
      img: (
        <img
          src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1025x302:1027x300)/origin-imgresizer.eurosport.com/2021/09/17/3221931-65955888-2560-1440.jpg"
          alt=""
        />
      ),
    },
  ]);

  const [counter, setCounter] = useState(0)

  function updateTitle(id: string, newTitle: string) {
    try {
      const index = boxes.findIndex((box) => box.id === id);
      if (index === -1) throw new Error("Couldnt find player");
      const newBoxes = [...boxes];
      newBoxes[index].title = newTitle;

      setBoxes([...newBoxes]);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <Header text="WELCOME" />
       
      </div>
      <div className="main">
        {" "}
        {boxes.map((box, i) => {
          return (
            <Box key={i} id={box.id} img={box.img} text={box.text} title={box.title} updateTitle={updateTitle}/>
          );
        })}
      </div>
      <div className="footer">
      
        <Footer text="Bye Bye!" />
      </div>
    </div>
  );
}
export default App;
