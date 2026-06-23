import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //Must call super() method to call the constructor of base class and allow 'this' keyword to be used.Without super(),it throws error.
    super(props);
    console.log(props);
  }

  //render method is used to return JSX
  render() {
    const {name,location} = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: some email </h3>
      </div>
    );
  }
}
export default UserClass;
