import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState(0);
  const [seen, setSeen] = useState(new Set());

  const add = (name, price) => {
    if (seen.has(name)) {
      const newCart = [...cart];
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].name === name) {
          newCart[i].quantity += 1;
          break;
        }
      }
      setCart((cart) => newCart);
    } else {
      const newSeen = new Set([name]);
      const newObj = { name: name, price: price, quantity: 1 };
      setSeen((seen) => new Set([...seen, ...newSeen]));
      setCart((cart) => cart.concat([newObj]));
    }
    setSize((size) => size + 1);
  };

  const reset = () => {
    setCart(() => []);
    setSize(() => 0);
    setSeen(() => new Set());
  };

  return [cart, size, add, reset];
};

export default useCart;
