import React, { Component } from "react";

// SearchUser class
class SearchUser extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-body">
          <input
            id="searchUser"
            type="search"
            className="inputField"
            placeholder="Search"
            aria-label="Search Users"
            onChange={(e) => this.props.searchUser(e.target.value)}
          />
          <div className="btn-container">
            <div className="btn-first-row">
              <button
                className={
                  "btn " + (this.props.orderBy === "firstName" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("firstName", this.props.orderDir)
                }
                href="#"
              >
                First Name
              </button>

              <button
                className={
                  "btn " + (this.props.orderBy === "lastName" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("lastName", this.props.orderDir)
                }
                href="#"
              >
                Last Name
              </button>

              <button
                className={
                  "btn " + (this.props.orderBy === "occupation" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("occupation", this.props.orderDir)
                }
                href="#"
              >
                Occupation
              </button>
            </div>

            <div className="btn-second-row">
              <button
                className={
                  "btn " + (this.props.orderBy === "regDate" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder("regDate", this.props.orderDir)
                }
                href="#"
              >
                Date
              </button>

              <button
                className={
                  "btn " + (this.props.orderDir === "asc" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder(this.props.orderBy, "asc")
                }
                href="#"
              >
                Asc
              </button>

              <button
                className={
                  "btn " + (this.props.orderDir === "desc" ? "active" : "")
                }
                onClick={(e) =>
                  this.props.changeOrder(this.props.orderBy, "desc")
                }
                href="#"
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUser;
