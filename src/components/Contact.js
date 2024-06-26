import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import Classcomponent from "../learningFiles.js/Classcomponent";
// import FunctionalComponent from "./../learningFiles.js/FunctionalComponent";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    //console.log("parent componentDidMount");
  }
  componentDidUpdate() {
    //console.log("parent componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("parent componentWillUnmount");
  }
  render() {
    return (
      <div>
        <h1>I am contact page</h1>
        {/* <FunctionalComponent name={"Mohit"} location={"Chandigarh"} /> */}
        <Classcomponent name={"child 1"} location={"Chandigarh"} />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h4 className="font-bold">{loggedInUser}</h4>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Contact;
