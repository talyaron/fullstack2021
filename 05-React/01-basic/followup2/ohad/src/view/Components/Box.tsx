export interface BoxProps{
     img:string;
     price:string;
     text:string;
}

const Box = (props:BoxProps) => {
    const { text,img,price } = props;
    return (
        <div className="box">
          <p>{text}</p>
          <img src= {img} title={text} alt={text}/>
          <p>{price}</p>
        </div>
      );
    };
    
    export default Box;