"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var createError = _interopRequireWildcard(require("http-errors"));

var _config = require("../../config");

var _User = require("../../entity/account/User");

var _BaseRepositoryService = require("./BaseRepositoryService");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UserService = /*#__PURE__*/function (_BaseRepositoryServic) {
  (0, _inherits2["default"])(UserService, _BaseRepositoryServic);

  function UserService(userRepository) {
    var _this;

    (0, _classCallCheck2["default"])(this, UserService);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(UserService).call(this));
    _this._userRepository = void 0;

    _this.findMany = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(page, size) {
        var usersInDb;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this._userRepository.findMany(page, size);

              case 3:
                usersInDb = _context.sent;
                return _context.abrupt("return", {
                  status: 200,
                  data: {
                    users: usersInDb[0],
                    totalItems: usersInDb[1]
                  }
                });

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", {
                  error: createError(500, _context.t0)
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.search = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(filterMap, searchKey, searchFields, page, size, sortMap, resType) {
        var usersInDb, userIds, userRolesByIdsInDb, userRolesByIdsGroup;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this._userRepository.search(filterMap, searchKey, searchFields, page, size, sortMap, resType);

              case 3:
                usersInDb = _context2.sent;

                if (!(Array.isArray(usersInDb[0]) && usersInDb[0].length > 0)) {
                  _context2.next = 12;
                  break;
                }

                userIds = Array.isArray(usersInDb[0]) ? usersInDb[0].map(function (item) {
                  return item.id;
                }) : [];
                _context2.next = 8;
                return _this._userRoleRepository.search({
                  userIds: userIds
                });

              case 8:
                userRolesByIdsInDb = _context2.sent;
                userRolesByIdsGroup = {};

                if (Array.isArray(userRolesByIdsInDb[0]) && userRolesByIdsInDb[0].length > 0) {
                  userRolesByIdsGroup = groupBy(userRolesByIdsInDb[0], "userId");
                }

                return _context2.abrupt("return", {
                  data: {
                    code: 200,
                    users: usersInDb[0].map(function (item) {
                      return _objectSpread({}, item, {
                        roles: userRolesByIdsGroup[item.id] || []
                      });
                    }),
                    totalItems: usersInDb[1]
                  }
                });

              case 12:
                return _context2.abrupt("return", {
                  data: {
                    code: 200,
                    users: [],
                    totalItems: 0
                  }
                });

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", {
                  error: createError(500, _context2.t0)
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 15]]);
      }));

      return function (_x3, _x4, _x5, _x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.findOneById = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var userInDb, userRolesByIdsInDb, userRolesByIdsGroup;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this._userRepository.findOne({
                  id: id
                });

              case 3:
                userInDb = _context3.sent;

                if (userInDb) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", {
                  error: createError(404)
                });

              case 6:
                _context3.next = 8;
                return _this._userRoleRepository.search({
                  userIds: [userInDb.id]
                });

              case 8:
                userRolesByIdsInDb = _context3.sent;
                userRolesByIdsGroup = {};

                if (Array.isArray(userRolesByIdsInDb[0]) && userRolesByIdsInDb[0].length > 0) {
                  userRolesByIdsGroup = groupBy(userRolesByIdsInDb[0], "userId");
                }

                userInDb.roles = userRolesByIdsGroup[userInDb.id] || [];
                return _context3.abrupt("return", {
                  data: {
                    code: 200,
                    user: userInDb
                  }
                });

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", {
                  error: createError(500, _context3.t0)
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }));

      return function (_x10) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.findOne = /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(filterMap, searchKey, searchFields, resType) {
        var userInDb, userRolesByIdsInDb, userRolesByIdsGroup;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this._userRepository.findOne(filterMap, searchKey, searchFields, resType);

              case 3:
                userInDb = _context4.sent;

                if (userInDb) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", {
                  error: createError(404)
                });

              case 6:
                _context4.next = 8;
                return _this._userRoleRepository.search({
                  userIds: [userInDb.id]
                });

              case 8:
                userRolesByIdsInDb = _context4.sent;
                userRolesByIdsGroup = {};

                if (Array.isArray(userRolesByIdsInDb[0]) && userRolesByIdsInDb[0].length > 0) {
                  userRolesByIdsGroup = groupBy(userRolesByIdsInDb[0], "userId");
                }

                userInDb.roles = userRolesByIdsGroup[userInDb.id] || [];
                return _context4.abrupt("return", {
                  data: {
                    code: 200,
                    user: userInDb
                  }
                });

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", {
                  error: createError(500, _context4.t0)
                });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 15]]);
      }));

      return function (_x11, _x12, _x13, _x14) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.insert = /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
        var userInDb;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this._userRepository.insert(new _User.User(_objectSpread({}, user)));

              case 3:
                userInDb = _context5.sent;
                return _context5.abrupt("return", {
                  data: {
                    code: 200,
                    user: userInDb
                  }
                });

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", {
                  error: createError(500, _context5.t0)
                });

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      return function (_x15) {
        return _ref5.apply(this, arguments);
      };
    }();

    _this.update = /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, user) {
        var userInDb;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this._userRepository.findOneById(id);

              case 3:
                userInDb = _context6.sent;

                if (userInDb) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", {
                  error: createError(404)
                });

              case 6:
                _context6.next = 8;
                return _this._userRepository.update(userInDb);

              case 8:
                return _context6.abrupt("return", {
                  data: {
                    code: 200
                  }
                });

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", {
                  error: createError(500, _context6.t0)
                });

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 11]]);
      }));

      return function (_x16, _x17) {
        return _ref6.apply(this, arguments);
      };
    }();

    _this["delete"] = /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
        var userInDb;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this._userRepository.findOneById(id);

              case 3:
                userInDb = _context7.sent;

                if (userInDb) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return", {
                  error: createError(404)
                });

              case 6:
                _context7.next = 8;
                return _this._userRepository["delete"](userInDb);

              case 8:
                return _context7.abrupt("return", {
                  data: {
                    code: 200
                  }
                });

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](0);
                return _context7.abrupt("return", {
                  error: createError(500, _context7.t0)
                });

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 11]]);
      }));

      return function (_x18) {
        return _ref7.apply(this, arguments);
      };
    }();

    _this._userRepository = userRepository;
    return _this;
  }
  /**
   */


  return UserService;
}(_BaseRepositoryService.BaseRepositoryService);

