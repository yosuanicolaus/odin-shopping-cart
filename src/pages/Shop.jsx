import ProductList from "../components/Products";
import ProductCard from "../components/ProductCard";

function Shop() {
  console.log(ProductList);
  return (
    <div className="container">
      <div className="row">
        {ProductList.map(({ name, url, price }) => (
          <ProductCard name={name} url={url} price={price} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
