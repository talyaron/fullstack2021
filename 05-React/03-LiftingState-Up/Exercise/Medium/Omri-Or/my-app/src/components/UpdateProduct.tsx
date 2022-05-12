interface UpdateProductProps {
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

const UpdateProduct = (props:UpdateProductProps) => {
    const {setProducts,products} = props

    function handleUpdateTask (ev:any){
        ev.preventDefault();

    }
  return (
    <form onSubmit={handleUpdateTask}>
    <input type="text" name="newImgUrl" id="" placeholder="enter new image URL" />
    <input type="text" name="newTitle" id="" placeholder="enter new title" />
    <input type="text" name="newDesc" id="" placeholder="enter new description"/>
    <input type="number" name="newPrice" id="" placeholder="enter new price" />
    <input type="submit" />
</form>  )
}

export default UpdateProduct