const heading = React.createElement(
  // here react.getelement is just an object which is used to create a react element
  "h1",
  { id: "heading", className: "header" },
  "Hello World"
);
//console.log(heading); // this will print the react object

//Creating root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// creating nested HTML tags
/*
*    
    <div id= 'Parent '>
        <div id= 'Child1'>
            <h1> I am h1 tag </h1>
            <h2> I am h2 tag </h2>
        </div>
    </div>
*/
const Parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "Child1" }, [
    React.createElement("h1", null, "I am h1 tag"),
    React.createElement("h2", null, "I am h2 tag"),
  ])
);
root.render(Parent);
