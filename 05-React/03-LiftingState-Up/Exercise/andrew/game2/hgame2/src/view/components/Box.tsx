import Target from './Target'

interface BoxProps {
    x: number;
    z: number;
    id: number;
}
const Box = (props: BoxProps) => {
    const { x, z, id } = props
    return (
        <div className="box" style={{
            transform: `translateX(${x}px) translateY(200px) translateZ(${z}px)`
        }}>
            <div className="side part1"></div>
            <div className="side part2"></div>
            <div className="side part3"></div>
            <div className="side part4"></div>
            <Target id={id} />
        </div>
    )
}

export default Box