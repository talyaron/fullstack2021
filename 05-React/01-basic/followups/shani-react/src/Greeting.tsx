


// const Greeting = () => {
//   return (
//     <div>Greeting</div>
//   )
// }



interface myGreetings{
    
theGreeting:String
}
export function Greeting(props:myGreetings){
    return  <div>{props.theGreeting}</div>
       
}

export default Greeting