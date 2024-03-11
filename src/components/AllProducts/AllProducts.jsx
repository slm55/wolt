import React, { useReducer } from "react";
import { initialState, productsReducer } from "../../reducers/productsReducer";
import { useEffect } from "react";
import fetchProducts from "../../api/products";
import ProductCard from "./ProductCard";
import './Products.css'

function AllProducts() {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  useEffect(() => {
    console.log(state)
  }, [state]);


  return <div className="all-products-wrapper">
    {state.loading && Array(20).fill("").map((product, id) => <ProductCard key={id}/>)}
    {state.data && state.data.map((product) => <ProductCard key={product.id} product={product} />)}
  </div>;
}

export default AllProducts;
