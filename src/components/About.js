import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props){
    super(props);
    // console.log("Parent cons");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name="Child 1" location="Tamil Nadu" />
      </div>
    );
  }
}

export default About;
