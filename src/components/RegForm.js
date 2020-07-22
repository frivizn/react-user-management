import React, { Component } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// RegForm class
class RegForm extends Component {
  // Input state values
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      regDate: "",
      regTime: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  // HandleAdd method
  handleAdd(e) {
    e.preventDefault();
    // Temporary variable for input values
    let temporaryAddUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      occupation: this.state.occupation,
      regDate: this.state.regDate + " " + this.state.regTime,
    };

    // Prop addUser method to App.js
    this.props.addUser(temporaryAddUser);

    // SetState to empty form inputs
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      regDate: "",
      regTime: "",
    });

    // ToggleForm to hide the form
    this.props.toggleForm();
  }

  // Get values from a form inputs
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  // Render component
  render() {
    return (
      <div className="container">
        <div className={this.props.formDisplay ? "" : "add-user"}>
          <div onClick={this.props.toggleForm}>
            <h1>
              <span>
                {this.props.formDisplay ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              Add User
            </h1>
          </div>

          <div className={this.props.formDisplay ? "form-display" : ""}>
            <form
              id="regForm"
              className="form-body"
              noValidate
              onSubmit={this.handleAdd}
            >
              <div className="inputField">
                <label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="inputField">
                <label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="inputField">
                <label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="inputField">
                <label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Your occupation"
                    value={this.state.occupation}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="inputField">
                <label>
                  <input
                    type="date"
                    name="regDate"
                    placeholder="Reg. date"
                    value={this.state.regDate}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="inputField">
                <label>
                  <input
                    type="time"
                    name="regTime"
                    placeholder="Reg. time"
                    value={this.state.regTime}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="inputField">
                <button type="submit" value="Submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegForm;
