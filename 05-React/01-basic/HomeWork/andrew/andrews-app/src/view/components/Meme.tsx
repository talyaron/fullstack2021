interface MemeProps {
    front: string, back: string
}

const Meme = (props: MemeProps) => {
    const { front, back } = props
    return (
        <div className="scene">
            <div className="wrapper">
                <img src={front} alt="" className="front" />
                <img src={back} alt="" className="back" />
            </div>
        </div>
    )
}

export default Meme;
