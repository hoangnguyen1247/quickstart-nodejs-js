"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _BaseEntity2 = require("./BaseEntity");

var _dec, _dec2, _class, _class2, _descriptor, _temp;

var User = (_dec = (0, _typeorm.Entity)("user"), _dec2 = (0, _typeorm.Column)("varchar"), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2["default"])(User, _BaseEntity);

  function User() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, User);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(User)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _initializerDefineProperty2["default"])(_this, "fullName", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return User;
}(_BaseEntity2.BaseEntity), _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "fullName", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
})), _class2)) || _class);
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvYWNjb3VudC9Vc2VyLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJCYXNlRW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7SUFHYUEsSSxXQURaLHFCQUFPLE1BQVAsQyxVQUdJLHFCQUFPLFNBQVAsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFGcUJDLHVCOzs7OztXQUdYLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgTWFueVRvTWFueSwgSm9pblRhYmxlIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gXCIuL0Jhc2VFbnRpdHlcIjtcblxuQEVudGl0eShcInVzZXJcIilcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG5cbiAgICBAQ29sdW1uKFwidmFyY2hhclwiKVxuICAgIGZ1bGxOYW1lID0gXCJcIjtcbn1cbiJdfQ==