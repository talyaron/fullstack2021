interface HUDProps{
    score:number;
}

const HUD = (props:HUDProps) => {
    const {score} = props;
    return (
        <div className="hud">
            <div className="crosshair">
                <div className="hor"></div>
                <div className="vert"></div>
            </div>
            <div className="gun"></div>
            <div className="muzzle"></div>
            <div className="score">Score: {score}pt</div>
        </div>
    )
}

export default HUD