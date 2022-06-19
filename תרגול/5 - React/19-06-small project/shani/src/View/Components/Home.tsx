import React,{useState} from 'react'
import Balance from './Balance'
import Chart from './Chart'
import data from '../../data.json'
const Home = () => {
   

  return (

    <div>
        <Balance/>
        <div className='data' >
        <h3>Spending - Last 7 days</h3> 
        <div className='data__flex'>
        {data.map((object,i)=>{
            return(
                <Chart object={object}  />
            )
        })}
        
        </div>
       
        </div>
        
       
    </div>
  )
}

export default Home