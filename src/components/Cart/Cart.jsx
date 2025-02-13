import classes from "./index.module.css"
import { useCartStore } from "../../store/cartStore"

const Cart = () => {

    // not working causing infinite rendering 
    // const { cart } = useCartStore((state) => ({
    //     cart: state.cart,
    // }))

    const cart = useCartStore(state => state.cart)
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const clearCart = useCartStore(state => state.clearCart)

    const handleRemoveFromCart = (prodID) => {
        removeFromCart(prodID)
    }

    const handleEmptyCart = () => {
        clearCart()
    }

    console.log(cart)
    return (
        <div>
            {cart?.map(prod => (
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