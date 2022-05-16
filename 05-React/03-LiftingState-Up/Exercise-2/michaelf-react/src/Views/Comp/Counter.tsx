interface counterProps {
    count: any;
}

const Counter = (props: counterProps) => {
    const { count } = props;

    return (
  
        <h1>{count}</h1>            
   
    )
}

export default Counter