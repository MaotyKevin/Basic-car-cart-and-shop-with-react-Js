import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { idVoit, design, prix, photo } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={'./'+photo}/>
      <div className="description">
        <p>
          <b>{design}</b>
        </p>
        <p> Prix : {prix} Ar</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(idVoit)}> - </button>
          <input
            value={cartItems[idVoit]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), idVoit)}
          />
          <button onClick={() => addToCart(idVoit)}> + </button>
        </div>
      </div>
    </div>
  );
};
