import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Skeleton from '@mui/material/Skeleton';
import StarIcon from '@mui/icons-material/Star';

function ProductCard({product}) {
    if (product) {
        return (
            <div className="product-card">
            <label>{product.rating.rate} <StarIcon/></label>
              <button><AddIcon /></button>
              <img src={product.image} alt="product image" />
              <h6>KZT {product.price}</h6>
              <p>{product.title}</p>
            </div>
          );
    } else {
        return (
            <div className="product-card" style={{boxShadow: "none"}}>
              <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
            </div>
          );
    }
}

export default ProductCard;
