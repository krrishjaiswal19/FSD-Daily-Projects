import { useState } from "react";

function ProductApp() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Product",
      price: 10000
    };

    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={addProduct}>Add Product</button>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductApp;

