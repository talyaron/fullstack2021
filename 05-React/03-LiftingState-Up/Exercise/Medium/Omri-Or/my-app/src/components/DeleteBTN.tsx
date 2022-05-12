interface DeleteProps {
    Id:string
    products:Array<Product>
    setProducts:Function
}
interface Product {
    imgUrl:string
    title:string
    desc:string
    price:string
    id:string
  }

const DeleteBTN = (props:DeleteProps) => {
    function handleDelete() {
        const {Id,setProducts,products} = props
        setProducts(products.filter(product=>product.id!==Id))
        console.log(Id);
        
    }
  return (
    <div className='DeleteBTN'>
        <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default DeleteBTN