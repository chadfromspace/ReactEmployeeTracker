import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
       employees: [{
          firstName: "Bob",
          lastName: "Williams",
          userID: "1",
          email: "someEmail@someWebsite.com",
          age: "45"
       },
       {
          firstName: "Billy",
          lastName: "Bob",
          userID: "2",
          email: "someEmail2@someWebsite.com",
          age: "47"
       }]
    };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <navbar>
          Employee Database
        </navbar>
        <form className="form">
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
         <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>UserID</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>{this.state.employees[0].firstName}</td>
            <td>{this.state.employees[0].lastName}</td>
            <td>{this.state.employees[0].userID}</td>
            <td>{this.state.employees[0].email}</td>
            <td>{this.state.employees[0].age}</td>
          </tr>
          <tr>
                      <td>Jill</td>
                      <td>Smith</td>
                      <td>1</td>
                      <td>someemail@somewebsite.com</td>
                      <td>50</td>
                    </tr>
          <tr>
                      <td>Bob</td>
                      <td>Williams</td>
                      <td>1</td>
                      <td>someemail@somewebsite.com</td>
                      <td>50</td>
                    </tr>
          <tr>
                      <td>Greg</td>
                      <td>Jenkins</td>
                      <td>1</td>
                      <td>someemail@somewebsite.com</td>
                      <td>50</td>
                    </tr>
          <tr>
                      <td>David</td>
                      <td>Smith</td>
                      <td>1</td>
                      <td>someemail@somewebsite.com</td>
                      <td>50</td>
                    </tr>
        </table>
      </div>
    );
  }
}

export default Form;