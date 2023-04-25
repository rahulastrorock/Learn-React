import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => Object => HTMLElement(Rendered on the DOM)
const heading = React.createElement("h1", { id: "heading" }, "Hello World🌏"); // this is very clumsy way to create element
const root = ReactDOM.createRoot(document.getElementById("root"));

// better way to create element is using JSX
//JSX =>Babel transpiles it to React.createElement => Object => HTMLElement(Rendered on the DOM)
const Heading = (
  <h1 id="heading" className="head">
    Hello World🌏
  </h1>
);

//react functional component - it returns JSX
const HeadingComponent = () => {
  return <h1>Namaste React functional Component</h1>;
};
const HeadingComponent2 = () => <h1>Namaste React functional Component</h1>; //this is same as above

const fn = () => true;
const fn2 = () => {
  return true;
};
//both fn and fn2 are same but fn2 is more readable

const number = 10000;
//nested fucntional component
const NestedComponent = () => {
  return (
    <div>
      <HeadingComponent />
      {/*this is how we render a component inside another component, this is called
       COMPONENT COMPOSITION*/}
      {number > 1000 ? <HeadingComponent /> : <HeadingComponent2 />}
      {/*We can write any Javascript code inside curly braces in jsx*/}

      {heading}

      <h1>Nested Component</h1>
      <h2>Heading 2</h2>
    </div>
  );
};

//root.render(Heading);  // this is how we render the element on the DOM

root.render(<NestedComponent />); //this is how we render a component on the DOM
