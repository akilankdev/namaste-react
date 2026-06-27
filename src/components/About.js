import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent cons");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name="Child 1" location="Tamil Nadu" />
        <UserClass name="Child 2" location="Tamil Nadu" />
      </div>
    );
  }
}

export default About;

/*
RENDER PHASE BEGINS...
-parent constructor
-parent render
  -child1 cons
  -child1 render

  -child2 cons
  -child2 render

COMMIT PHASE BEGINS...
-child1 componentDidMount
-child2 componentDidMount
-Parent componentDidMount
  
*/