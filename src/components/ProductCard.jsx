function ProductCard({ name, url, price, addToCart }) {
  return (
    <div className="text-center border col-lg-6 p-4">
      <img
        src={url}
        alt={name}
        width={400}
        height={275}
        className="shadow mb-3"
      />
      <h4>{name}</h4>
      <pre>{price}</pre>
      <button
        className="btn btn-outline-primary btn-sm shadow"
        onClick={() => addToCart(name, price)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
