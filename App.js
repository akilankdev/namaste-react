
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},[
  React.createElement("div",{className:"child1"},[
    React.createElement("h1",{},"H1 tag"),
    React.createElement("h1",{},"H2 tag")]
    ),
  React.createElement("div",{className:"child2"},[
    React.createElement("h1",{},"H1 tag"),
    React.createElement("h1",{},"H2 tag")]
    )
  ]);

root.render(parent);
console.log("It shows this error:react.development.js:199 Warning: Each child in a list should have a unique 'key' prop.We will look into that later in the course....");

