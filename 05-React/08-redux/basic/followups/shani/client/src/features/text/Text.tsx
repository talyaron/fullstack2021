import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toCapitalCase, selectMyText, hallelujah } from "./textSlice";

//isnt this export tha same as the one under? where is it מוגדר in the slice as reducer
export const Text = () => {
  //selectMyText is state.text.value which we defined in the slice
  const myText = useAppSelector(selectMyText);

  //sends it to the slice to the function/reducer it calls in
  const dispatch = useAppDispatch();

  //why do we have usestate here?
  const [turnedText, setTurnedText] = useState(myText);

  //what does this do in line 16
  const textValue = String(myText) || "nope";
  //const textValue = String(turnedText) || "nope";

  //why does the text add on to the last state and not restart it??

  return (
    <div>
      Text
      <input
        type="text"
        placeholder="text"
        
        //this is with the useState value={turnedText} onChange={(e) => setTurnedText(e.target.value)
        onChange={(ev:any) => dispatch(toCapitalCase(ev.target.value))}
      />
      <div
        style={{
          margin: "50px",
          border: "solid 1px black",
          width: "500px",
          height: "100px",
        }}
      >
        <p>{myText}</p>
      </div>
      <button
        style={{ backgroundColor: "blueviolet" }}
        onClick={() => dispatch(toCapitalCase(textValue))}
      >
        text
      </button>
      <button onClick={() => dispatch(hallelujah())}>get a hallelujah</button>
    </div>
  );
};

export default Text;
