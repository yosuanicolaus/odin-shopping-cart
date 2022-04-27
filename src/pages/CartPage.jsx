import Cart from "../components/Cart";
import uniqid from "uniqid";

function CartPage() {
  return (
    <div className="container">
      <div className="lead">Cart Page</div>
      {Cart.cart.map(({ name, price, quantity }) => {
        return (
          <div key={uniqid()}>
            <div>{name}</div>
            <div>{price}</div>
            <div>{quantity}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
