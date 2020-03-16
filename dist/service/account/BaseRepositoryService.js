"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepositoryService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var createError = _interopRequireWildcard(require("http-errors"));

var _BaseService2 = require("./BaseService");

var BaseRepositoryService = /*#__PURE__*/function (_BaseService) {
  (0, _inherits2["default"])(BaseRepositoryService, _BaseService);

  function BaseRepositoryService() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, BaseRepositoryService);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(BaseRepositoryService)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.findMany = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(page, size) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.search = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(filterMap, searchKey, searchFields, page, size, sortMap, resType) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4, _x5, _x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.findOneById = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x10) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.findOne = /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(filterMap, searchKey, searchFields, resType) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x11, _x12, _x13, _x14) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.insert = /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(entityDto) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x15) {
        return _ref5.apply(this, arguments);
      };
    }();

    _this.insertMany = /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(entitiesDto) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x16) {
        return _ref6.apply(this, arguments);
      };
    }();

    _this.update = /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(entityId, entity) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x17, _x18) {
        return _ref7.apply(this, arguments);
      };
    }();

    _this["delete"] = /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(entityId) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", {
                  error: createError(501)
                });

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x19) {
        return _ref8.apply(this, arguments);
      };
    }();

    return _this;
  }

  return BaseRepositoryService;
}(_BaseService2.BaseService);

exports.BaseRepositoryService = BaseRepositoryService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlL2FjY291bnQvQmFzZVJlcG9zaXRvcnlTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkJhc2VSZXBvc2l0b3J5U2VydmljZSIsImZpbmRNYW55IiwicGFnZSIsInNpemUiLCJlcnJvciIsImNyZWF0ZUVycm9yIiwic2VhcmNoIiwiZmlsdGVyTWFwIiwic2VhcmNoS2V5Iiwic2VhcmNoRmllbGRzIiwic29ydE1hcCIsInJlc1R5cGUiLCJmaW5kT25lQnlJZCIsImlkIiwiZmluZE9uZSIsImluc2VydCIsImVudGl0eUR0byIsImluc2VydE1hbnkiLCJlbnRpdGllc0R0byIsInVwZGF0ZSIsImVudGl0eUlkIiwiZW50aXR5IiwiQmFzZVNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0lBRWFBLHFCOzs7Ozs7Ozs7Ozs7Ozs7O1VBRVRDLFE7K0ZBQVcsaUJBQU1DLElBQU4sRUFBYUMsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBQ0E7QUFBRUMsa0JBQUFBLEtBQUssRUFBRUMsV0FBVyxDQUFDLEdBQUQ7QUFBcEIsaUJBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7OztVQUlYQyxNO2dHQUFTLGtCQUFNQyxTQUFOLEVBQWtCQyxTQUFsQixFQUE4QkMsWUFBOUIsRUFBNkNQLElBQTdDLEVBQW9EQyxJQUFwRCxFQUEyRE8sT0FBM0QsRUFBcUVDLE9BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFDRTtBQUFFUCxrQkFBQUEsS0FBSyxFQUFFQyxXQUFXLENBQUMsR0FBRDtBQUFwQixpQkFERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7O1VBSVRPLFc7Z0dBQWMsa0JBQU1DLEVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUNIO0FBQUVULGtCQUFBQSxLQUFLLEVBQUVDLFdBQVcsQ0FBQyxHQUFEO0FBQXBCLGlCQURHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7VUFJZFMsTztnR0FBVSxrQkFBTVAsU0FBTixFQUFpQkMsU0FBakIsRUFBNEJDLFlBQTVCLEVBQTBDRSxPQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQ0M7QUFBRVAsa0JBQUFBLEtBQUssRUFBRUMsV0FBVyxDQUFDLEdBQUQ7QUFBcEIsaUJBREQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7OztVQUlWVSxNO2dHQUFTLGtCQUFNQyxTQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFDRTtBQUFFWixrQkFBQUEsS0FBSyxFQUFFQyxXQUFXLENBQUMsR0FBRDtBQUFwQixpQkFERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7O1VBSVRZLFU7Z0dBQWEsa0JBQU1DLFdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUNGO0FBQUVkLGtCQUFBQSxLQUFLLEVBQUVDLFdBQVcsQ0FBQyxHQUFEO0FBQXBCLGlCQURFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7VUFJYmMsTTtnR0FBUyxrQkFBTUMsUUFBTixFQUFnQkMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUNFO0FBQUVqQixrQkFBQUEsS0FBSyxFQUFFQyxXQUFXLENBQUMsR0FBRDtBQUFwQixpQkFERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7OztnR0FJQSxrQkFBTWUsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQ0U7QUFBRWhCLGtCQUFBQSxLQUFLLEVBQUVDLFdBQVcsQ0FBQyxHQUFEO0FBQXBCLGlCQURGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7O0VBOUI4QmlCLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3JlYXRlRXJyb3IgZnJvbSBcImh0dHAtZXJyb3JzXCI7XG5cbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vQmFzZVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcblxuICAgIGZpbmRNYW55ID0gYXN5bmMocGFnZT8sIHNpemU/KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig1MDEpIH07XG4gICAgfTtcblxuICAgIHNlYXJjaCA9IGFzeW5jKGZpbHRlck1hcD8sIHNlYXJjaEtleT8sIHNlYXJjaEZpZWxkcz8sIHBhZ2U/LCBzaXplPywgc29ydE1hcD8sIHJlc1R5cGU/KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig1MDEpIH07XG4gICAgfTtcblxuICAgIGZpbmRPbmVCeUlkID0gYXN5bmMoaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGNyZWF0ZUVycm9yKDUwMSkgfTtcbiAgICB9O1xuXG4gICAgZmluZE9uZSA9IGFzeW5jKGZpbHRlck1hcCwgc2VhcmNoS2V5LCBzZWFyY2hGaWVsZHMsIHJlc1R5cGU/KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig1MDEpIH07XG4gICAgfTtcblxuICAgIGluc2VydCA9IGFzeW5jKGVudGl0eUR0byk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig1MDEpIH07XG4gICAgfTtcblxuICAgIGluc2VydE1hbnkgPSBhc3luYyhlbnRpdGllc0R0bykgPT4ge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogY3JlYXRlRXJyb3IoNTAxKSB9O1xuICAgIH07XG5cbiAgICB1cGRhdGUgPSBhc3luYyhlbnRpdHlJZCwgZW50aXR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig1MDEpIH07XG4gICAgfTtcblxuICAgIGRlbGV0ZSA9IGFzeW5jKGVudGl0eUlkKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig1MDEpIH07XG4gICAgfVxufVxuIl19