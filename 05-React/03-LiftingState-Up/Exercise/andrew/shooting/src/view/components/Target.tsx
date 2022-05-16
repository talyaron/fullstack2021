interface TargetInterface {
    registerHit: any;
    id:any;
}


const Target = (props: TargetInterface) => {
    const { registerHit, id } = props
    return (
        <div className="target" onClick={registerHit} id={id}></div>
    )
}

export default Target