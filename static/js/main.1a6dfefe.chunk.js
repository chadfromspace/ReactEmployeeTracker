(this.webpackJsonpReactEmployeeTracker=this.webpackJsonpReactEmployeeTracker||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),l=a.n(s),o=a(3),m=a(4),i=a(7),u=a(6),c=(a(13),a(5)),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employees:c,input:""},e.handleInputChange=function(t){var a=t.target.value;e.setState({input:a})},e.handleFormSubmit=function(t){t.preventDefault(),""===e.state.input&&window.location.reload();var a=e.state.employees.filter((function(t){return t.firstName.toLowerCase().includes(e.state.input.toLowerCase())||t.lastName.toLowerCase().includes(e.state.input.toLowerCase())||t.userID.toLowerCase().includes(e.state.input.toLowerCase())||t.email.toLowerCase().includes(e.state.input.toLowerCase())||t.age.toLowerCase().includes(e.state.input.toLowerCase())}));e.setState({employees:a})},e.sortEmployeesID=function(){var t=e.state.employees.sort((function(e,t){return e.userID>t.userID?e.userID-t.userID:0}));e.setState({employees:t})},e.sortEmployeesAge=function(){var t=e.state.employees.sort((function(e,t){return e.age>t.age?e.age-t.age:0}));e.setState({employees:t})},e.sortEmployeesFirstName=function(){var t=e.state.employees.sort((function(e,t){var a=e.firstName,n=t.firstName;return a<n?-1:a>n?1:0}));e.setState({employees:t})},e.sortEmployeesLastName=function(){var t=e.state.employees.sort((function(e,t){var a=e.lastName,n=t.lastName;return a<n?-1:a>n?1:0}));e.setState({employees:t})},e.sortEmployeesEmail=function(){var t=e.state.employees.sort((function(e,t){var a=e.email,n=t.email;return a<n?-1:a>n?1:0}));e.setState({employees:t})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"navbar-brand"},"Employee Database"),r.a.createElement("form",{className:"form"},r.a.createElement("input",{onChange:this.handleInputChange,type:"text",placeholder:"Search",value:this.state.input}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Submit"))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("button",{className:"btn btn-dark",onClick:this.sortEmployeesFirstName},"First Name")),r.a.createElement("th",null,r.a.createElement("button",{className:"btn btn-dark",onClick:this.sortEmployeesLastName},"Last Name")),r.a.createElement("th",null,r.a.createElement("button",{className:"btn btn-dark",onClick:this.sortEmployeesID},"UserID")),r.a.createElement("th",null,r.a.createElement("button",{className:"btn btn-dark",onClick:this.sortEmployeesEmail},"Email")),r.a.createElement("th",null,r.a.createElement("button",{className:"btn btn-dark",onClick:this.sortEmployeesAge},"Age")))),r.a.createElement("tbody",null,this.state.employees.map((function(e){return r.a.createElement("tr",{key:e.userID},r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.userID),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.age))})))))}}]),a}(n.Component);var E=function(){return r.a.createElement(p,null)};l.a.render(r.a.createElement(E,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"firstName":"Bob","lastName":"Michaels","userID":"1","email":"bob.williams@somewebsite.com","age":"45"},{"firstName":"Mark","lastName":"Smith","userID":"2","email":"billy.smith@somewebsite.com","age":"41"},{"firstName":"John","lastName":"Franklin","userID":"3","email":"john.franklin@somewebsite.com","age":"42"},{"firstName":"Robert","lastName":"Miller","userID":"4","email":"robert.miller@somewebsite.com","age":"47"},{"firstName":"Frank","lastName":"Rogers","userID":"5","email":"frank.rogers@somewebsite.com","age":"49"}]')},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1a6dfefe.chunk.js.map