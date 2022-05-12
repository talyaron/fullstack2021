interface ProductProps {
    setProducts:Function
    products:Array<Product>
}
interface Product {
    imgUrl:string
    title:string
    desc:string
    price:string
    id:string
  }

  function uid() {
    return Math.random().toString(36).slice(-6);
  }
const NewProduct = (props:ProductProps) => {

    const {setProducts,products} = props
    function handleNewTask(ev: any) {
        ev.preventDefault();
        const imgUrl = ev.target.elements.imgUrl.value
        const title = ev.target.elements.title.value
        const desc = ev.target.elements.desc.value
        const price = ev.target.elements.price.value
        const productObj = {imgUrl,title,desc,price,id:uid()}
        setProducts([...products,productObj])
        
    }

    return (
        <form onSubmit={handleNewTask}>
            <input type="text" name="imgUrl" id="" placeholder="enter image URL" />
            <input type="text" name="title" id="" placeholder="enter title" />
            <input type="text" name="desc" id="" placeholder="enter description"/>
            <input type="number" name="price" id="" placeholder="enter price" />
            <input type="submit" />
        </form>
    )
}

export default NewProduct