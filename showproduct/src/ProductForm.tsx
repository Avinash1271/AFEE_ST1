import React, { useState, useEffect } from "react";

interface Product {
  title: string;
}

interface CartItem {
  title: string;
  price: number;
}

const ProductForm: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Read the products JSON file
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleAddToCart = () => {
    if (selectedProduct && price > 0) {
      const newCartItem: CartItem = {
        title: selectedProduct,
        price: price,
      };
      setCart([...cart, newCartItem]);
      setSelectedProduct("");
      setPrice(0);
    }
  };

  return (
    <div>
      <h2>Add Products to Cart</h2>
      <div>
        <label htmlFor="product">Product:</label>
        <select id="product" value={selectedProduct} onChange={handleProductChange}>
          <option value="">Select a product</option>
          {products.map((product, index) => (
            <option key={index} value={product.title}>
              {product.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          min="0"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;
