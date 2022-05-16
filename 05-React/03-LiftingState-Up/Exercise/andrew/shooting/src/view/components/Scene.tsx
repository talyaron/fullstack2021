import Menu from "./Menu"
import {targetInterface} from '../../App'
import Target from "./Target";

interface SceneProps{
    startGame:Function;
    registerHit:Function;
    targets:Array<targetInterface>;
}

const Scene = (props:SceneProps) => {
  const {startGame,registerHit, targets} = props
    return (
    <div className="scene">
        <Menu startGame={startGame}/>
        {targets.map((target, i)=>{
            return (<Target key={i} registerHit={registerHit} id={target.id}/>)
        })}
    </div>
  )
}

export default Scene