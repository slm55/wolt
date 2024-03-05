import React from "react";

function DiscoverySliderItem({ zoomInImg, zoomOutImg, data, isPlaceholder }) {
  if (isPlaceholder) {
    return (
      <div
        className="dis-slider-item"
        style={{ backgroundColor: "lightgrey" }}
      ></div>
    );
  } else {
    return (
      <div
        className="dis-slider-item"
        onMouseOver={zoomInImg}
        onMouseOut={zoomOutImg}
      >
        <img src={data.img} alt="" />
        <div className="dis-slider-item-text">
          {data.heading && <h3>{data.heading}</h3>}
          {data.text && <p>{data.text}</p>}
        </div>
      </div>
    );
  }
}

export default DiscoverySliderItem;
