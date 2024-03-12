import React, { useReducer } from "react";
import { initialState, productsReducer } from "../../reducers/productsReducer";
import { useEffect } from "react";
import fetchProducts from "../../api/products";
import ProductCard from "./ProductCard";
import './Products.css'
import { useParams } from "react-router-dom";

function CategoryProducts() {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const { category } = useParams();

  useEffect(() => {
    fetchProducts(dispatch, category);
  }, [category]);

  useEffect(() => {
    console.log(state)
  }, [state]);


  return <div className="all-products-wrapper">
    {state.loading && Array(20).fill("").map((product, id) => <ProductCard key={id}/>)}
    {state.data && state.data.map((product) => <ProductCard key={product.id} product={product} />)}
  </div>;
}

export default CategoryProducts;