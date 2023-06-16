import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import classes from "./ItemList.module.css";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          `https://api.escuelajs.co/api/v1/products?limit=10&offset=10`,
        );
        const response = await data.json();
        setProducts(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }

      //   console.log(response);
    };

    fetchData();
    // console.log(`https://api.escuelajs.co/api/v1/${url}`);
  }, []);
  return (
    <div className={classes.productList}>
      {error ? <h1>An error occurred: {error.message}</h1> : null}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        products.map((el) => (
          <Product key={el.id} image={el.images[0]} {...el} />
        ))
      )}
    </div>
  );
}
