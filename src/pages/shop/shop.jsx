import React from "react";
import { Product } from "./product";
import "./shop.css";
import useProducts from "../../products";

export const Shop = () => {

  const products = useProducts();

  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>Boutique</h3>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product key={product.idVoit} data={product} />
        ))}
      </div>
    </div>
  );
};