exports.UserService = UserService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlL2FjY291bnQvVXNlclNlcnZpY2UuanMiXSwibmFtZXMiOlsiVXNlclNlcnZpY2UiLCJ1c2VyUmVwb3NpdG9yeSIsIl91c2VyUmVwb3NpdG9yeSIsImZpbmRNYW55IiwicGFnZSIsInNpemUiLCJ1c2Vyc0luRGIiLCJzdGF0dXMiLCJkYXRhIiwidXNlcnMiLCJ0b3RhbEl0ZW1zIiwiZXJyb3IiLCJjcmVhdGVFcnJvciIsInNlYXJjaCIsImZpbHRlck1hcCIsInNlYXJjaEtleSIsInNlYXJjaEZpZWxkcyIsInNvcnRNYXAiLCJyZXNUeXBlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwidXNlcklkcyIsIm1hcCIsIml0ZW0iLCJpZCIsIl91c2VyUm9sZVJlcG9zaXRvcnkiLCJ1c2VyUm9sZXNCeUlkc0luRGIiLCJ1c2VyUm9sZXNCeUlkc0dyb3VwIiwiZ3JvdXBCeSIsImNvZGUiLCJyb2xlcyIsImZpbmRPbmVCeUlkIiwiZmluZE9uZSIsInVzZXJJbkRiIiwidXNlciIsImluc2VydCIsIlVzZXIiLCJ1cGRhdGUiLCJCYXNlUmVwb3NpdG9yeVNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7O0lBRWFBLFc7OztBQUlULHVCQUFZQyxjQUFaLEVBQTRCO0FBQUE7O0FBQUE7QUFDeEI7QUFEd0IsVUFGNUJDLGVBRTRCOztBQUFBLFVBUTVCQyxRQVI0QjtBQUFBLCtGQVFqQixpQkFBTUMsSUFBTixFQUFZQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFcUIsTUFBS0gsZUFBTCxDQUFxQkMsUUFBckIsQ0FBOEJDLElBQTlCLEVBQW9DQyxJQUFwQyxDQUZyQjs7QUFBQTtBQUVHQyxnQkFBQUEsU0FGSDtBQUFBLGlEQUlJO0FBQ0hDLGtCQUFBQSxNQUFNLEVBQUUsR0FETDtBQUVIQyxrQkFBQUEsSUFB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QXVCRCxjQUF2QjtBQUh3QjtBQUkzQjtBQUVEOzs7OztFQVY2QnNDLDRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3JlYXRlRXJyb3IgZnJvbSBcImh0dHAtZXJyb3JzXCI7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9lbnRpdHkvYWNjb3VudC9Vc2VyXCI7XG5pbXBvcnQgeyBCYXNlUmVwb3NpdG9yeVNlcnZpY2UgfSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlTZXJ2aWNlIHtcblxuICAgIF91c2VyUmVwb3NpdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBmaW5kTWFueSA9IGFzeW5jKHBhZ2UsIHNpemUpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlcnNJbkRiID0gYXdhaXQgdGhpcy5fdXNlclJlcG9zaXRvcnkuZmluZE1hbnkocGFnZSwgc2l6ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1c2VyczogdXNlcnNJbkRiWzBdLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zOiB1c2Vyc0luRGJbMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogY3JlYXRlRXJyb3IoNTAwLCBlcnJvcikgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBzZWFyY2ggPSBhc3luYyhmaWx0ZXJNYXAsIHNlYXJjaEtleSwgc2VhcmNoRmllbGRzLCBwYWdlLCBzaXplLCBzb3J0TWFwLCByZXNUeXBlKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzSW5EYiA9IGF3YWl0IHRoaXMuX3VzZXJSZXBvc2l0b3J5LnNlYXJjaChcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXAsXG4gICAgICAgICAgICAgICAgc2VhcmNoS2V5LFxuICAgICAgICAgICAgICAgIHNlYXJjaEZpZWxkcyxcbiAgICAgICAgICAgICAgICBwYWdlLCBcbiAgICAgICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgICAgIHNvcnRNYXAsXG4gICAgICAgICAgICAgICAgcmVzVHlwZSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJzSW5EYlswXSkgJiYgdXNlcnNJbkRiWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWRzID0gQXJyYXkuaXNBcnJheSh1c2Vyc0luRGJbMF0pID8gdXNlcnNJbkRiWzBdLm1hcChpdGVtID0+IGl0ZW0uaWQpIDogW107XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlclJvbGVzQnlJZHNJbkRiID0gYXdhaXQgdGhpcy5fdXNlclJvbGVSZXBvc2l0b3J5LnNlYXJjaCh7IHVzZXJJZHM6IHVzZXJJZHMgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdXNlclJvbGVzQnlJZHNHcm91cCA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJSb2xlc0J5SWRzSW5EYlswXSkgJiYgdXNlclJvbGVzQnlJZHNJbkRiWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlclJvbGVzQnlJZHNHcm91cCA9IGdyb3VwQnkodXNlclJvbGVzQnlJZHNJbkRiWzBdLCBcInVzZXJJZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyczogdXNlcnNJbkRiWzBdLm1hcChpdGVtID0+ICh7IC4uLml0ZW0sIHJvbGVzOiB1c2VyUm9sZXNCeUlkc0dyb3VwW2l0ZW0uaWRdIHx8IFtdIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM6IHVzZXJzSW5EYlsxXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgICAgICAgICB1c2VyczogW10sXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogY3JlYXRlRXJyb3IoNTAwLCBlcnJvcikgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBmaW5kT25lQnlJZCA9IGFzeW5jKGlkKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbkRiID0gYXdhaXQgdGhpcy5fdXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IGlkOiBpZCB9KTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySW5EYikgcmV0dXJuIHsgZXJyb3I6IGNyZWF0ZUVycm9yKDQwNCkgfTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclJvbGVzQnlJZHNJbkRiID0gYXdhaXQgdGhpcy5fdXNlclJvbGVSZXBvc2l0b3J5LnNlYXJjaCh7IHVzZXJJZHM6IFt1c2VySW5EYi5pZF0gfSk7XG5cbiAgICAgICAgICAgIGxldCB1c2VyUm9sZXNCeUlkc0dyb3VwID0ge307XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyUm9sZXNCeUlkc0luRGJbMF0pICYmIHVzZXJSb2xlc0J5SWRzSW5EYlswXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvbGVzQnlJZHNHcm91cCA9IGdyb3VwQnkodXNlclJvbGVzQnlJZHNJbkRiWzBdLCBcInVzZXJJZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlckluRGIucm9sZXMgPSB1c2VyUm9sZXNCeUlkc0dyb3VwW3VzZXJJbkRiLmlkXSB8fCBbXTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlckluRGIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogY3JlYXRlRXJyb3IoNTAwLCBlcnJvcikgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBmaW5kT25lID0gYXN5bmMoZmlsdGVyTWFwLCBzZWFyY2hLZXksIHNlYXJjaEZpZWxkcywgcmVzVHlwZSk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5EYiA9IGF3YWl0IHRoaXMuX3VzZXJSZXBvc2l0b3J5LmZpbmRPbmUoZmlsdGVyTWFwLCBzZWFyY2hLZXksIHNlYXJjaEZpZWxkcywgcmVzVHlwZSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlckluRGIpIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig0MDQpIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb2xlc0J5SWRzSW5EYiA9IGF3YWl0IHRoaXMuX3VzZXJSb2xlUmVwb3NpdG9yeS5zZWFyY2goeyB1c2VySWRzOiBbdXNlckluRGIuaWRdIH0pO1xuXG4gICAgICAgICAgICBsZXQgdXNlclJvbGVzQnlJZHNHcm91cCA9IHt9O1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclJvbGVzQnlJZHNJbkRiWzBdKSAmJiB1c2VyUm9sZXNCeUlkc0luRGJbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHVzZXJSb2xlc0J5SWRzR3JvdXAgPSBncm91cEJ5KHVzZXJSb2xlc0J5SWRzSW5EYlswXSwgXCJ1c2VySWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJJbkRiLnJvbGVzID0gdXNlclJvbGVzQnlJZHNHcm91cFt1c2VySW5EYi5pZF0gfHwgW107XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJJbkRiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGNyZWF0ZUVycm9yKDUwMCwgZXJyb3IpIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICovXG4gICAgaW5zZXJ0ID0gYXN5bmModXNlcik6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBjb25zdCBoYXNoID0gZ2VuZXJhdGUoOCk7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5EYiA9IGF3YWl0IHRoaXMuX3VzZXJSZXBvc2l0b3J5Lmluc2VydChuZXcgVXNlcih7XG4gICAgICAgICAgICAgICAgLi4udXNlcixcbiAgICAgICAgICAgICAgICAvLyBwYXNzd29yZDogYmNyeXB0anMuaGFzaFN5bmModXNlci5wYXNzd29yZCB8fCBoYXNoLCAxMCksXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJJbkRiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gdGhpcy5fZGVidWdMb2dTZXJ2aWNlLmVycm9yKGVycm9yLnN0YWNrKTtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig1MDAsIGVycm9yKSB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqL1xuICAgIHVwZGF0ZSA9IGFzeW5jKGlkLCB1c2VyKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbkRiID0gYXdhaXQgdGhpcy5fdXNlclJlcG9zaXRvcnkuZmluZE9uZUJ5SWQoaWQpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJbkRiKSByZXR1cm4geyBlcnJvcjogY3JlYXRlRXJyb3IoNDA0KSB9O1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl91c2VyUmVwb3NpdG9yeS51cGRhdGUodXNlckluRGIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGNyZWF0ZUVycm9yKDUwMCwgZXJyb3IpIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICovXG4gICAgZGVsZXRlID0gYXN5bmMoaWQpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXNlckluRGIgPSBhd2FpdCB0aGlzLl91c2VyUmVwb3NpdG9yeS5maW5kT25lQnlJZChpZCk7XG5cbiAgICAgICAgICAgIGlmICghdXNlckluRGIpIHJldHVybiB7IGVycm9yOiBjcmVhdGVFcnJvcig0MDQpIH07XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3VzZXJSZXBvc2l0b3J5LmRlbGV0ZSh1c2VySW5EYik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogY3JlYXRlRXJyb3IoNTAwLCBlcnJvcikgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=