interface CounterProps{
    products:Array<Product>
}
interface Product {
    imgUrl:string
    title:string
    desc:string
    price:string
    id:string
  }

const counter = (props:CounterProps) => {
    const {products} = props
    const length = products.length

  return (
    <div>COUNTER: {length}</div>
  )
}

export default counter