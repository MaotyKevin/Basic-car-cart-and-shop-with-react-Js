import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  /*const { idVoit, design, prix, photo } = props.data;*/
  const { idVoit, design, prix, photo } = props.data || {};

  const { addToCart, cartItems} = useContext(ShopContext);

  const cartItemCount = cartItems[idVoit];

  return (
    <div className="product">
      <img src={'./'+photo}/>
      <div className="description">
        <p>
          <b>{design}</b>
        </p>
        <p>{prix} Ar</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(idVoit)}>
        Ajouter au panier {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
