import React, { useReducer } from "react";

function Categories() {
  const [state, dispatch] = useReducer();

  const handleClick = (e) => {};

  return (
    <div>
      {state.loading && 
        <div className="loading">
          {[{}, {}, {}, {}, {}, {}].map((obj) => <div className="loading-item"></div>)}
        </div>
      }
      {}
    </div>
  );
}

export default Categories;
