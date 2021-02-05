function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var axios = _interopDefault(require('axios'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var styles = {"test":"_3ybTi"};

var findIP = function findIP() {
  return axios.get("https://api.ipify.org?format=json").then(function (response) {
    return response.data.ip;
  })["catch"](function (error) {
    return console.log(error);
  });
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var MyIpAddress = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MyIpAddress, _React$Component);

  function MyIpAddress(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      clientIp: ""
    };
    return _this;
  }

  var _proto = MyIpAddress.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    findIP().then(function (ip) {
      console.log(ip);

      _this2.setState({
        clientIp: ip
      });
    })["catch"](function (e) {
      return console.error(e);
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null, "Your IP address is : ", this.state.clientIp);
  };

  return MyIpAddress;
}(React.Component);

exports.ExampleComponent = ExampleComponent;
exports.MyIpAddress = MyIpAddress;
//# sourceMappingURL=index.js.map
