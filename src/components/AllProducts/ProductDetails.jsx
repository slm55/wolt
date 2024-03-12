import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api/products";
import { initialState, productsReducer } from "../../reducers/productsReducer";
import ProductCard from "./ProductCard";

function ProductDetails() {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(dispatch, id);
  }, [id]);

  return (
    <div className="product-details-wrapper">
      {state.loading && <ProductCard key={id} />}
      {state.data && <ProductCard key={state.data.id} product={state.data} />}
    </div>
  );
}

export default ProductDetails;
