import React from "react";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faCalendarDays,
  faMap,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      head: "",
      subHead: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((data) => data.json())
      .then((user) =>
        this.setState({ user: user.results[0] }, () =>
          console.log(this.state.user)
        )
      );
    this.setState({ head: "", subHead: "" });
  }

  handlePointer = (msg) => {
    let { user } = this.state;
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const location = `${user.location.street.number} ${user.location.street.name} ${user.location.city}`;

    switch (msg) {
      case "name":
        this.setState({ head: "My name is", subHead: fullName });
        break;
      case "email":
        this.setState({ head: "My email is ", subHead: user.email });
        break;
      case "dob":
        this.setState({ head: "My age is", subHead: user.dob.age });
        break;
      case "location":
        this.setState({ head: "My location is", subHead: location });
        break;
      case "phone":
        this.setState({ head: "My number is", subHead: user.cell });
        break;
      case "password":
        this.setState({ head: "My password is", subHead: user.login.password });
        break;
      default:
        break;
    }
  };

  handleClick = () => {
    this.componentDidMount();
  };

  render() {
    if (!this.state.user) {
      return <Loader />;
    }
    return (
      <div className="card">
        <figure>
          <img
            src={this.state.user.picture.thumbnail || "logo192.png"}
            alt="user"
          />
        </figure>
        <h2>{this.state.head || "My name is"}</h2>
        <h1>{this.state.subHead || this.state.user.name.first}</h1>
        <ul>
          <li onPointerEnter={() => this.handlePointer("name")}>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li onPointerEnter={() => this.handlePointer("email")}>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li onPointerEnter={() => this.handlePointer("dob")}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </li>
          <li onPointerEnter={() => this.handlePointer("location")}>
            <FontAwesomeIcon icon={faMap} />
          </li>
          <li onPointerEnter={() => this.handlePointer("phone")}>
            <FontAwesomeIcon icon={faPhone} />
          </li>
          <li onPointerEnter={() => this.handlePointer("password")}>
            <FontAwesomeIcon icon={faLock} />
          </li>
        </ul>
        <button onClick={this.handleClick}>RANDOM USER</button>
      </div>
    );
  }
}

export default Main;
