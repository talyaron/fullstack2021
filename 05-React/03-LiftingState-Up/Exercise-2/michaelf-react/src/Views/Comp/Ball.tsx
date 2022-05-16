import Counter from './Counter'

interface counterProps {
    setCount: Function;
    counter: any;
}

const Ball = (props: counterProps) => {

    const { setCount, counter } = props;

    const balls = ["ball1", "ball2", "ball3", "ball4"]

    return (

        <div>
            { balls.map((ball, i) => {
                    return (
                        < div className="ball" key={i} onClick={() => setCount(counter + 1)} />
                    )})}

            <Counter count={counter} />

        </div>


    )
}

export default Ball