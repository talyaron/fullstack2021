import React from "react";
import logo from "./logo.svg";
//import './App.css';
import Box from "./view/components/box";
import "./view/styles/global.scss";
import Header from "./view/components/header";
import Footer from "./view/components/footer";

interface BoxProps {
  img: string;
  title: string;
}
interface HeaderProps {
  title: string;
  img: string;
}
interface FooterProps {
  text: string;
  icon: string;
  img: string;
}
const Footers: Array<FooterProps> = [
  {
    text: "facebook",
    img: "https://brandlogos.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png",
    icon: "https://www.facebook.com/",
  },
  {
    text: "instagram",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    icon: "https://www.instagram.com/",
  },
  {
    text: "twitter",
    img: "https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png",
    icon: "https://twitter.com/",
  },
  {
    text: "youtube",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
    icon: "https://www.youtube.com/",
  },
];
const Headers: Array<HeaderProps> = [
  {
    title: "coding is fun",
    img: "https://info.thinkfun.com/hubfs/coding%201.jpg",
  },
];
const Boxes: Array<BoxProps> = [
  {
    img: "https://miro.medium.com/max/1096/1*eYw0R0hVszGqyWwUY7k1bg.png",
    title: "when you have a bad code",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2020/04/Strip-Covid19-4-650-finalenglish.jpg",
    title: "Coder Philosophy: Being professional",
  },
  {
    img: "https://miro.medium.com/max/1400/1*k-8ZUYOMPmancDDomYXITg.jpeg",
    title: "spelling wrong",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2020/05/Strip-La-boss-et-le-télétravail-650-finalenglish.jpg",
    title: "5 stages of working from home",
  },
  {
    img: "https://i.pinimg.com/736x/17/12/45/17124565fa09322c38c59d87a03cc2a0.jpg",
    title: "programming or hardware",
  },
  {
    img: "https://assets.hongkiat.com/uploads/programming-jokes/joke-html5.jpg",
    title: "HTML or HTML5",
  },
  {
    img: "https://miro.medium.com/max/1028/1*4IlWvFIM5FeUzcJEcTJk2g.png",
    title: "when you have problem to solve",
  },
  {
    img: "https://pbs.twimg.com/media/CjieTI4WYAASqX2.jpg",
    title: "working all night",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2021/11/Strip-Pas-de-documentation-650-finalenglish.jpg",
    title: "No documentation",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2021/04/Strip-Les-erreurs-qui-en-cachent-dautres-650-finalenglish.jpg",
    title: "The secret of a successful code review",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2020/09/Strip-Réduis-tes-ko-650-finalenglish.jpg",
    title: "not the same",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2020/10/Strip-PM-et-le-Nocode650-finalenglish.jpg",
    title: "The ‘no-code’ dream…",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2020/05/Strip-Bizutage-codeur-650-fianlenglish.jpg",
    title: "Coder hazing",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2020/02/Strip-Le-code-de-la-maturité-650-finalenglsih.jpg",
    title: "Coding maturity",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2020/01/Strip-Paywall-650-finalenglish.jpg",
    title: "Other people’s code",
  },
  {
    img: "https://www.commitstrip.com/wp-content/uploads/2019/09/Strip-Un-beau-Json-650-finalenglish.jpg",
    title: "What’s going on with all these divs?",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerCon">
          {Headers.map((box, i) => {
            return <Header key={i} img={box.img} title={box.title} />;
          })}
        </div>
        <div className="contaner">
          {Boxes.map((box, i) => {
            return <Box key={i} img={box.img} title={box.title} />;
          })}
        </div>
        <div className="footerCon">
          {Footers.map((box, i) => {
            return <Footer key={i} img={box.img} text={box.text} icon={box.icon}/>;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
