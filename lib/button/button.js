"use strict";

var _interopRequireDefault = require("/Users/jingwei/Desktop/Ww/tenan-react-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn"
  }, "\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u6309\u94AE", text);
};

var _default = Button;
exports.default = _default;