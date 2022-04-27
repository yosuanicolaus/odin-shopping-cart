import ProductList from "../components/Products";
import ProductCard from "../components/ProductCard";
import uniqid from "uniqid";

function Shop() {
  return (
    <div className="container">
      <div className="row">
        {ProductList.map(({ name, url, price }) => (
          <ProductCard name={name} url={url} price={price} key={uniqid()} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
