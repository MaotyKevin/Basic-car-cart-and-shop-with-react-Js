import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import useProducts from "../../products";


export const Cart = () => {

const products = useProducts();

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const cartProducts = products.filter((product) => cartItems[product.idVoit] > 0) ;

  console.log("cartItems: ", cartItems);
  console.log("totalAmount: ", totalAmount);
  console.log("cartProducts: ", cartProducts);

  return (
    <div className="cart">
      <div>
        <h1>Votre panier :</h1>
      </div>
      <div className="cart">
    {/*    {products.map((product) => {
          if (cartItems[product.idVoit] !== 0) {
            return <CartItem key={product.idVoit} data={product} />;
          }
        })}      */   }

        {cartProducts.map((product) => (<CartItem key={product.id}data={product}/>))} 
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Net a payer : ${totalAmount} Ariary </p>
          <button onClick={() => navigate("/")}> Poursuivre l'achat </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Caisse {" "}
          </button>
        </div>
      ) : (
        <h1> Panier vide</h1>
      )}
    </div>
  );
};
