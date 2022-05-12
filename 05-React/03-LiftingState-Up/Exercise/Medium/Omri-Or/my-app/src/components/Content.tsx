import DeleteBTN from '../components/DeleteBTN'
import UpdateProduct from '../components/UpdateProduct'

interface ContentProps {
    products: Array<Product>
    setProducts: Function
}
interface Product {
    imgUrl: string
    title: string
    desc: string
    price: string
    id: string
}


const Content = (props: ContentProps) => {
    const { products, setProducts } = props
    return (
        <div className="product">
            {products.map((product, i) => {
                return (
                    <div key={i}>
                        <DeleteBTN Id={product.id} setProducts={setProducts} products={products} />
                        <img src={product.imgUrl} />
                        <h4 className="title">{product.title}</h4>
                        <p className="price">{product.price}$</p>
                        <p className="desc">{product.desc}</p>
                        <UpdateProduct setProducts={setProducts} products={products}/>
                    </div>
                )
            })}

        </div>
    )
}

export default Content