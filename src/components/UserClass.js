import React from "react";

class UserClass extends React.Component {
  constructor(props) {

    super(props);

    //this.state used to create state variables.We use object to put state variables inside it.
    this.state = {
      count: 0,
      count2:1
    };
  }

  render() {
    const {name,location} = this.props;
    const {count,count2} = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button onClick={()=> {
          //setState() method is used to update the variables value.We can also modify multiple variable's value at the same object.
          this.setState({
            count: count + 1,//'count' in the right side denotes the destructured varaible.Otherwise we put it as this.state.count + 1
            count2: count2 + 1 
          });
        }}>Increase count</button>
        <h2>Count2: {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: some email </h3>
      </div>
    );
  }
}
export default UserClass;
