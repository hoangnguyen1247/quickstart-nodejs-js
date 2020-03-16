"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _typeorm = require("typeorm");

var _TypeUtils = require("../../utils/TypeUtils");

var _User = require("../../entity/account/User");

var _BaseRepository2 = require("./BaseRepository");

var _AccountConnector = require("./AccountConnector");

// import { UserType } from "../../enum/UserType";
// import { UserRole } from "../../entity/account/UserRole";
var UserRepository = /*#__PURE__*/function (_BaseRepository) {
  (0, _inherits2["default"])(UserRepository, _BaseRepository);

  function UserRepository(mysqlConnector) {
    var _this;

    (0, _classCallCheck2["default"])(this, UserRepository);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(UserRepository).call(this, mysqlConnector.getConnection().getRepository(_User.User)));

    _this.search = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(filterMap, searchKey, searchFields, page, size, sortMap, resType) {
        var query, countQuery, allowResTypes, resTypeMap, selectColumns, allowSortColumns, parsedSortColumns, parsedPage, parsedPageSize, data, count;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _this._baseRepository.createQueryBuilder("user").leftJoin("user.roles", "role");
                countQuery = _this._baseRepository.createQueryBuilder("user").leftJoin("user.roles", "role"); // select

                allowResTypes = ["list"];
                resTypeMap = {
                  "list": _User.User.USER_LIST_COLUMNS
                };
                selectColumns = allowResTypes[resType] ? resTypeMap[resType] : resTypeMap["list"];

                if (Array.isArray(selectColumns) && selectColumns.length > 0) {
                  query.distinct().select((0, _toConsumableArray2["default"])(selectColumns.map(function (mItem) {
                    return "user.".concat(mItem);
                  })));
                }

                countQuery.select("COUNT(DISTINCT user.id)", "count"); // conjunction

                query.where("1 = 1");
                countQuery.where("1 = 1");
                query.andWhere("user.userType != '".concat(UserType.Administrator, "'"));
                countQuery.andWhere("user.userType != '".concat(UserType.Administrator, "'"));

                _this._createQueryCriteria("search", query, filterMap, searchKey, searchFields, resType);

                _this._createQueryCriteria("search", countQuery, filterMap, searchKey, searchFields, resType); // order by


                allowSortColumns = ["createdDate"];
                parsedSortColumns = !!sortMap && (0, _typeof2["default"])(sortMap) === "object" && sortMap.constructor === Object ? Object.keys(sortMap).filter(function (fItem) {
                  return allowSortColumns.includes(fItem);
                }) : [];

                if (parsedSortColumns.length > 0) {
                  parsedSortColumns.map(function (mItem, index) {
                    if (index === 0) {
                      query.orderBy("user.".concat(mItem), parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                    } else {
                      query.addOrderBy("user.".concat(mItem), parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                    }
                  });
                } else {
                  query.orderBy("user.createdDate", "DESC");
                } // offset, limit


                parsedPage = parseInt(page, 10);
                parsedPageSize = parseInt(size, 10);

                if ((0, _TypeUtils.isNumber)(parsedPage) && (0, _TypeUtils.isNumber)(parsedPageSize)) {
                  query.offset(parsedPage * parsedPageSize).limit(parsedPageSize);
                }

                _context.next = 21;
                return query.getMany();

              case 21:
                data = _context.sent;
                _context.next = 24;
                return countQuery.getRawOne();

              case 24:
                count = _context.sent;
                return _context.abrupt("return", [data, (0, _typeof2["default"])(count) === "object" ? parseInt(count.count, 10) : 0]);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3, _x4, _x5, _x6, _x7) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.findOneById = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var query;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = _this._baseRepository.createQueryBuilder("user").leftJoin("user.roles", "role"); // select

                query.select((0, _toConsumableArray2["default"])(_User.User.USER_LIST_COLUMNS.map(function (mItem) {
                  return "user.".concat(mItem);
                }))); // where

                query.where("user.id = ".concat(id)); // get one

                _context2.next = 5;
                return query.getOne();

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x8) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.findOne = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(filterMap, searchKey, searchFields, resType) {
        var query, allowResTypes, resTypeMap, selectColumns;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _this._baseRepository.createQueryBuilder("user").leftJoin("user.roles", "role"); // select

                allowResTypes = ["list", "login"];
                resTypeMap = {
                  list: _User.User.USER_LIST_COLUMNS,
                  login: _User.User.USER_LOGIN_COLUMNS
                };
                selectColumns = allowResTypes.includes(resType) ? resTypeMap[resType] : resTypeMap["list"];

                if (Array.isArray(selectColumns) && selectColumns.length > 0) {
                  query.select([].concat((0, _toConsumableArray2["default"])(selectColumns.map(function (mItem) {
                    return "user.".concat(mItem);
                  })), (0, _toConsumableArray2["default"])(UserRole.USER_ROLE_LIST_COLUMNS.map(function (mItem) {
                    return "role.".concat(mItem);
                  }))));
                } // conjunction


                query.where("1 = 1");

                _this._createQueryCriteria("findOne", query, filterMap, searchKey, searchFields, resType); // get one


                _context3.next = 9;
                return query.getOne();

              case 9:
                return _context3.abrupt("return", _context3.sent);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x9, _x10, _x11, _x12) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this._createQueryCriteria = function (type, query, filterMap, searchKey, searchFields, resType) {
      // search
      var allowSearchColumns = ["fullName", "phoneNumber", "email"];
      var parsedSearchColumns = Array.isArray(searchFields) && searchFields.length > 0 ? searchFields.filter(function (fItem) {
        return allowSearchColumns.includes(fItem);
      }) : [];

      if (searchKey && parsedSearchColumns.length > 0) {
        var searchBrackets = new _typeorm.Brackets(function (qb) {
          qb.where("0 = 1");
          parsedSearchColumns.forEach(function (item) {
            if (["fullName", "phoneNumber", "email"].includes(item)) {
              qb.orWhere("user.".concat(item, " LIKE '%").concat(searchKey, "%'"));
            } else {
              qb.orWhere("user.".concat(item, " = '").concat(searchKey, "'"));
            }
          });
        });
        query.andWhere(searchBrackets);
      } // filters


      var allowFilterColumns = ["id", "fullName", "userType", "roleId", "code", "email", "phoneNumber", "isCustomer", "isStaff", "ids", "username", "facebookId", "googleId", "trelloId", "createdDate"];
      var parsedFilterKeys = !!filterMap && (0, _typeof2["default"])(filterMap) === "object" && filterMap.constructor === Object ? Object.keys(filterMap).filter(function (fItem) {
        return allowFilterColumns.includes(fItem);
      }) : [];

      if (Array.isArray(parsedFilterKeys) && parsedFilterKeys.length > 0) {
        parsedFilterKeys.forEach(function (item) {
          if (["createdDate"].includes(item)) {
            // Date
            query.andWhere("DATE(user.".concat(item, ") = ").concat(filterMap[item]));
          } else if (["roleId"].includes(item)) {
            query.andWhere("role.roleId = ".concat(filterMap[item]));
          } else if (["isCustomer", "isStaff"].includes(item)) {
            query.andWhere("user.".concat(item, " = ").concat(filterMap[item]));
          } else {
            if (typeof filterMap[item] === "string") {
              query.andWhere("user.".concat(item, " = '").concat(filterMap[item], "'"));
            } else {
              query.andWhere("user.".concat(item, " = ").concat(filterMap[item]));
            }
          }
        });
      } else {
        if (type === "findOne") {
          // dejunction
          query.andWhere("0 = 1");
        }
      }
    };

    return _this;
  }

  return UserRepository;
}(_BaseRepository2.BaseRepository);

