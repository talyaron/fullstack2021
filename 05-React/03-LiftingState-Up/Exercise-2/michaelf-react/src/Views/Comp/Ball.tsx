import Counter from './Counter'

interface counterProps {
    setCn: Function;
    cn: any;
}

const Ball = (props: counterProps) => {

    const { setCn, cn } = props;

    const balls = ["ball1", "ball2", "ball3", "ball4"]

    return (

        <div>
            { balls.map((ball, i) => {
                    return (
                        < div className="ball" key={i} onClick={() => setCn(cn + 1)} />
                    )})}
                    
            <Counter count={cn} />

        </div>


    )
}

export default Ball