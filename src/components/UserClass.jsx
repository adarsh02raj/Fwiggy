import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child cc");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/adarsh02raj");
    const dataJson = await data.json();
    this.setState({
      userInfo: dataJson,
    });
    console.log(dataJson);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="userClass">
        <img src={avatar_url} alt="dummyPicture" />
        <h1>Name: {name}</h1>
        <h2>Address: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
