function ProductCard({ name, url, price }) {
  return (
    <div className="text-center border col-md-6 p-4">
      <img
        src={url}
        alt={name}
        width={400}
        height={275}
        className="shadow mb-3"
      />
      <h4>{name}</h4>
      <pre>{price}</pre>
      <button className="btn btn-primary btn-sm shadow">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
