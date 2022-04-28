import React, { FC } from "react";


interface Props {
  song: {
    id: number;
    name: string;
    author: string;
  };
}

const Song: FC<Props> = ({ song }) => {
  return <li key={song.id}>{song.name}</li>;
};

export default Song;
