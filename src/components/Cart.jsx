const Cart = (() => {
  const cart = [];
  const seen = new Set();

  const add = (name, price) => {
    if (seen.has(name)) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
          cart[i].quantity += 1;
          break;
        }
      }
    } else {
      seen.add(name);
      cart.push({ name: name, price: price, quantity: 1 });
    }
  };

  return {
    cart,
    add,
  };
})();

export default Cart;
