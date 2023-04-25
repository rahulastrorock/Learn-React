import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement() is used to create a React object which is then passed to ReactDOM.render() to make it HTML element.
const heading = React.createElement("h1", { id: "heading" }, "Hello WorldkS");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
