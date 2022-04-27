function ProductCard({ name, url }) {
  return (
    <div className="text-center border col-md-6 p-4">
      <img
        src={url}
        alt={name}
        width={400}
        height={300}
        className="shadow mb-3"
      />
      <h4>{name}</h4>
    </div>
  );
}

export default ProductCard;
