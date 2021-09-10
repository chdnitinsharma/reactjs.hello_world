"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appRoot = document.getElementById("app");

var Counter = /*#__PURE__*/function (_React$Component) {
  _inherits(Counter, _React$Component);

  var _super = _createSuper(Counter);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "counterInt", 0);

    _this.addCounter = _this.addCounter.bind(_assertThisInitialized(_this));
    _this.descCounter = _this.descCounter.bind(_assertThisInitialized(_this));
    _this.resetCounter = _this.resetCounter.bind(_assertThisInitialized(_this));
    _this.state = {
      counter: 1
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "addCounter",
    value: function addCounter() {
      this.setState(function (preState) {
        var counter = preState.counter;

        if (counter >= 3) {
          alert("counter can not be greater than 3.");
          return {};
        }

        return {
          counter: counter + 1
        };
      });
    }
  }, {
    key: "resetCounter",
    value: function resetCounter() {
      this.setState(function () {
        return {
          counter: 0
        };
      });
    }
  }, {
    key: "descCounter",
    value: function descCounter() {
      this.setState(function (preState) {
        return {
          counter: preState.counter - 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("h1", null, "My HEADER react component: ", this.state.counter), /*#__PURE__*/React.createElement("button", {
        onClick: this.addCounter
      }, "+1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.descCounter
      }, "-1"), this.state.counter != 0 && /*#__PURE__*/React.createElement("button", {
        onClick: this.resetCounter
      }, "Reset"));
    }
  }]);

  return Counter;
}(React.Component);

var render = function render() {
  var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Counter, null));
  ReactDOM.render(templateTwo, appRoot);
};

render();
