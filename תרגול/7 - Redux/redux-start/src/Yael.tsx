import { useState } from "react";

const Yael = () => {
  const handleSend = (e: any) => {
    // .....
    //axios - post / patch - id+text
  };
  const [display, setDisplay] = useState("none");
  return (
    <div>
      <div>
        <h1>EMPLOEE</h1>
        <button
          onClick={() => {
            setDisplay("block");
          }}
        >
          Send req
        </button>
      </div>

      <div style={{ display: display, position: "absolute", top: "0" }}>
        <form id="id-2312312" onSubmit={handleSend}>
          <input type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Yael;
