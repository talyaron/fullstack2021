interface ball {
    handleclick:Function
}


const Ball = (props:ball) => {
    const {handleclick} = props
  return (
    <div className="ball" onClick={()=>handleclick()}>
    
    </div>
  )
}

export default Ball