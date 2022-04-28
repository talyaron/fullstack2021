// import React, { FC } from "react";
import '../Greeting.css';
//{FC} FunctionComponent provides an implicit definition of children




// interface myGreetings{
   
//     theGreeting:{
//         id: number;
//         word:string

//     }
// }

// const Greeting: FC<myGreetings> = ({ theGreeting }) => {
//     return <li>{theGreeting.word}</li>;
//   };


interface myGreetings{
    theGreeting:string
}
export function Greeting(props:myGreetings){
    return  <div className="greeting">{props.theGreeting}</div>
       
}

export default Greeting