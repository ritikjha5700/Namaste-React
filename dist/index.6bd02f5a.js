const heading1 = React.createElement("h1", {
    id: "title"
}, "Namaste Everyone!");
const heading2 = React.createElement("h2", {
    id: "container",
    style: {
        color: "red"
    }
}, "Hello Everyone!");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); // render will modify the dom and it will override instead append

//# sourceMappingURL=index.6bd02f5a.js.map
