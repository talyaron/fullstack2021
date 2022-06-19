import React,{useState} from 'react'
import Balance from './Balance'
import Chart from './Chart'
import data from '../../data.json'
const Home = () => {
   

  return (

    <div>
        <Balance/>
        <div className='data' >
        {data.map((object,i)=>{
            return(
                <Chart object={object}  />
            )
        })}
        </div>
        
       
    </div>
  )
}

export default Home