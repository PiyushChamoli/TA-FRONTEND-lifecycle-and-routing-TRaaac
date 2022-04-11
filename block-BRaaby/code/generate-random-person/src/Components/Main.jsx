import React from "react";
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
    };
  }

  handleClick = () => {
    fetch("https://randomuser.me/api/")
      .then((data) => data.json())
      .then((user) =>
        this.setState({ user: user.results[0] }, () =>
          console.log(this.state.user)
        )
      );
  };

  render() {
    return (
      <div className="card">
        <figure>
          <img src="logo192.png" alt="user" />
        </figure>
        <h2>My name is</h2>
        <h1>'James Allison'</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDays} />
          </li>
          <li>
            <FontAwesomeIcon icon={faMap} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLock} />
          </li>
        </ul>
        <button onClick={this.handleClick}>RANDOM USER</button>
      </div>
    );
  }
}

export default Main;
