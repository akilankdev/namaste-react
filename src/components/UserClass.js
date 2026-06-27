import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " cons");
  }

  //Called after render() method is executed.
  componentDidMount() {
    console.log(this.props.name + " component did mount"); 
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name + "render");
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Count2: {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: some email </h3>
      </div>
    );
  }
}
export default UserClass;
