import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
       employees: [{
          firstName: "Bob",
          lastName: "Williams",
          userID: "2",
          email: "someEmail@someWebsite.com",
          age: "45"
       },
       {
          firstName: "Billy",
          lastName: "Bob",
          userID: "1",
          email: "someEmail2@someWebsite.com",
          age: "47"
       }],
       input: ""
    };

  handleInputChange = event => {
    let value = event.target.value;

    this.setState({
      input: value
    });
  };

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

sortEmployeesID = () => {
const newRows = this.state.employees.sort(function(a, b) {
  if(a.userID>b.userID) return a.userID - b.userID;
  if(a.userID<b.userID) return b.userID - a.userID;
  return 0;
});
  this.setState({
  employees: newRows,
});
};

sortEmployeesAge = () => {
const newRows = this.state.employees.sort(function(a, b) {
  if(a.age>b.age) return a.age - b.age;
  if(a.age<b.age) return b.age - a.age;
  return 0;
});
  this.setState({
  employees: newRows,
});
};

sortEmployeesFirstName = () => {
  const newRows = this.state.employees.sort(function(a, b) {
    var employee1 = a.firstName;
    var employee2 = b.firstName;
    if(employee1>employee2){
        if (employee1 < employee2) {
          return -1;
        }
        if (employee1 > employee2) {
          return 1;
        }
    }
    if(employee1<employee2){
        if (employee1 < employee2) {
           return 1;
        }
        if (employee1 > employee2) {
           return -1;
        }
    }
    return 0;
  });
    this.setState({
    employees: newRows
  });
}

sortEmployeesLastName = () => {
  const newRows = this.state.employees.sort(function(a, b) {
    var employee1 = a.lastName;
    var employee2 = b.lastName;
    if(employee1>employee2){
        if (employee1 < employee2) {
          return -1;
        }
        if (employee1 > employee2) {
          return 1;
        }
    }
    if(employee1<employee2){
        if (employee1 < employee2) {
           return 1;
        }
        if (employee1 > employee2) {
           return -1;
        }
    }
    return 0;
  });
    this.setState({
    employees: newRows
  });
}

sortEmployeesEmail = () => {
  const newRows = this.state.employees.sort(function(a, b) {
    var employee1 = a.email;
    var employee2 = b.email;
    if(employee1>employee2){
        if (employee1 < employee2) {
          return -1;
        }
        if (employee1 > employee2) {
          return 1;
        }
    }
    if(employee1<employee2){
        if (employee1 < employee2) {
           return 1;
        }
        if (employee1 > employee2) {
           return -1;
        }
    }
    return 0;
  });
    this.setState({
    employees: newRows
  });
}

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <nav>
          Employee Database
        </nav>
        <form className="form">
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
            value={this.state.input}
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
         <table>
         <thead>
          <tr>
            <th><button onClick={this.sortEmployeesFirstName}>First Name</button></th>
            <th><button onClick={this.sortEmployeesLastName}>Last Name</button></th>
            <th><button onClick={this.sortEmployeesID}>UserID</button></th>
            <th><button onClick={this.sortEmployeesEmail}>Email</button></th>
            <th><button onClick={this.sortEmployeesAge}>Age</button></th>
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