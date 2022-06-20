import React,{useEffect, useState} from 'react'
interface ObjectProps{
  object:{ day:string;
    amount:number;},


 
}

const Chart = (props:ObjectProps) => {
  const {object}=props;
  const [day,setDay]=useState("");
  const [activeDay,setActiveDay]=useState("hsl(186, 34%, 60%)");
  const [normaleDay,setNormalDay]=useState("hsl(10, 79%, 65%)");
  const [amount,setAmount]=useState(0)
  const todaysDay = new Date();
  const theDate= todaysDay.getDay();
  console.log(theDate)
  useEffect(()=>{
    switch(theDate){
      case 0: setDay('sun')
        break;
      case 1:setDay('mon')
        break;
      case 2:setDay('tue')
        break;
      case 3:setDay('wed')
        break;
      case 4:setDay('thu')
        break;
      case 5:setDay('fri')
        break;
      case 6:setDay('sat')
        break;
     default:console.log('no day found')
     }
  },[])
 
  return (
    <div >
     
       
          <div onMouseOut={()=>setAmount(0)} onMouseOver={()=>setAmount(1)} >
            <div style={{opacity:amount}}>{object.amount} </div>
            
            <div className='graph' onMouseEnter={()=>{day===object.day?setActiveDay("hsl(186, 73%, 78%)"):setNormalDay("hsl(10, 67%, 77%)")}} 
             onMouseLeave={()=>{day===object.day?setActiveDay("hsl(186, 34%, 60%)"):setNormalDay("hsl(10, 79%, 65%)")}
            }
              style={{height:`${object.amount/4}vh`,backgroundColor:day===object.day?activeDay:normaleDay}}>

            </div>
            <div  >{object.day}</div>
          </div>
          
        
      

    </div>
  )
}

export default Chart