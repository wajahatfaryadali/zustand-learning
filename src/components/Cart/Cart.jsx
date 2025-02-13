import classes from "./index.module.css"

const Cart = ({ cart, setCart }) => {

    const handleRemoveFromCart = (prodID) => {
        setCart(() => cart.filter(product => product.id !== prodID))
    }

    const handleEmptyCart = () => {
        setCart([])
    }
    return (
        <div>
            {cart.map(prod => (
                <div key={prod.id}>
                    <span className={classes.span}>{prod.name}</span>
                    <button onClick={() => handleRemoveFromCart(prod.id)} className={classes.button}>remove</button>
                    <hr className={classes.hr} />
                </div>
            ))}
            {cart.length ?
                <button onClick={handleEmptyCart} className={classes.button}>
                    empty cart
                </button>
                :
                <div />
            }
        </div>
    )
}

export default Cart