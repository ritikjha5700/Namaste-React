import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Namaste from parcel! "
// );
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "container",
//     style: { color: "red" }, //this section under curly braces is known as props
//   },
//   "Hello Everyone!"
// );

const Title =  (  // This is a react element
  <h1 id="title" key="head">
    Namaste React - Title-1
  </h1>
);

const Title2 = () => (// this is a react component. Functional component
  <h1 id="title2" key="head2">
    Namaste React - Title-2
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {Title}
      {Title2()}
      <Title2/> {/* The above line is same as this one*/}
      <h1>This is H1</h1>
      <h2> This is H2</h2>
    </div>
  );
};

/* const container = React.createElement("div", { id: "container" }, [
  heading1, // react element passed as childrens, react elements at end of the day is an object
  heading2,
]); */
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Title); // render will modify the dom and it will override instead append
root.render(<HeaderComponent />); // This is how we render a react component.
