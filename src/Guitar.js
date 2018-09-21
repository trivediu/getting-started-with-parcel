import React from "react";

export const Guitar = props => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, props.make),
  //   React.createElement("h2", {}, props.model),
  // ]);
  return (
    <div>
      <h1>{props.make} </h1>
      <h2>{props.model}</h2>
    </div>
  );
};

export default Guitar;