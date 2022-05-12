import Gag from "./Gag";
import { useRef } from "react";
import { useGifController } from "gif-tsx";
interface GagProps {
  title: string;
  imgSrc: string;
  description: string;
}


const gags: Array<GagProps> = [
  { title: "Elon musk being funny, first comment is even better.", imgSrc: "https://i.ibb.co/y80SjYw/Whats-App-Image-2022-04-29-at-12-47-41-AM.jpg", description: "Elon musks tweet" },
  {
    title: "These billboards speak for themselves",
    imgSrc: "https://i.ibb.co/bb7mLyM/IMG-4371.jpg",
    description: "Billboards looking for workers",
  },
  { title: "Code debugging", imgSrc: "https://c.tenor.com/RQ4eycoIn5sAAAAC/debugging-we-bare-bears.gif", description: "stackoverflow meme" },
  { title: "Sometimes people just relate.", imgSrc: "https://i.ibb.co/BBJ3vD7/same-question.webp", description: "stackoverflow meme" },
  { title: "When react doesn't refresh automatically", imgSrc: "https://i.ibb.co/jgWBVxv/blind-in-coding.jpg", description: "Blindfolded woman" },
  { title: "React components make everything easier", imgSrc: "https://i.ibb.co/GF8LtLK/getacomponent.jpg", description: "Opra handing out components to everybody!" },
];

function Grid() {
  return (
    <div className="grid">
      {gags.map((gag, i) => {
        return (
          <Gag
            key={i}
            title={gag.title}
            description={gag.description}
            imgSrc={gag.imgSrc}
          />
        );
      })}
    </div>
  );
}

export default Grid;
