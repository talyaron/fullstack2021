
import Box from './Box'

interface BoxesProps{
    title:string;
    price:number;
    imgUrl:string;
    adjustment:string;
    shipping:string
}

const boxes:Array<BoxesProps>=[
    {imgUrl:'https://picsum.photos/200/300' ,title:"my fav thing" ,price:100 ,adjustment:"+0.15/2%" ,shipping:'free shipping 99$ order' },
    {imgUrl:'https://picsum.photos/200/300' ,title:"my least fav thing" ,price:200 ,adjustment:"+0.15/2%" ,shipping:'free shipping 99$ order'},
    {imgUrl:'https://picsum.photos/200/300' ,title:"my house", price:10 ,adjustment:"+0.15/2%" ,shipping:'free shipping 99$ order'},
    {imgUrl:'https://picsum.photos/200/300' ,title:"my sister" ,price:1000,adjustment:"+0.15/2%" ,shipping:'free shipping 99$ order'}
]
 const Container = () => {
  return (
    <div className='container'> 
    
    {boxes.map((box,i)=>{
         return <Box  key={i} imgUrl={box.imgUrl} title={box.title} price={box.price} adjustment={box.adjustment} shipping={box.shipping}/>
     })}
    </div>
    
  )
}

export default Container



