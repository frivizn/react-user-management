import React, { Component } from "react";
import "../css/App.css";

import RegForm from "./RegForm";
import SearchUser from "./SearchUser";
import UserList from "./UserList";

import { findIndex, without } from "lodash";

// App Class
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      formDisplay: false,
      orderBy: "firstName",
      orderDir: "desc",
      queryText: "",
      lastIndex: 0,
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addUser = this.addUser.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchUser = this.searchUser.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  // Show/hide form
  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
    });
  }

  // Search terms in search input
  searchUser(query) {
    this.setState({ queryText: query });
  }

  // Change order in the user list
  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  // Update user list
  updateInfo(name, value, id) {
    let temporaryUsersList = this.state.users;
    let userIndex = findIndex(this.state.users, {
      userId: id,
    });
    temporaryUsersList[userIndex][name] = value;
    this.setState({
      users: temporaryUsersList,
    });
  }

  // Add user in the list of users
  addUser(user) {
    let temporaryAddUser = this.state.users;
    user.userId = this.state.lastIndex;

    // eslint-disable-next-line
    let users = [];
    users = temporaryAddUser.push(user);

    localStorage.setItem("users", JSON.stringify(temporaryAddUser));

    this.setState({
      users: temporaryAddUser,
      lastIndex: this.state.lastIndex + 1,
    });
  }

  // Delete user
  deleteUser(userToDelete) {
    let temporaryUserList = this.state.users;
    temporaryUserList = without(temporaryUserList, userToDelete);

    // eslint-disable-next-line
    let users = [];
    users = temporaryUserList;

    localStorage.setItem("users", JSON.stringify(temporaryUserList));

    this.setState({
      users: temporaryUserList,
    });
  }

  // Fetch data from data.json file
  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const users = result.map((user) => {
          user.userId = this.state.lastIndex;

          this.setState({
            lastIndex: this.state.lastIndex + 1,
          });

          return user;
        });

        this.setState({
          users: users,
        });
      });
  }

  // Render main component with filtered users
  render() {
    let order;
    let filteredUsers = this.state.users;
    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filteredUsers = filteredUsers
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter((eachItem) => {
        return (
          eachItem["firstName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["lastName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["occupation"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    // Main Component Display
    return (
      <main>
        <RegForm
          formDisplay={this.state.formDisplay}
          toggleForm={this.toggleForm}
          addUser={this.addUser}
        />
        <SearchUser
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          changeOrder={this.changeOrder}
          searchUser={this.searchUser}
        />
        <UserList
          users={filteredUsers}
          deleteUser={this.deleteUser}
          updateInfo={this.updateInfo}
        />
      </main>
    );
  }
}

export default App;
