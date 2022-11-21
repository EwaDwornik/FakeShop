import CartItem from "./CartItem";
import {Product, PropsCart} from "../../model";


function Cart ({cartItems, addToCart, removeFromCart}: PropsCart) {
    const total = (items: Product[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

    return (
        <div className="shoppingCart">
            Your shopping cart
            {cartItems.length === 0 ? <p>No items in cart</p> : null }
            {cartItems.map(item => (
                <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            ))}
            <p>total: {total(cartItems).toFixed(2)}</p>
        </div>
    )
}

export default Cart;