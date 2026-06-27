import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {

      },
    };
  }

  //Called after render() method is executed.
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akilankdev");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

  }

  render() {
    const { name, location,avatar_url,login } = this.state.userInfo;
    return (
      <div className="user-card">
        
        <img src={avatar_url} className="github-img"/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Github: {login}</h3>
      </div>
    );
  }
}
export default UserClass;
