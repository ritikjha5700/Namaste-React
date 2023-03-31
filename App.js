import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste from parcel! "
);
const heading2 = React.createElement(
  "h2",
  {
    id: "container",
    style: { color: "red" }, //this section under curly braces is known as props
  },
  "Hello Everyone!"
);

const container = React.createElement("div", { id: "container" }, [
  heading1, // react element passed as childrens, react elements at end of the day is an object
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); // render will modify the dom and it will override instead append
