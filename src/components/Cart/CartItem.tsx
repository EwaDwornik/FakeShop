import {PropsItem} from "../../model";


function CartItem({item, addToCart, removeFromCart}: PropsItem) {
    return (
        <div className="cartItem">
            <div>{item.title}</div>
            <div className="info">
                <p>Price: {item.price}$</p>
                <p>Total: {(item.amountInCart * item.price).toFixed(2)}$</p>
            </div>
            <div className="buttons">
                <button onClick={() => removeFromCart(item.id)}><h3>-</h3></button>
                {item.amountInCart}
                <button onClick={() => addToCart(item)}><h3>+</h3></button>
            </div>
            <div>
                <img src={item.image} alt={item.title}/>
            </div>
        </div>)
}


export default CartItem;