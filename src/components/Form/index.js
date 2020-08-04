import React, { Component } from "react";
import "./style.css";
import db from "../../db.json";

class Form extends Component {
state = {
   employees: db,
   input: ""
};

//Handle input changes
handleInputChange = event => {
    let value = event.target.value;

    this.setState({
      input: value
    });
};

//Handle form submission
handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.input===""){
        window.location.reload();
    }
    const filtered = this.state.employees.filter((a)=>{
        return a.firstName.toLowerCase().includes(this.state.input.toLowerCase())
        || a.lastName.toLowerCase().includes(this.state.input.toLowerCase())
        || a.userID.toLowerCase().includes(this.state.input.toLowerCase())
        || a.email.toLowerCase().includes(this.state.input.toLowerCase())
        || a.age.toLowerCase().includes(this.state.input.toLowerCase());
    });
    this.setState({
      employees: filtered
    });
};

//Sort employees by ID
sortEmployeesID = () => {
    const newRows = this.state.employees.sort(function(a, b) {
      if(a.userID>b.userID){
        return a.userID - b.userID;
      }
      return 0;
    });
    this.setState({
      employees: newRows,
    });
};

//Sort employees by age
sortEmployeesAge = () => {
    const newRows = this.state.employees.sort(function(a, b) {
      if(a.age>b.age){
        return a.age - b.age;
      }
      return 0;
    });
    this.setState({
      employees: newRows,
    });
};

//Sort employees by first name
sortEmployeesFirstName = () => {
  const newRows = this.state.employees.sort(function(a, b) {
    var employee1 = a.firstName;
    var employee2 = b.firstName;
    if (employee1 < employee2) {
      return -1;
    }
    if (employee1 > employee2) {
      return 1;
    }
    return 0;
  });
  this.setState({
    employees: newRows
  });
}

//Sort employees by last name
sortEmployeesLastName = () => {
  const newRows = this.state.employees.sort(function(a, b) {
    var employee1 = a.lastName;
    var employee2 = b.lastName;
    if (employee1 < employee2) {
      return -1;
    }
    if (employee1 > employee2) {
      return 1;
    }
    return 0;
  });
    this.setState({
    employees: newRows
  });
}

//Sort employees by email
sortEmployeesEmail = () => {
  const newRows = this.state.employees.sort(function(a, b) {
    var employee1 = a.email;
    var employee2 = b.email;
    if (employee1 < employee2) {
      return -1;
    }
    if (employee1 > employee2) {
      return 1;
    }
    return 0;
  });
    this.setState({
    employees: newRows
  });
}

//Render content
render() {
    return (
      <div className="container">
        <nav>
          <div className="navbar-brand">Employee Database</div>
          <form className="form">
            <input
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search"
              value={this.state.input}
            />
            <button className="searchButton" onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </nav>
         <table>
         <thead>
          <tr>
            <th><button className="btn btn-dark" onClick={this.sortEmployeesFirstName}>First Name</button></th>
            <th><button className="btn btn-dark" onClick={this.sortEmployeesLastName}>Last Name</button></th>
            <th><button className="btn btn-dark" onClick={this.sortEmployeesID}>UserID</button></th>
            <th><button className="btn btn-dark emailButton" onClick={this.sortEmployeesEmail}>Email</button></th>
            <th><button className="btn btn-dark" onClick={this.sortEmployeesAge}>Age</button></th>
          </tr>
         </thead>
         <tbody>
         {this.state.employees.map((a)=>(
         <tr key={a.userID}>
           <td>{a.firstName}</td>
           <td>{a.lastName}</td>
           <td>{a.userID}</td>
           <td>{a.email}</td>
           <td>{a.age}</td>
         </tr>
         ))}
          </tbody>
        </table>
      </div>
    );
}
}

export default Form;