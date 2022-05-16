interface TargetProps {
    id: any;
}


const Target = (props: TargetProps) => {
    const { id } = props;
    return (
        <div className="target hit" id={id}>
            <div className="hit-box"></div>
        </div>
    )
}

export default Target