"use strict";

console.log("App js is running"); // JSX - Javascript XML

var user = {
  name: "Testing Name",
  location: "Chandigarh"
};

function getLocation(user) {
  if (user.location) {
    return /*#__PURE__*/React.createElement("p", null, "Location is exist. ");
  }
}

var count = 0;

var addOne = function addOne() {
  count += 1;

  if (count > 2) {
    color = 'green';
  }

  render();
};

var appRoot = document.getElementById("app");
var color = 'red';

var render = function render() {
  var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hellow World"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "user name: ", user.name), /*#__PURE__*/React.createElement("li", null, "user location: ", user.location)), getLocation(user), user.location && /*#__PURE__*/React.createElement("p", null, "Testing 'AND' operator location"), /*#__PURE__*/React.createElement("p", null, "Count: ", count, " "), /*#__PURE__*/React.createElement("p", {
    style: {
      color: color
    }
  }, "Testing color "), /*#__PURE__*/React.createElement("button", {
    onClick: addOne
  }, "click here to increse count value"));
  ReactDOM.render(templateTwo, appRoot);
};

render();
