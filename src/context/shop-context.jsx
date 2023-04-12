import { createContext, useState } from "react";
import useProducts from "../products";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

  const products = useProducts();

  /*const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length +1; i++) {
      cart[i] = 0;
    }
    return cart; coucou
  };*/

  const getDefaultCart = () => {
    let cart = {};
    for (const product of products) {
      cart[product.idVoit] = 0;
    }
    return cart;
  };
  

  /*const [cartItems, setCartItems] = useState(getDefaultCart());*/
  const [cartItems, setCartItems] = useState(getDefaultCart);

  /*const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.idVoit === Number(item));
        totalAmount += cartItems[item] * itemInfo.prix;
      }
    }
    return totalAmount;
  };*/

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.idVoit === (item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.prix;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (productId) => {
    /*setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));*/
    
      // check if the product id is in the cart items object


      if (cartItems.hasOwnProperty(productId)) {
        // if it is, increment the count by 1
        updateCartItemCount(cartItems[productId] + 1, productId);
      } else {
        // if it isn't, add the product with a count of 1
        setCartItems((prevCartItems) => ({
          ...prevCartItems,
          [productId]: 1,
        }));
      }
    
  };

  /*const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };*/

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId];
      }
      return newCartItems;
    });
  };
  

  const updateCartItemCount = (newAmount, itemId) => {
    if (cartItems.hasOwnProperty(itemId)) {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    }
  };
  

  const checkout = () => {
    setCartItems({});
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
