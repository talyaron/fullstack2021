import React, { useState } from "react";

import // useAppSelector, useAppDispatch
"../../app/hooks";
import // decrement,
// increment,
// incrementByAmount,
// incrementIfOdd,
// selectCount,
"./counterSlice";

export function Text() {
  const handleSend = (e: any) => {};
  return (
    <div>
      <form onSubmit={handleSend}>
        <input type="text" name="" placeholder="" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
