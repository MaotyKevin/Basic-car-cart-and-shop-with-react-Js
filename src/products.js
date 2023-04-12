/*import { useEffect, useState } from "react";
import axios from "axios";

function useProducts() {
  
  const [products, setProduct] = useState([]);

  useEffect(() => {

  axios.get('http://localhost/voitureShopping.php')
    .then(response => {
      setProduct(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  return products;

}

export default useProducts;*/

import { useEffect, useState } from "react";
import axios from "axios";

function useProducts() {
  
  const [products, setProduct] = useState([]);

  useEffect(() => {

    axios.get('http://localhost/voitureShopping.php')
      .then(response => {
        // Make sure each product object has an idVoit property
        const productsWithId = response.data.map((product) => {
          if (!product.hasOwnProperty("idVoit")) {
            throw new Error("Product object missing idVoit property");
          }
          return product;
        });
        setProduct(productsWithId);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return products;

}

export default useProducts;