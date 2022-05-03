import React from "react"

interface ExampleProps{
    text:string
}
const Example = (props:ExampleProps) => {
 //we need decont
    
 const {text} = props
    return(
            <div>I'm example with your {text} </div> // if I want to use it I need {}
    )
}
export default Example;