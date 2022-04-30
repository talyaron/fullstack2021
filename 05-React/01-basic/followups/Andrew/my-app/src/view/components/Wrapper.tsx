import Card from "./Card";
import {CardInterface} from '../../App' 

interface WrapperProps{
    cards:Array<CardInterface>
}


const Wrapper = (props:WrapperProps) => {
    const { cards } = props
    return (
        <div className="wrapper">
            {/* <Card img='https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/now/now00367/r/10.jpg' title='Vitamin D' price='69.00' />
            <Card img='https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01252/r/97.jpg' title='Vitamin E' price='59.00' />
            <Card img='https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nac/nac00306/r/30.jpg' title='Vitamin D' price='49.00' /> */}
            {/* {cards.map((card,i) => { return <Card key={i} img={card.img} title={card.title} price={card.price}/>})} */}
            {cards.map((card, i) => { return <Card key={i} img={card.img} title={card.title} price={card.price} /> })}
        </div>
    )
}

export default Wrapper;
