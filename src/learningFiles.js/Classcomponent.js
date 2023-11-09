import React from "react";
class Classcomponent extends React.Component {
  constructor(props) {
    super(props);
    // access props in class is using constructor function.
    // important to use super() to access props the whole class using this keyboard.
    this.state = {
      userInfo: {
        name: "default name",
        bio: "default bio",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mohit2713");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div>
        <div className="functionalcom">
          <img src={avatar_url} />
          <h1>Name:{name}</h1>
          <h2>Bio:{bio}</h2>
          <h3>Age:21</h3>
        </div>
      </div>
    );
  }
}
export default Classcomponent;
