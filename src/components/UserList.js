import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

// UserList class
class UserList extends Component {
  render() {
    return (
      <div className="container">
        <div className="user-list-body">
          {this.props.users.map((user) => (
            <div className="single-user" key={user.userId}>
              <div className="single-user-data">
                <div className="">
                  <span
                    className=""
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      this.props.updateInfo(
                        "firstName",
                        e.target.innerText,
                        user.userId
                      )
                    }
                  >
                    <h2>
                      {user.firstName} {user.lastName}
                    </h2>
                  </span>
                </div>

                <div className="">
                  <span className="">Email: </span>
                  <span
                    className=""
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      this.props.updateInfo(
                        "email",
                        e.target.innerText,
                        user.userId
                      )
                    }
                  >
                    {user.email}
                  </span>
                </div>

                <div className="">
                  <span className="">Occupation: </span>
                  <span
                    className=""
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      this.props.updateInfo(
                        "occupation",
                        e.target.innerText,
                        user.userId
                      )
                    }
                  >
                    {user.occupation}
                  </span>
                </div>

                <div>
                  <span>Reg Date: </span>
                  <span className="">
                    <Moment
                      date={user.regDate}
                      parse="YYYY-MM-dd hh:mm"
                      format="MMM-D h:mm a"
                    />
                  </span>
                </div>
              </div>

              <div className="delete-user">
                <button
                  className="delete-user-btn"
                  onClick={() => this.props.deleteUser(user)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
