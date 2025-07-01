const Product = ({ product, price, handler }) => {
  return (
    <div>
      <p>
        {product} - {price} zł{" "}
      </p>
      <button onClick={handler}>Dodaj do koszyka</button>
    </div>
  );
};
export default Product;
