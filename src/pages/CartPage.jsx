import Payment from "../components/Payment";
import uniqid from "uniqid";

function CartPage({ cart }) {
  const grandTotal = getGrandTotal(cart);
  return (
    <div className="text-center">
      <div className="h2 mt-3">Your Cart</div>
      <div className="container">
        <div className="row p-3">
          <div className="col-lg-8 col text-start">Name</div>
          <div className="col">Price</div>
          <div className="col">Quantity</div>
          <div className="col">Total</div>
        </div>
        {cart.map(({ name, price, quantity }) => {
          const totalPrice = getTotalPrice(price, quantity);
          return (
            <div key={uniqid()} className="shadow mb-4 p-3 row">
              <div className="col-lg-8 col text-start">{name}</div>
              <div className="col">{price}</div>
              <div className="col">{quantity}</div>
              <div className="col">{totalPrice}</div>
            </div>
          );
        })}
        <h4 className="mt-3">Grand Total : {grandTotal}</h4>
        <Payment grandTotal={grandTotal} />
      </div>
    </div>
  );
}

function convertToNum(price) {
  price = Number(price.replace("$", "").replaceAll(",", "").replace(".00", ""));
  return price;
}

function convertToPrice(num) {
  num = num.toString();
  if (num.length > 3) {
    let rem = num.length % 3;
    let len = num.length;
    if (rem === 0) rem = 3;
    while (rem < len) {
      num = num.slice(0, rem) + "," + num.slice(rem);
      rem += 4;
      len += 1;
    }
  }
  num = "$" + num + ".00";
  return num;
}

function getTotalPrice(price, quantity) {
  const numPrice = convertToNum(price);
  const total = numPrice * quantity;
  const totalPrice = convertToPrice(total);
  return totalPrice;
}

function getGrandTotal(cart) {
  let grandTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    const price = cart[i].price;
    const quantity = cart[i].quantity;
    const total = convertToNum(price) * quantity;
    grandTotal += total;
  }
  grandTotal = convertToPrice(grandTotal);
  return grandTotal;
}

export default CartPage;
