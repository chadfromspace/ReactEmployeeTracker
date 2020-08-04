(this.webpackJsonpReactEmployeeTracker=this.webpackJsonpReactEmployeeTracker||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),s=a.n(l),o=a(3),u=a(4),i=a(6),m=a(5),c=(a(12),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[{firstName:"Bob",lastName:"Williams",userID:"2",email:"someEmail@someWebsite.com",age:"45"},{firstName:"Billy",lastName:"Bob",userID:"1",email:"someEmail2@someWebsite.com",age:"47"}],input:""},e.handleInputChange=function(t){var a=t.target.value;e.setState({input:a})},e.handleFormSubmit=function(t){t.preventDefault(),""===e.state.input&&window.location.reload();var a=e.state.employees.filter((function(t){return t.firstName.toLowerCase().includes(e.state.input.toLowerCase())||t.lastName.toLowerCase().includes(e.state.input.toLowerCase())||t.userID.toLowerCase().includes(e.state.input.toLowerCase())||t.email.toLowerCase().includes(e.state.input.toLowerCase())||t.age.toLowerCase().includes(e.state.input.toLowerCase())}));e.setState({employees:a})},e.sortEmployeesID=function(){var t=e.state.employees.sort((function(e,t){return e.userID>t.userID?e.userID-t.userID:e.userID<t.userID?t.userID-e.userID:0}));e.setState({employees:t})},e.sortEmployeesAge=function(){var t=e.state.employees.sort((function(e,t){return e.age>t.age?e.age-t.age:e.age<t.age?t.age-e.age:0}));e.setState({employees:t})},e.sortEmployeesFirstName=function(){var t=e.state.employees.sort((function(e,t){var a=e.firstName,n=t.firstName;if(a>n){if(a<n)return-1;if(a>n)return 1}if(a<n){if(a<n)return 1;if(a>n)return-1}return 0}));e.setState({employees:t})},e.sortEmployeesLastName=function(){var t=e.state.employees.sort((function(e,t){var a=e.lastName,n=t.lastName;if(a>n){if(a<n)return-1;if(a>n)return 1}if(a<n){if(a<n)return 1;if(a>n)return-1}return 0}));e.setState({employees:t})},e.sortEmployeesEmail=function(){var t=e.state.employees.sort((function(e,t){var a=e.email,n=t.email;if(a>n){if(a<n)return-1;if(a>n)return 1}if(a<n){if(a<n)return 1;if(a>n)return-1}return 0}));e.setState({employees:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,"Employee Database"),r.a.createElement("form",{className:"form"},r.a.createElement("input",{onChange:this.handleInputChange,type:"text",placeholder:"Search",value:this.state.input}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("button",{onClick:this.sortEmployeesFirstName},"First Name")),r.a.createElement("th",null,r.a.createElement("button",{onClick:this.sortEmployeesLastName},"Last Name")),r.a.createElement("th",null,r.a.createElement("button",{onClick:this.sortEmployeesID},"UserID")),r.a.createElement("th",null,r.a.createElement("button",{onClick:this.sortEmployeesEmail},"Email")),r.a.createElement("th",null,r.a.createElement("button",{onClick:this.sortEmployeesAge},"Age")))),r.a.createElement("tbody",null,this.state.employees.map((function(e){return r.a.createElement("tr",{key:e.userID},r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.userID),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.age))})))))}}]),a}(n.Component));var p=function(){return r.a.createElement(c,null)};s.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e41975df.chunk.js.map