import ProductList from "../components/Products";
import ProductCard from "../components/ProductCard";

function Shop() {
  console.log(ProductList);
  return (
    <div className="container">
      <div className="row">
        {ProductList.map(({ name, url }) => (
          <ProductCard name={name} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
