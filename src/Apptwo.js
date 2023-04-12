import React, { useState } from 'react';

function ShoppingCarttwo() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleAddToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function handleRemoveFromCart(index) {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePurchase() {
    const purchasedItems = cartItems.map((item) => {
      return { name: item.name, price: item.price };
    });
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log('Purchased Items:');
    console.log(purchasedItems);
    setCartItems([]);
    setName('');
    setEmail('');
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => handleRemoveFromCart(index)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <h2>Client Form</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="button" onClick={handlePurchase}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ShoppingCarttwo;
