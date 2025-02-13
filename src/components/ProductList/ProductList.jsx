import sampleProductsData from "../../utils/sampleData"

const ProductList = () => {

    const handleAddToCart = (prod) => {
        
    }

    return (
        <div>
            {sampleProductsData.map((product, index) => (
                <div key={index}>
                    <h4>{product.id} : {product.name}</h4>
                    <p>{product.description}</p>
                    <button onClick={() => handleAddToCart(product)}>
                        add to cart
                    </button>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default ProductList