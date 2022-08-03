import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";

export function Text() {
  const handleSend = (e: any) => {
    e.preventDefault();

    const text = e.target.elements.text.value;

    console.log(text);
  };

  return (
    <div>
      <form onSubmit={handleSend}>
        <input type="text" name="" placeholder="" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
