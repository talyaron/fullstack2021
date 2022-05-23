interface BoxProps{
    position:any
    size:any
}

const Box = (props:BoxProps) => {
    const {position, size} = props
  return (
    <>
        <mesh position={position}>
            <boxGeometry args={size}/>
            <meshStandardMaterial color='#BADA55'/>
        </mesh>
    </>
  )
}

export default Box