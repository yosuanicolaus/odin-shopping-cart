import ProductList from "../components/Products";
import ProductCard from "../components/ProductCard";

function Shop() {
  console.log(ProductList);
  return (
    <div>
      <div>
        {ProductList.map(({ name, url }) => (
          <ProductCard name={name} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
