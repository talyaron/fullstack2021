
interface MenuProps{
    startGame:any;
}

const Menu = (props:MenuProps) => {
    const {startGame} = props;
  return (
    <div className="menu">
        <h2>
        Welcome to the shooting range
        </h2>
        <button onClick={startGame}>Start game</button>

    </div>
  )
}

export default Menu