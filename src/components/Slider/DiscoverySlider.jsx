import "./DiscoverySlider.css";
import { useState, useEffect, useReducer } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { initialState, bannerReducer } from "../reducers/bannerReducer";
import fetchBannersData from "../../api/banner";
import DiscoverySliderItem from "./DiscoverySliderItem";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, borderRadius: "50%", background: "#009de0" }}
      onClick={onClick}
    />
  );
}

function DiscoverySlider() {
  const [state, dispatch] = useReducer(bannerReducer, initialState);

  useEffect(() => {
    fetchBannersData(dispatch);
  }, []);

  useEffect(() => {
    if (state.data) {
      setCurrentIndexes([state.data.length - 1, 0, 1, 2]);
    }
  }, [state]);

  const [currentIndexes, setCurrentIndexes] = useState([0]);

  const nextSlide = () => {
    const newCurrentIndexes = [...currentIndexes];
    let nextIndex = currentIndexes[3] + 1;
    if (nextIndex == (state.data ?? []).length) nextIndex = 0;
    newCurrentIndexes.shift();
    newCurrentIndexes.push(nextIndex);
    setCurrentIndexes(newCurrentIndexes);
  };

  const prevSlide = () => {
    const newCurrentIndexes = [...currentIndexes];
    let prevIndex = currentIndexes[0] - 1;
    if (prevIndex < 0) prevIndex = (state.data ?? []).length - 1;
    newCurrentIndexes.pop();
    newCurrentIndexes.unshift(prevIndex);
    setCurrentIndexes(newCurrentIndexes);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 10000);
  // }, [])

  const zoomInImg = (e) => {
    const img = e.target.querySelector("img");

    img.style.transform = "scale(1.1)";
  };

  const zoomOutImg = (e) => {
    const img = e.target.querySelector("img");
    img.style.transform = "scale(1)";
  };

  return (
    <>
      {state.loading && (
        <div className="loading-slider">
          <DiscoverySliderItem isPlaceholder={true} />
          <DiscoverySliderItem isPlaceholder={true} />
        </div>
      )}
      {state.data && (
        <section className="dis-slider-wrapper">
          <div className="dis-slider">
            {currentIndexes
              .map((i) => {
                return state.data[i];
              })
              .map((d) => (
                <DiscoverySliderItem
                  key={d.id}
                  zoomInImg={zoomInImg}
                  zoomOutImg={zoomOutImg}
                  data={d}
                />
              ))}
          </div>
          <button className="prev-btn" onClick={prevSlide}>
            <ArrowBackIcon />
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <ArrowForwardIcon />
          </button>
        </section>
      )}
    </>
  );
}

export default DiscoverySlider;
