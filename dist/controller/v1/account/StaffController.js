"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaffController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _express = require("express");

var createError = _interopRequireWildcard(require("http-errors"));

var _UserType = require("../../../enum/UserType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { OperationType } from "../../../enum/OperationType";
var StaffController = function StaffController(diContainer) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, StaffController);
  this._rbacService = void 0;
  this._userService = void 0;

  this.findMany = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var page, size, _ref2, error, data;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = req.query.page;
              size = req.query.size;
              _context.next = 4;
              return _this._userService.findMany(page, size);

            case 4:
              _ref2 = _context.sent;
              error = _ref2.error;
              data = _ref2.data;

              if (!error) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", next(error));

            case 9:
              res.status(data.code || 200).json(_objectSpread({}, data));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  this.search = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      var searchKey, searchFields, page, size, roleId, sortBy, sortDirection, responseType, filterMap, sortMap, user, _ref4, error, data;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              searchKey = req.query.searchKey;
              searchFields = req.query.searchFields;
              page = req.query.page;
              size = req.query.size;
              roleId = req.query.roleId;
              sortBy = req.query.sortBy;
              sortDirection = req.query.sortDirection;
              responseType = req.query.responseType;
              filterMap = {
                isStaff: 1
              };

              if (roleId) {
                filterMap["roleId"] = roleId;
              }

              sortMap = {};

              if (sortBy === "dateTime") {
                sortMap["createdDate"] = parseInt(sortDirection, 10) === 1 ? 1 : -1;
              }

              user = req.query.user;

              if (user) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", next(createError(401)));

            case 15:
              _context2.next = 17;
              return _this._rbacService.hasPermission(user, OperationType.StaffView);

            case 17:
              if (_context2.sent) {
                _context2.next = 19;
                break;
              }

              return _context2.abrupt("return", next(createError(403, "", {
                error: {
                  errorCode: "permissionDenied"
                }
              })));

            case 19:
              _context2.next = 21;
              return _this._userService.search(filterMap, searchKey, Array.isArray(searchFields) ? searchFields : typeof searchFields === "string" ? [searchFields] : [], page, size, sortMap, responseType);

            case 21:
              _ref4 = _context2.sent;
              error = _ref4.error;
              data = _ref4.data;

              if (!error) {
                _context2.next = 26;
                break;
              }

              return _context2.abrupt("return", next(error));

            case 26:
              res.status(data.code || 200).json(_objectSpread({}, data));

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  this.findOneById = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
      var staffId, _ref6, error, data;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              staffId = req.params.id || null;

              if (staffId) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return", next(createError(400)));

            case 3:
              _context3.next = 5;
              return _this._userService.findOneById(staffId);

            case 5:
              _ref6 = _context3.sent;
              error = _ref6.error;
              data = _ref6.data;

              if (!error) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return", next(error));

            case 10:
              res.status(data.code || 200).json(_objectSpread({}, data));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x7, _x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }();

  this.insert = /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
      var fullName, phoneNumber, email, identityNumber, gender, dob, socialProfileUrl, joinedDate, contractType, role, note, username, password, user, _ref8, error, data;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              fullName = req.body.fullName || "";
              phoneNumber = req.body.phoneNumber || "";
              email = req.body.email || "";
              identityNumber = req.body.identityNumber || "";
              gender = req.body.gender || "";
              dob = req.body.dob || "";
              socialProfileUrl = req.body.socialProfileUrl || "";
              joinedDate = req.body.joinedDate || "";
              contractType = req.body.contractType || "";
              role = req.body.role || "";
              note = req.body.note || "";
              username = req.body.username || "";
              password = req.body.password || "";
              user = req.query.user;

              if (fullName) {
                _context4.next = 16;
                break;
              }

              return _context4.abrupt("return", next(createError(400, "", {
                error: {
                  errorCode: "fullNameIsRequired"
                }
              })));

            case 16:
              if (email) {
                _context4.next = 18;
                break;
              }

              return _context4.abrupt("return", next(createError(400, "", {
                error: {
                  errorCode: "emailIsRequired"
                }
              })));

            case 18:
              _context4.next = 20;
              return _this._userService.insert({
                fullName: fullName,
                phoneNumber: phoneNumber,
                email: email,
                identityNumber: identityNumber,
                gender: gender,
                dob: dob,
                socialProfileUrl: socialProfileUrl,
                joinedDate: joinedDate,
                contractType: contractType,
                role: role,
                userType: _UserType.UserType.Staff,
                isStaff: 1,
                note: note,
                username: email,
                password: password,
                createdBy: user ? user.id : null,
                lastModifiedBy: user ? user.id : null
              });

            case 20:
              _ref8 = _context4.sent;
              error = _ref8.error;
              data = _ref8.data;

              if (!error) {
                _context4.next = 25;
                break;
              }

              return _context4.abrupt("return", next(error));

            case 25:
              res.status(data.code || 200).json(_objectSpread({}, data));

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x10, _x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }();

  this.update = /*#__PURE__*/function () {
    var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
      var staffId, fullName, phoneNumber, email, identityNumber, gender, dob, socialProfileUrl, joinedDate, contractType, role, note, user, _ref10, error, data;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              staffId = req.body.id || "";
              fullName = req.body.fullName || "";
              phoneNumber = req.body.phoneNumber || "";
              email = req.body.email || "";
              identityNumber = req.body.identityNumber || "";
              gender = req.body.gender || "";
              dob = req.body.dob || "";
              socialProfileUrl = req.body.socialProfileUrl || "";
              joinedDate = req.body.joinedDate || "";
              contractType = req.body.contractType || "";
              role = req.body.role || "";
              note = req.body.note || "";
              user = req.query.user;

              if (staffId) {
                _context5.next = 15;
                break;
              }

              return _context5.abrupt("return", next(createError(400)));

            case 15:
              if (!(!fullName || !phoneNumber || !email)) {
                _context5.next = 17;
                break;
              }

              return _context5.abrupt("return", next(createError(400)));

            case 17:
              _context5.next = 19;
              return _this._userService.update(staffId, {
                fullName: fullName,
                gender: gender,
                dob: dob,
                phoneNumber: phoneNumber,
                email: email,
                identityNumber: identityNumber,
                socialProfileUrl: socialProfileUrl,
                joinedDate: joinedDate,
                contractType: contractType,
                role: role,
                note: note,
                lastModifiedBy: user ? user.id : null
              });

            case 19:
              _ref10 = _context5.sent;
              error = _ref10.error;
              data = _ref10.data;

              if (!error) {
                _context5.next = 24;
                break;
              }

              return _context5.abrupt("return", next(error));

            case 24:
              res.status(data.code || 200).json(_objectSpread({}, data));

            case 25:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x13, _x14, _x15) {
      return _ref9.apply(this, arguments);
    };
  }();

  this["delete"] = /*#__PURE__*/function () {
    var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
      var userId, user, _ref12, error, data;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              userId = req.params.id || 0;
              user = req.query.user;

              if (userId) {
                _context6.next = 4;
                break;
              }

              return _context6.abrupt("return", next(createError(400)));

            case 4:
              _context6.next = 6;
              return _this._userService["delete"](userId);

            case 6:
              _ref12 = _context6.sent;
              error = _ref12.error;
              data = _ref12.data;

              if (!error) {
                _context6.next = 11;
                break;
              }

              return _context6.abrupt("return", next(error));

            case 11:
              res.status(data.code || 200).json(_objectSpread({}, data));

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x16, _x17, _x18) {
      return _ref11.apply(this, arguments);
    };
  }();

  this._rbacService = diContainer.get("rbacService");
  this._userService = diContainer.get("userService");
}
/**
 * Find many
 */