exports.UserRepository = UserRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBvc2l0b3J5L2FjY291bnQvVXNlclJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiVXNlclJlcG9zaXRvcnkiLCJteXNxbENvbm5lY3RvciIsImdldENvbm5lY3Rpb24iLCJnZXRSZXBvc2l0b3J5IiwiVXNlciIsInNlYXJjaCIsImZpbHRlck1hcCIsInNlYXJjaEtleSIsInNlYXJjaEZpZWxkcyIsInBhZ2UiLCJzaXplIiwic29ydE1hcCIsInJlc1R5cGUiLCJxdWVyeSIsIl9iYXNlUmVwb3NpdG9yeSIsImNyZWF0ZVF1ZXJ5QnVpbGRlciIsImxlZnRKb2luIiwiY291bnRRdWVyeSIsImFsbG93UmVzVHlwZXMiLCJyZXNUeXBlTWFwIiwiVVNFUl9MSVNUX0NPTFVNTlMiLCJzZWxlY3RDb2x1bW5zIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZGlzdGluY3QiLCJzZWxlY3QiLCJtYXAiLCJtSXRlbSIsIndoZXJlIiwiYW5kV2hlcmUiLCJVc2VyVHlwZSIsIkFkbWluaXN0cmF0b3IiLCJfY3JlYXRlUXVlcnlDcml0ZXJpYSIsImFsbG93U29ydENvbHVtbnMiLCJwYXJzZWRTb3J0Q29sdW1ucyIsImNvbnN0cnVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImZJdGVtIiwiaW5jbHVkZXMiLCJpbmRleCIsIm9yZGVyQnkiLCJwYXJzZUludCIsImFkZE9yZGVyQnkiLCJwYXJzZWRQYWdlIiwicGFyc2VkUGFnZVNpemUiLCJvZmZzZXQiLCJsaW1pdCIsImdldE1hbnkiLCJkYXRhIiwiZ2V0UmF3T25lIiwiY291bnQiLCJmaW5kT25lQnlJZCIsImlkIiwiZ2V0T25lIiwiZmluZE9uZSIsImxpc3QiLCJsb2dpbiIsIlVTRVJfTE9HSU5fQ09MVU1OUyIsIlVzZXJSb2xlIiwiVVNFUl9ST0xFX0xJU1RfQ09MVU1OUyIsInR5cGUiLCJhbGxvd1NlYXJjaENvbHVtbnMiLCJwYXJzZWRTZWFyY2hDb2x1bW5zIiwic2VhcmNoQnJhY2tldHMiLCJCcmFja2V0cyIsInFiIiwiZm9yRWFjaCIsIml0ZW0iLCJvcldoZXJlIiwiYWxsb3dGaWx0ZXJDb2x1bW5zIiwicGFyc2VkRmlsdGVyS2V5cyIsIkJhc2VSZXBvc2l0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBR0E7O0FBRUE7O0FBQ0E7O0FBSkE7QUFFQTtJQUlhQSxjOzs7QUFFVCwwQkFBWUMsY0FBWixFQUE4QztBQUFBOztBQUFBO0FBQzFDLDBIQUFNQSxjQUFjLENBQUNDLGFBQWYsR0FBK0JDLGFBQS9CLENBQTZDQyxVQUE3QyxDQUFOOztBQUQwQyxVQUk5Q0MsTUFKOEM7QUFBQSwrRkFJckMsaUJBQU1DLFNBQU4sRUFBaUJDLFNBQWpCLEVBQTRCQyxZQUE1QixFQUEwQ0MsSUFBMUMsRUFBZ0RDLElBQWhELEVBQXNEQyxPQUF0RCxFQUErREMsT0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NDLGdCQUFBQSxLQURELEdBQ1MsTUFBS0MsZUFBTCxDQUNUQyxrQkFEUyxDQUNVLE1BRFYsRUFFVEMsUUFGUyxDQUVBLFlBRkEsRUFFYyxNQUZkLENBRFQ7QUFJQ0MsZ0JBQUFBLFVBSkQsR0FJYyxNQUFLSCxlQUFMLENBQ2RDLGtCQURjLENBQ0ssTUFETCxFQUVkQyxRQUZjLENBRUwsWUFGSyxFQUVTLE1BRlQsQ0FKZCxFQVFMOztBQUNNRSxnQkFBQUEsYUFURCxHQVNpQixDQUFDLE1BQUQsQ0FUakI7QUFVQ0MsZ0JBQUFBLFVBVkQsR0FVYztBQUNmLDBCQUFRZixXQUFLZ0I7QUFERSxpQkFWZDtBQWFDQyxnQkFBQUEsYUFiRCxHQWFpQkgsYUFBYSxDQUFDTixPQUFELENBQWIsR0FBeUJPLFVBQVUsQ0FBQ1AsT0FBRCxDQUFuQyxHQUErQ08sVUFBVSxDQUFDLE1BQUQsQ0FiMUU7O0FBY0wsb0JBQUlHLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixhQUFkLEtBQWdDQSxhQUFhLENBQUNHLE1BQWQsR0FBdUIsQ0FBM0QsRUFB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OEM7QUFDakR6RCxZQUFBQSxLQUFLLENBQUNpQixRQUFOLGdCQUF1QndDLElBQXZCLGdCQUFpQ2hFLFNBQVMsQ0FBQ2dFLElBQUQsQ0FBMUM7QUFDSCxXQUZNLE1BRUE7QUFDSCxnQkFBSSxPQUFPaEUsU0FBUyxDQUFDZ0UsSUFBRCxDQUFoQixLQUEyQixRQUEvQixFQUF5QztBQUNyQ3pELGNBQUFBLEtBQUssQ0FBQ2lCLFFBQU4sZ0JBQXVCd0MsSUFBdkIsaUJBQWtDaEUsU0FBUyxDQUFDZ0UsSUFBRCxDQUEzQztBQUNILGFBRkQsTUFFTztBQUNIekQsY0FBQUEsS0FBSyxDQUFDaUIsUUFBTixnQkFBdUJ3QyxJQUF2QixnQkFBaUNoRSxTQUFTLENBQUNnRSxJQUFELENBQTFDO0FBQ0g7QUFDSjtBQUNKLFNBZkw7QUFnQkgsT0FqQkQsTUFpQk87QUFDSCxZQUFJUCxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUNwQjtBQUNBbEQsVUFBQUEsS0FBSyxDQUFDaUIsUUFBTixDQUFlLE9BQWY7QUFDSDtBQUNKO0FBQ0osS0F4TDZDOztBQUFBO0FBRTdDOzs7RUFKK0I0QywrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJlcG9zaXRvcnksIEJyYWNrZXRzIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVHlwZVV0aWxzXCI7XG5cbi8vIGltcG9ydCB7IFVzZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2VudW0vVXNlclR5cGVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vZW50aXR5L2FjY291bnQvVXNlclwiO1xuLy8gaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiLi4vLi4vZW50aXR5L2FjY291bnQvVXNlclJvbGVcIjtcbmltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIi4vQmFzZVJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IEFjY291bnRDb25uZWN0b3IgfSBmcm9tIFwiLi9BY2NvdW50Q29ubmVjdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFVzZXI+IHtcblxuICAgIGNvbnN0cnVjdG9yKG15c3FsQ29ubmVjdG9yOiBBY2NvdW50Q29ubmVjdG9yKSB7XG4gICAgICAgIHN1cGVyKG15c3FsQ29ubmVjdG9yLmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KFVzZXIpKTtcbiAgICB9XG5cbiAgICBzZWFyY2ggPSBhc3luYyhmaWx0ZXJNYXAsIHNlYXJjaEtleSwgc2VhcmNoRmllbGRzLCBwYWdlLCBzaXplLCBzb3J0TWFwLCByZXNUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5fYmFzZVJlcG9zaXRvcnlcbiAgICAgICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJ1c2VyXCIpXG4gICAgICAgICAgICAubGVmdEpvaW4oXCJ1c2VyLnJvbGVzXCIsIFwicm9sZVwiKTtcbiAgICAgICAgY29uc3QgY291bnRRdWVyeSA9IHRoaXMuX2Jhc2VSZXBvc2l0b3J5XG4gICAgICAgICAgICAuY3JlYXRlUXVlcnlCdWlsZGVyKFwidXNlclwiKVxuICAgICAgICAgICAgLmxlZnRKb2luKFwidXNlci5yb2xlc1wiLCBcInJvbGVcIik7XG5cbiAgICAgICAgLy8gc2VsZWN0XG4gICAgICAgIGNvbnN0IGFsbG93UmVzVHlwZXMgPSBbXCJsaXN0XCJdO1xuICAgICAgICBjb25zdCByZXNUeXBlTWFwID0ge1xuICAgICAgICAgICAgXCJsaXN0XCI6IFVzZXIuVVNFUl9MSVNUX0NPTFVNTlMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNlbGVjdENvbHVtbnMgPSBhbGxvd1Jlc1R5cGVzW3Jlc1R5cGVdID8gcmVzVHlwZU1hcFtyZXNUeXBlXSA6IHJlc1R5cGVNYXBbXCJsaXN0XCJdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RDb2x1bW5zKSAmJiBzZWxlY3RDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHF1ZXJ5LmRpc3RpbmN0KCkuc2VsZWN0KFtcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RDb2x1bW5zLm1hcChtSXRlbSA9PiBgdXNlci4ke21JdGVtfWApLFxuICAgICAgICAgICAgICAgIC8vIC4uLlJvbGUuUk9MRV9MSVNUX0NPTFVNTlMubWFwKG1JdGVtID0+IGByb2xlLiR7bUl0ZW19YCksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50UXVlcnkuc2VsZWN0KFwiQ09VTlQoRElTVElOQ1QgdXNlci5pZClcIiwgXCJjb3VudFwiKTtcblxuICAgICAgICAvLyBjb25qdW5jdGlvblxuICAgICAgICBxdWVyeS53aGVyZShcIjEgPSAxXCIpO1xuICAgICAgICBjb3VudFF1ZXJ5LndoZXJlKFwiMSA9IDFcIik7XG5cbiAgICAgICAgcXVlcnkuYW5kV2hlcmUoYHVzZXIudXNlclR5cGUgIT0gJyR7VXNlclR5cGUuQWRtaW5pc3RyYXRvcn0nYCk7XG4gICAgICAgIGNvdW50UXVlcnkuYW5kV2hlcmUoYHVzZXIudXNlclR5cGUgIT0gJyR7VXNlclR5cGUuQWRtaW5pc3RyYXRvcn0nYCk7XG5cbiAgICAgICAgdGhpcy5fY3JlYXRlUXVlcnlDcml0ZXJpYShcInNlYXJjaFwiLCBxdWVyeSwgZmlsdGVyTWFwLCBzZWFyY2hLZXksIHNlYXJjaEZpZWxkcywgcmVzVHlwZSk7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVF1ZXJ5Q3JpdGVyaWEoXCJzZWFyY2hcIiwgY291bnRRdWVyeSwgZmlsdGVyTWFwLCBzZWFyY2hLZXksIHNlYXJjaEZpZWxkcywgcmVzVHlwZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBvcmRlciBieVxuICAgICAgICBjb25zdCBhbGxvd1NvcnRDb2x1bW5zID0gW1xuICAgICAgICAgICAgXCJjcmVhdGVkRGF0ZVwiLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBwYXJzZWRTb3J0Q29sdW1ucyA9ICEhc29ydE1hcCAmJiB0eXBlb2Ygc29ydE1hcCA9PT0gXCJvYmplY3RcIiAmJiBzb3J0TWFwLmNvbnN0cnVjdG9yID09PSBPYmplY3QgP1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc29ydE1hcCkuZmlsdGVyKGZJdGVtID0+IGFsbG93U29ydENvbHVtbnMuaW5jbHVkZXMoZkl0ZW0pKSA6IFtdO1xuICAgICAgICBpZiAocGFyc2VkU29ydENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFyc2VkU29ydENvbHVtbnNcbiAgICAgICAgICAgICAgICAubWFwKChtSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5vcmRlckJ5KGB1c2VyLiR7bUl0ZW19YCwgcGFyc2VJbnQoc29ydE1hcFttSXRlbV0sIDEwKSA9PT0gMSA/ICdERVNDJyA6ICdBU0MnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmFkZE9yZGVyQnkoYHVzZXIuJHttSXRlbX1gLCBwYXJzZUludChzb3J0TWFwW21JdGVtXSwgMTApID09PSAxID8gJ0RFU0MnIDogJ0FTQycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS5vcmRlckJ5KFwidXNlci5jcmVhdGVkRGF0ZVwiLCBcIkRFU0NcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvZmZzZXQsIGxpbWl0XG4gICAgICAgIGNvbnN0IHBhcnNlZFBhZ2UgPSBwYXJzZUludChwYWdlLCAxMCk7XG4gICAgICAgIGNvbnN0IHBhcnNlZFBhZ2VTaXplID0gcGFyc2VJbnQoc2l6ZSwgMTApO1xuICAgICAgICBpZiAoaXNOdW1iZXIocGFyc2VkUGFnZSkgJiYgaXNOdW1iZXIocGFyc2VkUGFnZVNpemUpKSB7XG4gICAgICAgICAgICBxdWVyeS5vZmZzZXQocGFyc2VkUGFnZSAqIHBhcnNlZFBhZ2VTaXplKS5saW1pdChwYXJzZWRQYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5LmdldE1hbnkoKTtcbiAgICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBjb3VudFF1ZXJ5LmdldFJhd09uZSgpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgdHlwZW9mIGNvdW50ID09PSBcIm9iamVjdFwiID8gcGFyc2VJbnQoY291bnQuY291bnQsIDEwKSA6IDAsXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIGZpbmRPbmVCeUlkID0gYXN5bmMoaWQpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLl9iYXNlUmVwb3NpdG9yeVxuICAgICAgICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcihcInVzZXJcIilcbiAgICAgICAgICAgIC5sZWZ0Sm9pbihcInVzZXIucm9sZXNcIiwgXCJyb2xlXCIpO1xuXG4gICAgICAgIC8vIHNlbGVjdFxuICAgICAgICBxdWVyeS5zZWxlY3QoW1xuICAgICAgICAgICAgLi4uVXNlci5VU0VSX0xJU1RfQ09MVU1OUy5tYXAobUl0ZW0gPT4gYHVzZXIuJHttSXRlbX1gKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgLy8gd2hlcmVcbiAgICAgICAgcXVlcnkud2hlcmUoYHVzZXIuaWQgPSAke2lkfWApO1xuXG4gICAgICAgIC8vIGdldCBvbmVcbiAgICAgICAgcmV0dXJuIGF3YWl0IHF1ZXJ5LmdldE9uZSgpO1xuICAgIH1cblxuICAgIGZpbmRPbmUgPSBhc3luYyhmaWx0ZXJNYXAsIHNlYXJjaEtleSwgc2VhcmNoRmllbGRzLCByZXNUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5fYmFzZVJlcG9zaXRvcnlcbiAgICAgICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJ1c2VyXCIpXG4gICAgICAgICAgICAubGVmdEpvaW4oXCJ1c2VyLnJvbGVzXCIsIFwicm9sZVwiKTtcblxuICAgICAgICAvLyBzZWxlY3RcbiAgICAgICAgY29uc3QgYWxsb3dSZXNUeXBlcyA9IFsgXCJsaXN0XCIsIFwibG9naW5cIiBdO1xuICAgICAgICBjb25zdCByZXNUeXBlTWFwID0ge1xuICAgICAgICAgICAgbGlzdDogVXNlci5VU0VSX0xJU1RfQ09MVU1OUyxcbiAgICAgICAgICAgIGxvZ2luOiBVc2VyLlVTRVJfTE9HSU5fQ09MVU1OUyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2VsZWN0Q29sdW1ucyA9IGFsbG93UmVzVHlwZXMuaW5jbHVkZXMocmVzVHlwZSkgPyByZXNUeXBlTWFwW3Jlc1R5cGVdIDogcmVzVHlwZU1hcFtcImxpc3RcIl07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdENvbHVtbnMpICYmIHNlbGVjdENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KFtcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RDb2x1bW5zLm1hcChtSXRlbSA9PiBgdXNlci4ke21JdGVtfWApLFxuICAgICAgICAgICAgICAgIC4uLlVzZXJSb2xlLlVTRVJfUk9MRV9MSVNUX0NPTFVNTlMubWFwKG1JdGVtID0+IGByb2xlLiR7bUl0ZW19YCksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmp1bmN0aW9uXG4gICAgICAgIHF1ZXJ5LndoZXJlKFwiMSA9IDFcIik7XG5cbiAgICAgICAgdGhpcy5fY3JlYXRlUXVlcnlDcml0ZXJpYShcImZpbmRPbmVcIiwgcXVlcnksIGZpbHRlck1hcCwgc2VhcmNoS2V5LCBzZWFyY2hGaWVsZHMsIHJlc1R5cGUpO1xuXG4gICAgICAgIC8vIGdldCBvbmVcbiAgICAgICAgcmV0dXJuIGF3YWl0IHF1ZXJ5LmdldE9uZSgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVRdWVyeUNyaXRlcmlhID0gKHR5cGUsIHF1ZXJ5LCBmaWx0ZXJNYXAsIHNlYXJjaEtleSwgc2VhcmNoRmllbGRzLCByZXNUeXBlKSA9PiB7XG4gICAgICAgIC8vIHNlYXJjaFxuICAgICAgICBjb25zdCBhbGxvd1NlYXJjaENvbHVtbnMgPSBbXG4gICAgICAgICAgICBcImZ1bGxOYW1lXCIsXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCIsXG4gICAgICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHBhcnNlZFNlYXJjaENvbHVtbnMgPSBBcnJheS5pc0FycmF5KHNlYXJjaEZpZWxkcykgJiYgc2VhcmNoRmllbGRzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc2VhcmNoRmllbGRzLmZpbHRlcihmSXRlbSA9PiBhbGxvd1NlYXJjaENvbHVtbnMuaW5jbHVkZXMoZkl0ZW0pKSA6IFtdO1xuICAgICAgICBpZiAoc2VhcmNoS2V5ICYmIHBhcnNlZFNlYXJjaENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoQnJhY2tldHMgPSBuZXcgQnJhY2tldHMocWIgPT4ge1xuICAgICAgICAgICAgICAgIHFiLndoZXJlKFwiMCA9IDFcIik7XG4gICAgICAgICAgICAgICAgcGFyc2VkU2VhcmNoQ29sdW1uc1xuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChbXCJmdWxsTmFtZVwiLCBcInBob25lTnVtYmVyXCIsIFwiZW1haWxcIl0uaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxYi5vcldoZXJlKGB1c2VyLiR7aXRlbX0gTElLRSAnJSR7c2VhcmNoS2V5fSUnYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFiLm9yV2hlcmUoYHVzZXIuJHtpdGVtfSA9ICcke3NlYXJjaEtleX0nYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBxdWVyeS5hbmRXaGVyZShzZWFyY2hCcmFja2V0cyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaWx0ZXJzXG4gICAgICAgIGNvbnN0IGFsbG93RmlsdGVyQ29sdW1ucyA9IFtcbiAgICAgICAgICAgIFwiaWRcIixcbiAgICAgICAgICAgIFwiZnVsbE5hbWVcIixcbiAgICAgICAgICAgIFwidXNlclR5cGVcIixcbiAgICAgICAgICAgIFwicm9sZUlkXCIsXG4gICAgICAgICAgICBcImNvZGVcIixcbiAgICAgICAgICAgIFwiZW1haWxcIixcbiAgICAgICAgICAgIFwicGhvbmVOdW1iZXJcIixcbiAgICAgICAgICAgIFwiaXNDdXN0b21lclwiLFxuICAgICAgICAgICAgXCJpc1N0YWZmXCIsXG4gICAgICAgICAgICBcImlkc1wiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgXCJmYWNlYm9va0lkXCIsXG4gICAgICAgICAgICBcImdvb2dsZUlkXCIsXG4gICAgICAgICAgICBcInRyZWxsb0lkXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWREYXRlXCIsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHBhcnNlZEZpbHRlcktleXMgPSAhIWZpbHRlck1hcCAmJiB0eXBlb2YgZmlsdGVyTWFwID09PSBcIm9iamVjdFwiICYmIGZpbHRlck1hcC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ID8gXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXJNYXApLmZpbHRlcihmSXRlbSA9PiBhbGxvd0ZpbHRlckNvbHVtbnMuaW5jbHVkZXMoZkl0ZW0pKSA6IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZWRGaWx0ZXJLZXlzKSAmJiBwYXJzZWRGaWx0ZXJLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcnNlZEZpbHRlcktleXNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFtcImNyZWF0ZWREYXRlXCJdLmluY2x1ZGVzKGl0ZW0pKSB7IC8vIERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKGBEQVRFKHVzZXIuJHtpdGVtfSkgPSAke2ZpbHRlck1hcFtpdGVtXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChbXCJyb2xlSWRcIl0uaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKGByb2xlLnJvbGVJZCA9ICR7ZmlsdGVyTWFwW2l0ZW1dfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFtcImlzQ3VzdG9tZXJcIiwgXCJpc1N0YWZmXCJdLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5hbmRXaGVyZShgdXNlci4ke2l0ZW19ID0gJHtmaWx0ZXJNYXBbaXRlbV19YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpbHRlck1hcFtpdGVtXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKGB1c2VyLiR7aXRlbX0gPSAnJHtmaWx0ZXJNYXBbaXRlbV19J2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5hbmRXaGVyZShgdXNlci4ke2l0ZW19ID0gJHtmaWx0ZXJNYXBbaXRlbV19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImZpbmRPbmVcIikge1xuICAgICAgICAgICAgICAgIC8vIGRlanVuY3Rpb25cbiAgICAgICAgICAgICAgICBxdWVyeS5hbmRXaGVyZShcIjAgPSAxXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19