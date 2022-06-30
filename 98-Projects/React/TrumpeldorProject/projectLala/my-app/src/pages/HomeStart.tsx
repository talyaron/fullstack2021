import React from 'react'
import MapPage from './MapPage'
import Orders from './Orders'
import Button from "@mui/material/Button";


function HomeSatrt() {
  return (
    <>
    
    <div className='Main'>
      <div className='Main-Flex'>
        <div className='Main-Flex-Svgf'></div>
        <div className='Main-Flex-Title'>Trumpeldor</div>
        <div className='Main-Flex-SmallTitle'>  20 טרומפלדור</div>
        <Button
        variant="outlined"
        className="Main-Flex-BtnOrders"
        style={{
          borderRadius: 35,
          backgroundColor: "yellow",
          padding: "18px 36px",
          fontSize: "18px",
        }}
      >
        להזמנה
      </Button>
        <div className='Main-Flex-Adress'>נופית חרמון</div>



      </div>
    </div>
       <Orders/>
       <MapPage/>
       </>
    
    
  )
}

export default HomeSatrt