;

exports.StaffController = StaffController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3YxL2FjY291bnQvU3RhZmZDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlN0YWZmQ29udHJvbGxlciIsImRpQ29udGFpbmVyIiwiX3JiYWNTZXJ2aWNlIiwiX3VzZXJTZXJ2aWNlIiwiZmluZE1hbnkiLCJyZXEiLCJyZXMiLCJuZXh0IiwicGFnZSIsInF1ZXJ5Iiwic2l6ZSIsImVycm9yIiwiZGF0YSIsInN0YXR1cyIsImNvZGUiLCJqc29uIiwic2VhcmNoIiwic2VhcmNoS2V5Iiwic2VhcmNoRmllbGRzIiwicm9sZUlkIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsInJlc3BvbnNlVHlwZSIsImZpbHRlck1hcCIsImlzU3RhZmYiLCJzb3J0TWFwIiwicGFyc2VJbnQiLCJ1c2VyIiwiY3JlYXRlRXJyb3IiLCJoYXNQZXJtaXNzaW9uIiwiT3BlcmF0aW9uVHlwZSIsIlN0YWZmVmlldyIsImVycm9yQ29kZSIsIkFycmF5IiwiaXNBcnJheSIsImZpbmRPbmVCeUlkIiwic3RhZmZJZCIsInBhcmFtcyIsImlkIiwiaW5zZXJ0IiwiZnVsbE5hbWUiLCJib2R5IiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsImlkZW50aXR5TnVtYmVyIiwiZ2VuZGVyIiwiZG9iIiwic29jaWFsUHJvZmlsZVVybCIsImpvaW5lZERhdGUiLCJjb250cmFjdFR5cGUiLCJyb2xlIiwibm90ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyVHlwZSIsIlVzZXJUeXBlIiwiU3RhZmYiLCJjcmVhdGVkQnkiLCJsYXN0TW9kaWZpZWRCeSIsInVwZGF0ZSIsInVzZXJJZCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUlBOzs7Ozs7QUFDQTtJQUVhQSxlLEdBS1QseUJBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFBQTtBQUFBLE9BSHpCQyxZQUd5QjtBQUFBLE9BRnpCQyxZQUV5Qjs7QUFBQSxPQVF6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QUFBQTtBQUFBOztBQUFBO0FBQUEsK0ZBc1hoQixrQkFBT1AsR0FBUCxFQUFxQkMsR0FBckIsRUFBb0NDLElBQXBDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ3FELGNBQUFBLE1BREQsR0FDVXZELEdBQUcsQ0FBQ2dDLE1BQUosQ0FBV0MsRUFBWCxJQUFpQixDQUQzQjtBQUdDWCxjQUFBQSxJQUhELEdBR1F0QixHQUFHLENBQUNJLEtBQUosQ0FBVWtCLElBSGxCOztBQUFBLGtCQUtBaUMsTUFMQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFNTXJELElBQUksQ0FBQ3FCLFdBQVcsQ0FBQyxHQUFELENBQVosQ0FOVjs7QUFBQTtBQUFBO0FBQUEscUJBU3lCLEtBQUksQ0FBQ3pCLFlBQUwsV0FBeUJ5RCxNQUF6QixDQVR6Qjs7QUFBQTtBQUFBO0FBU0dqRCxjQUFBQSxLQVRILFVBU0dBLEtBVEg7QUFTVUMsY0FBQUEsSUFUVixVQVNVQSxJQVRWOztBQUFBLG1CQVdERCxLQVhDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQVdhSixJQUFJLENBQUNJLEtBQUQsQ0FYakI7O0FBQUE7QUFZTEwsY0FBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVdELElBQUksQ0FBQ0UsSUFBTCxJQUFhLEdBQXhCLEVBQ0tDLElBREwsbUJBQ2VILElBRGY7O0FBWks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F0WGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNyQixPQUFLVixZQUFMLEdBQW9CRCxXQUFXLENBQUM0RCxHQUFaLENBQWdCLGFBQWhCLENBQXBCO0FBQ0EsT0FBSzFELFlBQUwsR0FBb0JGLFdBQVcsQ0FBQzRELEdBQVosQ0FBZ0IsYUFBaEIsQ0FBcEI7QUFDSDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyBjcmVhdGVFcnJvciBmcm9tIFwiaHR0cC1lcnJvcnNcIjtcbi8vIGltcG9ydCAqIGFzIGkxOG4gZnJvbSBcImkxOG5cIjtcblxuLy8gaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vQmFzZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFVzZXJUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2VudW0vVXNlclR5cGVcIjtcbi8vIGltcG9ydCB7IE9wZXJhdGlvblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZW51bS9PcGVyYXRpb25UeXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFmZkNvbnRyb2xsZXIge1xuXG4gICAgX3JiYWNTZXJ2aWNlO1xuICAgIF91c2VyU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGRpQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX3JiYWNTZXJ2aWNlID0gZGlDb250YWluZXIuZ2V0KFwicmJhY1NlcnZpY2VcIik7XG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlID0gZGlDb250YWluZXIuZ2V0KFwidXNlclNlcnZpY2VcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBtYW55XG4gICAgICovXG4gICAgZmluZE1hbnkgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHJlcS5xdWVyeS5wYWdlO1xuICAgICAgICBjb25zdCBzaXplID0gcmVxLnF1ZXJ5LnNpemU7XG5cbiAgICAgICAgY29uc3QgeyBlcnJvciwgZGF0YSB9ID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UuZmluZE1hbnkocGFnZSwgc2l6ZSk7XG5cbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gbmV4dChlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoZGF0YS5jb2RlIHx8IDIwMClcbiAgICAgICAgICAgIC5qc29uKHsgLi4uZGF0YSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHN3YWdnZXJcbiAgICAgKiAvYWNjb3VudC9zdGFmZnMvc2VhcmNoOlxuICAgICAqICAgZ2V0OlxuICAgICAqICAgICB0YWdzOlxuICAgICAqICAgICAgIC0gQWNjb3VudCAtIFN0YWZmc1xuICAgICAqICAgICBzdW1tYXJ5OiBTZWFyY2ggc3RhZmZzXG4gICAgICogICAgIHNlY3VyaXR5OlxuICAgICAqICAgICAgIC0gQmVhcmVyOiBbQXV0aG9yaXphdGlvbl1cbiAgICAgKiAgICAgcGFyYW1ldGVyczpcbiAgICAgKiAgICAgICAtIGluOiBxdWVyeVxuICAgICAqICAgICAgICAgbmFtZTogc2VhcmNoS2V5XG4gICAgICogICAgICAgICBkZXNjcmlwdGlvbjogc2VhcmNoIGtleXdvcmRcbiAgICAgKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICAgICAqICAgICAgIC0gaW46IHF1ZXJ5XG4gICAgICogICAgICAgICBuYW1lOiBzZWFyY2hGaWVsZHNcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWFyY2ggZmllbGRzXG4gICAgICogICAgICAgICB0eXBlOiBhcnJheVxuICAgICAqICAgICAgICAgaXRlbXM6XG4gICAgICogICAgICAgICAgIHR5cGU6IHN0cmluZ1xuICAgICAqICAgICAgICAgICBlbnVtOiBbdGFnQ29kZSwgY3VzdG9tZXJGdWxsTmFtZSwgY3VzdG9tZXJQaG9uZU51bWJlciwgY3VzdG9tZXJFbWFpbF1cbiAgICAgKiAgICAgICAgIGNvbGxlY3Rpb25Gb3JtYXQ6IG11bHRpXG4gICAgICogICAgICAgLSBpbjogcXVlcnlcbiAgICAgKiAgICAgICAgIG5hbWU6IHJvbGVJZFxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IHJvbGUnIGlkXG4gICAgICogICAgICAgICBzY2hlbWE6XG4gICAgICogICAgICAgICAgIHR5cGU6IG51bWJlclxuICAgICAqICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICogICAgICAgLSBpbjogcXVlcnlcbiAgICAgKiAgICAgICAgIG5hbWU6IHN0YXR1c1xuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IFN0YXR1cyBmaWx0ZXJcbiAgICAgKiAgICAgICAgIHR5cGU6IHN0cmluZ1xuICAgICAqICAgICAgICAgZW51bTogW25ldywgY29uZmlybWVkLCB0by1waWNrdXAsIHBpY2t1cC1mYWlsZWQsIHBpY2t1cC1zdWNjZXNzZWQsIGluc3RvY2stdG8tcmVjb3JkLCByZWNvcmRlZCwgXG4gICAgICogICAgICAgICAgICAgIG91dHN0b2NrLXRvLXByb2Nlc3MsIHByb2Nlc3NpbmcsIHByb2Nlc3NpbmctY29tcGxldGVkLCBpbnN0b2NrLXRvLXF1YWxpdHktY2hlY2ssIHF1YWxpdHktY2hlY2tlZCwgXG4gICAgICogICAgICAgICAgICAgIHRvLWRlbGl2ZXIsIG91dHN0b2NrLXRvLWRlbGl2ZXIsIGRlbGl2ZXJ5LWZhaWxlZCwgZGVsaXZlcmVkLCBjYW5jZWxsZWQsIGZvbGxvdy11cF1cbiAgICAgKiAgICAgICAtIGluOiBxdWVyeVxuICAgICAqICAgICAgICAgbmFtZTogcGlja3VwQnlJZFxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IFBpY2t1cCBieSBzaGlwcGVyIGlkXG4gICAgICogICAgICAgICB0eXBlOiBpbnRlZ2VyXG4gICAgICogICAgICAgLSBpbjogcXVlcnlcbiAgICAgKiAgICAgICAgIG5hbWU6IGRlbGl2ZXJ5QnlJZFxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IERlbGl2ZXJ5IGJ5IHNoaXBwZXIgaWRcbiAgICAgKiAgICAgICAgIHR5cGU6IGludGVnZXJcbiAgICAgKiAgICAgICAtIGluOiBxdWVyeVxuICAgICAqICAgICAgICAgbmFtZTogcGlja3VwVGltZVxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IFBpY2t1cCBkdWUgZGF0ZVxuICAgICAqICAgICAgICAgdHlwZTogc3RyaW5nXG4gICAgICogICAgICAgICBleGFtcGxlOiAyMDE5LTA3LTE5XG4gICAgICogICAgICAgLSBpbjogcXVlcnlcbiAgICAgKiAgICAgICAgIG5hbWU6IGRlbGl2ZXJ5VGltZVxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IERlbGl2ZXJ5IGR1ZSBkYXRlXG4gICAgICogICAgICAgICB0eXBlOiBzdHJpbmdcbiAgICAgKiAgICAgICAgIGV4YW1wbGU6IDIwMTktMDctMTlcbiAgICAgKiAgICAgICAtIGluOiBxdWVyeVxuICAgICAqICAgICAgICAgbmFtZTogcGFnZVxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IHBhZ2UgaW5kZXhcbiAgICAgKiAgICAgICAgIHR5cGU6IGludGVnZXJcbiAgICAgKiAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgKiAgICAgICAtIGluOiBxdWVyeVxuICAgICAqICAgICAgICAgbmFtZTogc2l6ZVxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IHBhZ2Ugb2Zmc2V0XG4gICAgICogICAgICAgICB0eXBlOiBpbnRlZ2VyXG4gICAgICogICAgICAgICBkZWZhdWx0OiAxMlxuICAgICAqICAgICAgIC0gaW46IHF1ZXJ5XG4gICAgICogICAgICAgICBuYW1lOiBzb3J0QnlcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiBTb3J0IGJ5XG4gICAgICogICAgICAgICB0eXBlOiBzdHJpbmdcbiAgICAgKiAgICAgICAgIGVudW06IFtkYXRlVGltZV1cbiAgICAgKiAgICAgICAgIGRlZmF1bHQ6IGRhdGVUaW1lXG4gICAgICogICAgICAgLSBpbjogcXVlcnlcbiAgICAgKiAgICAgICAgIG5hbWU6IHNvcnREaXJlY3Rpb25cbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiBzb3J0IGRpcmVjdGlvblxuICAgICAqICAgICAgICAgdHlwZTogaW50ZWdlclxuICAgICAqICAgICAgICAgZW51bTogWy0xLCAxXVxuICAgICAqICAgICAgIC0gaW46IHF1ZXJ5XG4gICAgICogICAgICAgICBuYW1lOiByZXNwb25zZVR5cGVcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiByZXNwb25zZSB0eXBlXG4gICAgICogICAgICAgICB0eXBlOiBzdHJpbmdcbiAgICAgKiAgICAgICAgIGVudW06IFtsaXN0XVxuICAgICAqICAgICAgICAgZGVmYXVsdDogbGlzdFxuICAgICAqICAgICByZXNwb25zZXM6XG4gICAgICogICAgICAgMjAwOlxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IE9rXG4gICAgICogICAgICAgICBzY2hlbWE6XG4gICAgICogICAgICAgICAgIHR5cGU6IG9iamVjdFxuICAgICAqICAgICAgICAgICBwcm9wZXJ0aWVzOlxuICAgICAqICAgICAgICAgICAgIHVzZXJzOlxuICAgICAqICAgICAgICAgICAgICAgdHlwZTogYXJyYXlcbiAgICAgKiAgICAgICAgICAgICAgIGl0ZW1zOlxuICAgICAqICAgICAgICAgICAgICAgICB0eXBlOiBvYmplY3RcbiAgICAgKiAgICAgICAgICAgICAgICAgJHJlZjogJyMvZGVmaW5pdGlvbnMvVXNlcidcbiAgICAgKiAgICAgICAgICAgICB0b3RhbEl0ZW1zOlxuICAgICAqICAgICAgICAgICAgICAgdHlwZTogbnVtYmVyXG4gICAgICogICAgICAgNDAwOlxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IEJhZFJlcXVlc3RcbiAgICAgKiAgICAgICAgIHNjaGVtYTpcbiAgICAgKiAgICAgICAgICAgdHlwZTogb2JqZWN0XG4gICAgICogICAgICAgICAgICRyZWY6ICcjL2RlZmluaXRpb25zL0Vycm9yJ1xuICAgICAqICAgICAgIDQwMTpcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiBVbmF1dGhvcml6ZWRcbiAgICAgKiAgICAgICA0MDM6XG4gICAgICogICAgICAgICBkZXNjcmlwdGlvbjogRm9yYmlkZGVuXG4gICAgICogICAgICAgNTAwOlxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IEludGVybmFsU2VydmVyRXJyb3JcbiAgICAgKiAgICAgICA1MDM6XG4gICAgICogICAgICAgICBkZXNjcmlwdGlvbjogQXV0aG9yaXplZCBmYWlsXG4gICAgICovXG4gICAgc2VhcmNoID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEtleSA9IHJlcS5xdWVyeS5zZWFyY2hLZXk7XG4gICAgICAgIGNvbnN0IHNlYXJjaEZpZWxkcyA9IHJlcS5xdWVyeS5zZWFyY2hGaWVsZHM7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSByZXEucXVlcnkucGFnZTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHJlcS5xdWVyeS5zaXplO1xuICAgICAgICBjb25zdCByb2xlSWQgPSByZXEucXVlcnkucm9sZUlkO1xuICAgICAgICBjb25zdCBzb3J0QnkgPSByZXEucXVlcnkuc29ydEJ5O1xuICAgICAgICBjb25zdCBzb3J0RGlyZWN0aW9uID0gcmVxLnF1ZXJ5LnNvcnREaXJlY3Rpb247XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHJlcS5xdWVyeS5yZXNwb25zZVR5cGU7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyTWFwID0ge1xuICAgICAgICAgICAgaXNTdGFmZjogMSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJvbGVJZCkge1xuICAgICAgICAgICAgZmlsdGVyTWFwW1wicm9sZUlkXCJdID0gcm9sZUlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc29ydE1hcCA9IHt9O1xuICAgICAgICBpZiAoc29ydEJ5ID09PSBcImRhdGVUaW1lXCIpIHtcbiAgICAgICAgICAgIHNvcnRNYXBbXCJjcmVhdGVkRGF0ZVwiXSA9IHBhcnNlSW50KHNvcnREaXJlY3Rpb24sIDEwKSA9PT0gMSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSByZXEucXVlcnkudXNlcjtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChjcmVhdGVFcnJvcig0MDEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISBhd2FpdCB0aGlzLl9yYmFjU2VydmljZS5oYXNQZXJtaXNzaW9uKHVzZXIsIE9wZXJhdGlvblR5cGUuU3RhZmZWaWV3KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoY3JlYXRlRXJyb3IoNDAzLCBcIlwiLCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHsgZXJyb3JDb2RlOiBcInBlcm1pc3Npb25EZW5pZWRcIiB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBlcnJvciwgZGF0YSB9ID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2Uuc2VhcmNoKFxuICAgICAgICAgICAgZmlsdGVyTWFwLFxuICAgICAgICAgICAgc2VhcmNoS2V5LFxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShzZWFyY2hGaWVsZHMpID8gc2VhcmNoRmllbGRzIDogKHR5cGVvZiBzZWFyY2hGaWVsZHMgPT09IFwic3RyaW5nXCIgPyBbc2VhcmNoRmllbGRzXSA6IFtdKSxcbiAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgc29ydE1hcCxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBuZXh0KGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyhkYXRhLmNvZGUgfHwgMjAwKVxuICAgICAgICAgICAgLmpzb24oey4uLmRhdGF9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHN3YWdnZXJcbiAgICAgKiAvYWNjb3VudC9zdGFmZnMve2lkfTpcbiAgICAgKiAgIGdldDpcbiAgICAgKiAgICAgdGFnczpcbiAgICAgKiAgICAgICAtIEFjY291bnQgLSBTdGFmZnNcbiAgICAgKiAgICAgc3VtbWFyeTogZmluZCBvbmUgdXNlciBieSBpZFxuICAgICAqICAgICBkZXNjcmlwdGlvbjogZmluZCBvbmUgdXNlciBieSBpZFxuICAgICAqICAgICBzZWN1cml0eTpcbiAgICAgKiAgICAgICAtIEJlYXJlcjogW0F1dGhvcml6YXRpb25dXG4gICAgICogICAgIHBhcmFtZXRlcnM6XG4gICAgICogICAgICAgLSBpbjogcGF0aFxuICAgICAqICAgICAgICAgbmFtZTogaWRcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiBzZXR0aW5nIGlkXG4gICAgICogICAgICAgICB0eXBlOiBpbnRlZ2VyXG4gICAgICogICAgIHJlc3BvbnNlczpcbiAgICAgKiAgICAgICAyMDA6XG4gICAgICogICAgICAgICBkZXNjcmlwdGlvbjogT2tcbiAgICAgKi9cbiAgICBmaW5kT25lQnlJZCA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdGFmZklkID0gcmVxLnBhcmFtcy5pZCB8fCBudWxsO1xuXG4gICAgICAgIGlmICghc3RhZmZJZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoY3JlYXRlRXJyb3IoNDAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS5maW5kT25lQnlJZChzdGFmZklkKTtcblxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBuZXh0KGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyhkYXRhLmNvZGUgfHwgMjAwKVxuICAgICAgICAgICAgLmpzb24oey4uLmRhdGF9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHN3YWdnZXJcbiAgICAgKiAvYWNjb3VudC9zdGFmZnM6XG4gICAgICogICBwb3N0OlxuICAgICAqICAgICB0YWdzOlxuICAgICAqICAgICAgIC0gQWNjb3VudCAtIFN0YWZmc1xuICAgICAqICAgICBzdW1tYXJ5OiBJbnNlcnQgbmV3IHVzZXJcbiAgICAgKiAgICAgZGVzY3JpcHRpb246IEluc2VydCBuZXcgdXNlclxuICAgICAqICAgICBzZWN1cml0eTpcbiAgICAgKiAgICAgICAtIEJlYXJlcjogW0F1dGhvcml6YXRpb25dXG4gICAgICogICAgIHBhcmFtZXRlcnM6XG4gICAgICogICAgICAgLSBpbjogZm9ybURhdGFcbiAgICAgKiAgICAgICAgIG5hbWU6IGZ1bGxOYW1lXG4gICAgICogICAgICAgICBkZXNjcmlwdGlvbjogdXNlcidzIGZ1bGxOYW1lXG4gICAgICogICAgICAgICBzY2hlbWE6XG4gICAgICogICAgICAgICAgIHR5cGU6IHN0cmluZ1xuICAgICAqICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgKiAgICAgICAtIGluOiBmb3JtRGF0YVxuICAgICAqICAgICAgICAgbmFtZTogZW1haWxcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiB1c2VyJ3MgZW1haWxcbiAgICAgKiAgICAgICAgIHNjaGVtYTpcbiAgICAgKiAgICAgICAgICAgdHlwZTogc3RyaW5nXG4gICAgICogICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAqICAgICAgIC0gaW46IGZvcm1EYXRhXG4gICAgICogICAgICAgICBuYW1lOiBwaG9uZU51bWJlclxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IHVzZXIncyBwaG9uZU51bWJlclxuICAgICAqICAgICAgICAgc2NoZW1hOlxuICAgICAqICAgICAgICAgICB0eXBlOiBzdHJpbmdcbiAgICAgKiAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAqICAgICByZXNwb25zZXM6XG4gICAgICogICAgICAgMjAwOlxuICAgICAqICAgICAgICAgZGVzY3JpcHRpb246IE9rXG4gICAgICovXG4gICAgaW5zZXJ0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gcmVxLmJvZHkuZnVsbE5hbWUgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSByZXEuYm9keS5waG9uZU51bWJlciB8fCBcIlwiO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGlkZW50aXR5TnVtYmVyID0gcmVxLmJvZHkuaWRlbnRpdHlOdW1iZXIgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgZ2VuZGVyID0gcmVxLmJvZHkuZ2VuZGVyIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGRvYiA9IHJlcS5ib2R5LmRvYiB8fCBcIlwiO1xuICAgICAgICBjb25zdCBzb2NpYWxQcm9maWxlVXJsID0gcmVxLmJvZHkuc29jaWFsUHJvZmlsZVVybCB8fCBcIlwiO1xuICAgICAgICBjb25zdCBqb2luZWREYXRlID0gcmVxLmJvZHkuam9pbmVkRGF0ZSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBjb250cmFjdFR5cGUgPSByZXEuYm9keS5jb250cmFjdFR5cGUgfHwgXCJcIjtcbiAgICAgICAgY29uc3Qgcm9sZSA9IHJlcS5ib2R5LnJvbGUgfHwgXCJcIjtcbiAgICAgICAgY29uc3Qgbm90ZSA9IHJlcS5ib2R5Lm5vdGUgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkIHx8IFwiXCI7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IHJlcS5xdWVyeS51c2VyO1xuXG4gICAgICAgIGlmICghZnVsbE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGNyZWF0ZUVycm9yKDQwMCwgXCJcIiwge1xuICAgICAgICAgICAgICAgIGVycm9yOiB7IGVycm9yQ29kZTogXCJmdWxsTmFtZUlzUmVxdWlyZWRcIiB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGNyZWF0ZUVycm9yKDQwMCwgXCJcIiwge1xuICAgICAgICAgICAgICAgIGVycm9yOiB7IGVycm9yQ29kZTogXCJlbWFpbElzUmVxdWlyZWRcIiB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBlcnJvciwgZGF0YSB9ID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UuaW5zZXJ0KHtcbiAgICAgICAgICAgIGZ1bGxOYW1lLFxuICAgICAgICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIGlkZW50aXR5TnVtYmVyLFxuICAgICAgICAgICAgZ2VuZGVyLFxuICAgICAgICAgICAgZG9iLFxuICAgICAgICAgICAgc29jaWFsUHJvZmlsZVVybCxcbiAgICAgICAgICAgIGpvaW5lZERhdGUsXG4gICAgICAgICAgICBjb250cmFjdFR5cGUsXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgdXNlclR5cGU6IFVzZXJUeXBlLlN0YWZmLFxuICAgICAgICAgICAgaXNTdGFmZjogMSxcbiAgICAgICAgICAgIG5vdGUsXG4gICAgICAgICAgICB1c2VybmFtZTogZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdXNlciA/IHVzZXIuaWQgOiBudWxsLFxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHVzZXIgPyB1c2VyLmlkIDogbnVsbCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gbmV4dChlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoZGF0YS5jb2RlIHx8IDIwMClcbiAgICAgICAgICAgIC5qc29uKHsgLi4uZGF0YSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHN3YWdnZXJcbiAgICAgKiAvYWNjb3VudC9zdGFmZnMve2lkfTpcbiAgICAgKiAgIHB1dDpcbiAgICAgKiAgICAgdGFnczpcbiAgICAgKiAgICAgICAtIEFjY291bnQgLSBTdGFmZnNcbiAgICAgKiAgICAgc3VtbWFyeTogZmluZCBvbmUgdXNlciBieSBpZFxuICAgICAqICAgICBkZXNjcmlwdGlvbjogZmluZCBvbmUgdXNlciBieSBpZFxuICAgICAqICAgICBzZWN1cml0eTpcbiAgICAgKiAgICAgICAtIEJlYXJlcjogW0F1dGhvcml6YXRpb25dXG4gICAgICogICAgIHBhcmFtZXRlcnM6XG4gICAgICogICAgICAgLSBpbjogcGF0aFxuICAgICAqICAgICAgICAgbmFtZTogaWRcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiBzZXR0aW5nIGlkXG4gICAgICogICAgICAgICB0eXBlOiBpbnRlZ2VyXG4gICAgICogICAgIHJlc3BvbnNlczpcbiAgICAgKiAgICAgICAyMDA6XG4gICAgICogICAgICAgICBkZXNjcmlwdGlvbjogT2tcbiAgICAgKi9cbiAgICB1cGRhdGUgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3RhZmZJZCA9IHJlcS5ib2R5LmlkIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gcmVxLmJvZHkuZnVsbE5hbWUgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSByZXEuYm9keS5waG9uZU51bWJlciB8fCBcIlwiO1xuICAgICAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGlkZW50aXR5TnVtYmVyID0gcmVxLmJvZHkuaWRlbnRpdHlOdW1iZXIgfHwgXCJcIjtcbiAgICAgICAgY29uc3QgZ2VuZGVyID0gcmVxLmJvZHkuZ2VuZGVyIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGRvYiA9IHJlcS5ib2R5LmRvYiB8fCBcIlwiO1xuICAgICAgICBjb25zdCBzb2NpYWxQcm9maWxlVXJsID0gcmVxLmJvZHkuc29jaWFsUHJvZmlsZVVybCB8fCBcIlwiO1xuICAgICAgICBjb25zdCBqb2luZWREYXRlID0gcmVxLmJvZHkuam9pbmVkRGF0ZSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBjb250cmFjdFR5cGUgPSByZXEuYm9keS5jb250cmFjdFR5cGUgfHwgXCJcIjtcbiAgICAgICAgY29uc3Qgcm9sZSA9IHJlcS5ib2R5LnJvbGUgfHwgXCJcIjtcbiAgICAgICAgY29uc3Qgbm90ZSA9IHJlcS5ib2R5Lm5vdGUgfHwgXCJcIjtcblxuICAgICAgICBjb25zdCB1c2VyID0gcmVxLnF1ZXJ5LnVzZXI7XG5cbiAgICAgICAgaWYgKCFzdGFmZklkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChjcmVhdGVFcnJvcig0MDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZnVsbE5hbWUgfHwgIXBob25lTnVtYmVyIHx8ICFlbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoY3JlYXRlRXJyb3IoNDAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS51cGRhdGUoc3RhZmZJZCwge1xuICAgICAgICAgICAgZnVsbE5hbWUsXG4gICAgICAgICAgICBnZW5kZXIsXG4gICAgICAgICAgICBkb2IsXG4gICAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgaWRlbnRpdHlOdW1iZXIsXG4gICAgICAgICAgICBzb2NpYWxQcm9maWxlVXJsLFxuICAgICAgICAgICAgam9pbmVkRGF0ZSxcbiAgICAgICAgICAgIGNvbnRyYWN0VHlwZSxcbiAgICAgICAgICAgIHJvbGUsXG4gICAgICAgICAgICBub3RlLFxuICAgICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHVzZXIgPyB1c2VyLmlkIDogbnVsbCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gbmV4dChlcnJvcik7XG4gICAgICAgIHJlcy5zdGF0dXMoZGF0YS5jb2RlIHx8IDIwMClcbiAgICAgICAgICAgIC5qc29uKHsgLi4uZGF0YSB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHN3YWdnZXJcbiAgICAgKiAvYWNjb3VudC9zdGFmZnMve2lkfTpcbiAgICAgKiAgIGRlbGV0ZTpcbiAgICAgKiAgICAgdGFnczpcbiAgICAgKiAgICAgICAtIEFjY291bnQgLSBTdGFmZnNcbiAgICAgKiAgICAgc3VtbWFyeTogZmluZCBvbmUgdXNlciBieSBpZFxuICAgICAqICAgICBkZXNjcmlwdGlvbjogZmluZCBvbmUgdXNlciBieSBpZFxuICAgICAqICAgICBzZWN1cml0eTpcbiAgICAgKiAgICAgICAtIEJlYXJlcjogW0F1dGhvcml6YXRpb25dXG4gICAgICogICAgIHBhcmFtZXRlcnM6XG4gICAgICogICAgICAgLSBpbjogcGF0aFxuICAgICAqICAgICAgICAgbmFtZTogaWRcbiAgICAgKiAgICAgICAgIGRlc2NyaXB0aW9uOiBzZXR0aW5nIGlkXG4gICAgICogICAgICAgICB0eXBlOiBpbnRlZ2VyXG4gICAgICogICAgIHJlc3BvbnNlczpcbiAgICAgKiAgICAgICAyMDA6XG4gICAgICogICAgICAgICBkZXNjcmlwdGlvbjogT2tcbiAgICAgKi9cbiAgICBkZWxldGUgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgdXNlcklkID0gcmVxLnBhcmFtcy5pZCB8fCAwO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSByZXEucXVlcnkudXNlcjtcblxuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoY3JlYXRlRXJyb3IoNDAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS5kZWxldGUodXNlcklkKTtcblxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBuZXh0KGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyhkYXRhLmNvZGUgfHwgMjAwKVxuICAgICAgICAgICAgLmpzb24oeyAuLi5kYXRhIH0pO1xuICAgIH07XG59XG4iXX0=