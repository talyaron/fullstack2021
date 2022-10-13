import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { changetext } from "./TextSlice";
export function Text() {
  const dispatch = useAppDispatch();
  const [text, settext] = useState("bla bla");

  return (
    <div>
      <div>{text}</div>
      <input
        type="text"
        name="text"
        onChange={(e) => settext(e.target.value)}
      />
    </div>
  );
}

export default Text;
