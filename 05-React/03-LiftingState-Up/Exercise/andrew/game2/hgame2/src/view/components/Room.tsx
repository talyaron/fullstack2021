import Box from './Box';
import Target from './Target'

interface RoomProps {
    view: any;
    position: position;
    clickFunction: any;
}
interface position {
    x: number;
    y: number;
}

const Room = (props: RoomProps) => {
    const { view, position, clickFunction } = props
    return (
        <div className="scene" onMouseMove={view} onClick={clickFunction}>
            <div className="room" style={{
                transform: `rotateX(${-position.y}deg) rotateY(${position.x}deg)`
            }}>
                <Box id={1} x={650} z={0} />
                <Box id={2} x={260} z={100} />
                <Box id={3} x={450} z={-200} />
                <Box id={4} x={50} z={-150} />
                <div className="wall front"></div>
                <div className="wall left"></div>
                <div className="wall right"></div>
                <div className="wall top"></div>
                <div className="wall bottom"></div>

            </div>
        </div>
    )
}

export default Room