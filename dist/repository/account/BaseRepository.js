"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _typeorm = require("typeorm");

var _TypeUtils = require("../../utils/TypeUtils");

var _DateTimeUtils = require("../../utils/DateTimeUtils");

var _BaseEntity = require("../../entity/account/BaseEntity");

var BaseRepository = function BaseRepository(baseRepository) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BaseRepository);
  this._baseRepository = void 0;

  this.findMany = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(page, size) {
      var query, countQuery, selectColumns, parsedPage, parsedPageSize, data, count;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _this._baseRepository.createQueryBuilder("entity");
              countQuery = _this._baseRepository.createQueryBuilder("entity").select("COUNT(id)", "count").where("1 = 1"); // select

              selectColumns = ["id", "createdDate"];

              if (Array.isArray(selectColumns) && selectColumns.length > 0) {
                query.select((0, _toConsumableArray2["default"])(selectColumns.map(function (mItem) {
                  return "entity.".concat(mItem);
                })));
              } // conjunction


              query.where("1 = 1"); // offset, limit

              parsedPage = parseInt(page, 10);
              parsedPageSize = parseInt(size, 10);

              if ((0, _TypeUtils.isNumber)(parsedPage) && (0, _TypeUtils.isNumber)(parsedPageSize)) {
                query.offset(parsedPage * parsedPageSize).limit(parsedPageSize);
              }

              _context.next = 10;
              return query.getMany();

            case 10:
              data = _context.sent;
              _context.next = 13;
              return countQuery.getRawOne();

            case 13:
              count = _context.sent;
              return _context.abrupt("return", [data, (0, _typeof2["default"])(count) === "object" ? parseInt(count.count, 10) : 0]);

            case 15:
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

  this.search = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(filterMap, searchKey, searchFields, page, size, sortMap, resType) {
      var query, countQuery, allowResTypes, resTypeMap, selectColumns, allowSearchCols, parsedSearchCols, searchBrackets, allowFilterCols, parsedFilterKeys, allowSortCols, parsedSortCols, parsedPage, parsedPageSize, data, count;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = _this._baseRepository.createQueryBuilder("entity");
              countQuery = _this._baseRepository.createQueryBuilder("entity").select("COUNT(entity.id)", "count").where("1 = 1"); // select

              allowResTypes = ["list"];
              resTypeMap = {
                "list": ["id", "createdDate"]
              };
              selectColumns = allowResTypes[resType] ? resTypeMap[resType] : resTypeMap["list"];

              if (Array.isArray(selectColumns) && selectColumns.length > 0) {
                query.select((0, _toConsumableArray2["default"])(selectColumns.map(function (mItem) {
                  return "entity.".concat(mItem);
                })));
              } // conjunction


              query.where("1 = 1"); // search

              allowSearchCols = ["fullName"];
              parsedSearchCols = Array.isArray(searchFields) && searchFields.length > 0 ? searchFields.filter(function (fItem) {
                return allowSearchCols.includes(fItem);
              }) : [];

              if (searchKey && parsedSearchCols.length > 0) {
                searchBrackets = new _typeorm.Brackets(function (qb) {
                  qb.where("0 = 1");
                  parsedSearchCols.forEach(function (item) {
                    if (["fullName"].includes(item)) {
                      qb.orWhere("entity.".concat(item, " LIKE '%").concat(searchKey, "%'"));
                    } else {
                      qb.orWhere("entity.".concat(item, " = '").concat(searchKey, "'"));
                    }
                  });
                });
                query.andWhere(searchBrackets);
                countQuery.andWhere(searchBrackets);
              } // filters


              allowFilterCols = ["createdDate"];
              parsedFilterKeys = (0, _TypeUtils.isObject)(filterMap) ? Object.keys(filterMap).filter(function (fItem) {
                return allowFilterCols.includes(fItem);
              }) : [];

              if (Array.isArray(parsedFilterKeys) && parsedFilterKeys.length > 0) {
                parsedFilterKeys.forEach(function (item) {
                  if (["createdDate"].includes(item)) {
                    // Date
                    query.andWhere("DATE(entity.".concat(item, ") = ").concat(filterMap[item]));
                    countQuery.andWhere("DATE(entity.".concat(item, ") = ").concat(filterMap[item]));
                  } else {
                    if (typeof filterMap[item] === "string") {
                      query.andWhere("entity.".concat(item, " = '").concat(filterMap[item], "'"));
                      countQuery.andWhere("entity.".concat(item, " = '").concat(filterMap[item], "'"));
                    } else {
                      query.andWhere("entity.".concat(item, " = ").concat(filterMap[item]));
                      countQuery.andWhere("entity.".concat(item, " = ").concat(filterMap[item]));
                    }
                  }
                });
              } // order by


              allowSortCols = ["createdDate"];
              parsedSortCols = (0, _TypeUtils.isObject)(sortMap) ? Object.keys(sortMap).filter(function (fItem) {
                return allowSortCols.includes(fItem);
              }) : [];

              if (parsedSortCols.length > 0) {
                parsedSortCols.forEach(function (mItem, index) {
                  if (index === 0) {
                    query.orderBy("entity.".concat(mItem), parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                  } else {
                    query.addOrderBy("entity.".concat(mItem), parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                  }
                });
              } else {
                query.orderBy("entity.createdDate", "DESC");
              } // offset, limit


              parsedPage = parseInt(page, 10);
              parsedPageSize = parseInt(size, 10);

              if ((0, _TypeUtils.isNumber)(parsedPage) && (0, _TypeUtils.isNumber)(parsedPageSize)) {
                query.offset(parsedPage * parsedPageSize).limit(parsedPageSize);
              }

              _context2.next = 21;
              return query.getMany();

            case 21:
              data = _context2.sent;
              _context2.next = 24;
              return countQuery.getRawOne();

            case 24:
              count = _context2.sent;
              return _context2.abrupt("return", [data, (0, _typeof2["default"])(count) === "object" ? parseInt(count.count, 10) : 0]);

            case 26:
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

  this.findOneById = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this._baseRepository.findOne(id);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
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

  this.findOne = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(filterMap, searchKey, searchFields, resType) {
      var query, allowResTypes, resTypeMap, selectCols, allowFilterCols, parsedFilterCols;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              query = _this._baseRepository.createQueryBuilder("entity"); // select

              allowResTypes = ["list"];
              resTypeMap = {
                "list": ["id", "createdDate"]
              };
              selectCols = allowResTypes[resType] ? resTypeMap[resType] : resTypeMap["list"];

              if (Array.isArray(selectCols) && selectCols.length > 0) {
                query.select((0, _toConsumableArray2["default"])(selectCols.map(function (mItem) {
                  return "entity.".concat(mItem);
                })));
              } // conjunction


              query.where("1 = 1"); // filters

              allowFilterCols = ["id", "createdDate"];
              parsedFilterCols = (0, _TypeUtils.isObject)(filterMap) ? Object.keys(filterMap).filter(function (fIt) {
                return allowFilterCols.includes(fIt);
              }) : [];

              if (Array.isArray(parsedFilterCols) && parsedFilterCols.length > 0) {
                parsedFilterCols.forEach(function (key) {
                  if (["createdDate"].includes(key)) {
                    // Date
                    query.andWhere("DATE(entity.".concat(key, ") = '").concat(filterMap[key], "'"));
                  } else {
                    if (typeof filterMap[key] === "string") {
                      query.andWhere("entity.".concat(key, " = '").concat(filterMap[key], "'"));
                    } else {
                      query.andWhere("entity.".concat(key, " = ").concat(filterMap[key]));
                    }
                  }
                });
              } else {
                query.andWhere("0 = 1"); // dejunction
              } // get one


              _context4.next = 11;
              return query.getOne();

            case 11:
              return _context4.abrupt("return", _context4.sent);

            case 12:
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

  this.insert = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(entity) {
      var _ref6, id;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this._baseRepository.save(entity);

            case 2:
              _ref6 = _context5.sent;
              id = _ref6.id;

              if (!id) {
                _context5.next = 8;
                break;
              }

              _context5.next = 7;
              return _this.findOne({
                id: id
              });

            case 7:
              return _context5.abrupt("return", _context5.sent);

            case 8:
              return _context5.abrupt("return", null);

            case 9:
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

  this.insertMany = /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(entities) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this._baseRepository.save(entities);

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x16) {
      return _ref7.apply(this, arguments);
    };
  }();

  this.update = /*#__PURE__*/function () {
    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(entity) {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (entity) {
                _context7.next = 2;
                break;
              }

              throw Error();

            case 2:
              entity.lastModifiedDate = (0, _DateTimeUtils.newMySQLDateISOString)();
              _context7.next = 5;
              return _this._baseRepository.save(entity);

            case 5:
              return _context7.abrupt("return", _context7.sent);

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x17) {
      return _ref8.apply(this, arguments);
    };
  }();

  this["delete"] = /*#__PURE__*/function () {
    var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(entity) {
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _this._baseRepository.remove(entity);

            case 2:
              return _context8.abrupt("return", _context8.sent);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x18) {
      return _ref9.apply(this, arguments);
    };
  }();

  this.count = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
    var count;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _this._baseRepository.createQueryBuilder().select("COUNT(id)", "count").getRawOne();

          case 2:
            count = _context9.sent;
            return _context9.abrupt("return", (0, _typeof2["default"])(count) === "object" ? parseInt(count.count, 10) : 0);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  this.groupByKeyAndCount = /*#__PURE__*/function () {
    var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(key) {
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _this._baseRepository.createQueryBuilder("entity").select("entity.".concat(key), "".concat(key)).addSelect("COUNT(entity.id)", "count").groupBy("entity.".concat(key)).getRawMany();

            case 2:
              return _context10.abrupt("return", _context10.sent);

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x19) {
      return _ref11.apply(this, arguments);
    };
  }();

  this._baseRepository = baseRepository;
};

exports.BaseRepository = BaseRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBvc2l0b3J5L2FjY291bnQvQmFzZVJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsiQmFzZVJlcG9zaXRvcnkiLCJiYXNlUmVwb3NpdG9yeSIsIl9iYXNlUmVwb3NpdG9yeSIsImZpbmRNYW55IiwicGFnZSIsInNpemUiLCJxdWVyeSIsImNyZWF0ZVF1ZXJ5QnVpbGRlciIsImNvdW50UXVlcnkiLCJzZWxlY3QiLCJ3aGVyZSIsInNlbGVjdENvbHVtbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtYXAiLCJtSXRlbSIsInBhcnNlZFBhZ2UiLCJwYXJzZUludCIsInBhcnNlZFBhZ2VTaXplIiwib2Zmc2V0IiwibGltaXQiLCJnZXRNYW55IiwiZGF0YSIsImdldFJhd09uZSIsImNvdW50Iiwic2VhcmNoIiwiZmlsdGVyTWFwIiwic2VhcmNoS2V5Iiwic2VhcmNoRmllbGRzIiwic29ydE1hcCIsInJlc1R5cGUiLCJhbGxvd1Jlc1R5cGVzIiwicmVzVHlwZU1hcCIsImFsbG93U2VhcmNoQ29scyIsInBhcnNlZFNlYXJjaENvbHMiLCJmaWx0ZXIiLCJmSXRlbSIsImluY2x1ZGVzIiwic2VhcmNoQnJhY2tldHMiLCJCcmFja2V0cyIsInFiIiwiZm9yRWFjaCIsIml0ZW0iLCJvcldoZXJlIiwiYW5kV2hlcmUiLCJhbGxvd0ZpbHRlckNvbHMiLCJwYXJzZWRGaWx0ZXJLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImFsbG93U29ydENvbHMiLCJwYXJzZWRTb3J0Q29scyIsImluZGV4Iiwib3JkZXJCeSIsImFkZE9yZGVyQnkiLCJmaW5kT25lQnlJZCIsImlkIiwiZmluZE9uZSIsInNlbGVjdENvbHMiLCJwYXJzZWRGaWx0ZXJDb2xzIiwiZkl0Iiwia2V5IiwiZ2V0T25lIiwiaW5zZXJ0IiwiZW50aXR5Iiwic2F2ZSIsImluc2VydE1hbnkiLCJlbnRpdGllcyIsInVwZGF0ZSIsIkVycm9yIiwibGFzdE1vZGlmaWVkRGF0ZSIsInJlbW92ZSIsImdyb3VwQnlLZXlBbmRDb3VudCIsImFkZFNlbGVjdCIsImdyb3VwQnkiLCJnZXRSYXdNYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0lBRWFBLGMsR0FJVCx3QkFBWUMsY0FBWixFQUE0QjtBQUFBOztBQUFBO0FBQUEsT0FGNUJDLGVBRTRCOztBQUFBLE9BSTVCQyxRQUo0QjtBQUFBLDZGQUlqQixpQkFBTUMsSUFBTixFQUFZQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNEQyxjQUFBQSxLQURDLEdBQ08sS0FBSSxDQUFDSixlQUFMLENBQ1RLLGtCQURTLENBQ1UsUUFEVixDQURQO0FBR0RDLGNBQUFBLFVBSEMsR0FHWSxLQUFJLENBQUNOLGVBQUwsQ0FDZEssa0JBRGMsQ0FDSyxRQURMLEVBRWRFLE1BRmMsQ0FFUCxXQUZPLEVBRU0sT0FGTixFQUdkQyxLQUhjLENBR1IsT0FIUSxDQUhaLEVBUVA7O0FBQ01DLGNBQUFBLGFBVEMsR0FTZSxDQUFFLElBQUYsRUFBUSxhQUFSLENBVGY7O0FBVVAsa0JBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixhQUFkLEtBQWdDQSxhQUFhLENBQUNHLE1BQWQsR0FBdUIsQ0FBM0QsRUFBOEQ7QUFDMURSLGdCQUFBQSxLQUFLLENBQUNHLE1BQU4scUNBQ09FLGFBQWEsQ0FBQ0ksR0FBZCxDQUFrQixVQUFBQyxLQUFLO0FBQUEsMENBQWNBLEtBQWQ7QUFBQSxpQkFBdkIsQ0FEUDtBQUdILGVBZE0sQ0FnQlA7OztBQUNBVixjQUFBQSxLQUFLLENBQUNJLEtBQU4sQ0FBWSxPQUFaLEVBakJPLENBbUJQOztBQUNNTyxjQUFBQSxVQXBCQyxHQW9CWUMsUUFBUSxDQUFDZCxJQUFELEVBQU8sRUFBUCxDQXBCcEI7QUFxQkRlLGNBQUFBLGNBckJDLEdBcUJnQkQsUUFBUSxDQUFDYixJQUFELEVBQU8sRUFBUCxDQXJCeEI7O0FBc0JQLGtCQUFJLHlCQUFTWSxVQUFULEtBQXdCLHlCQUFTRSxjQUFULENBQTVCLEVBQXNEO0FBQ2xEYixnQkFBQUEsS0FBSyxDQUFDYyxNQUFOLENBQWFILFVBQVUsR0FBR0UsY0FBMUIsRUFBMENFLEtBQTFDLENBQWdERixjQUFoRDtBQUNIOztBQXhCTTtBQUFBLHFCQTBCWWIsS0FBSyxDQUFDZ0IsT0FBTixFQTFCWjs7QUFBQTtBQTBCREMsY0FBQUEsSUExQkM7QUFBQTtBQUFBLHFCQTJCYWYsVUFBVSxDQUFDZ0IsU0FBWCxFQTNCYjs7QUFBQTtBQTJCREMsY0FBQUEsS0EzQkM7QUFBQSwrQ0E2QkEsQ0FDSEYsSUFERyxFQUVILHlCQUFPRSxLQUFQLE1BQWlCLFFBQWpCLEdBQTRCUCxRQUFRLENBQUNPLEtBQUssQ0FBQ0EsS0FBUCxFQUFjLEVBQWQsQ0FBcEMsR0FBd0QsQ0FGckQsQ0E3QkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsT0F1QzVCQyxNQXZDNEI7QUFBQSw4RkF1Q25CLGtCQUFNQyxTQUFOLEVBQWlCQyxTQUFqQixFQUE0QkMsWUFBNUIsRUFBMEN6QixJQUExQyxFQUFnREMsSUFBaEQsRUFBc0R5QixPQUF0RCxFQUErREMsT0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0N6QixjQUFBQSxLQURELEdBQ1MsS0FBSSxDQUFDSixlQUFMLENBQ1RLLGtCQURTLENBQ1UsUUFEVixDQURUO0FBR0NDLGNBQUFBLFVBSEQsR0FHYyxLQUFJLENBQUNOLGVBQUwsQ0FDZEssa0JBRGMsQ0FDSyxRQURMLEVBRWRFLE1BRmMsQ0FFUCxrQkFGTyxFQUVhLE9BRmIsRUFHZEMsS0FIYyxDQUdSLE9BSFEsQ0FIZCxFQVFMOztBQUNNc0IsY0FBQUEsYUFURCxHQVNpQixDQUFDLE1BQUQsQ0FUakI7QUFVQ0MsY0FBQUEsVUFWRCxHQVVjO0FBQ2Ysd0JBQVEsQ0FBRSxJQUFGLEVBQVEsYUFBUjtBQURPLGVBVmQ7QUFhQ3RCLGNBQUFBLGFBYkQsR0FhaUJxQixhQUFhLENBQUNELE9BQUQsQ0FBYixHQUF5QkUsVUFBVSxDQUFDRixPQUFELENBQW5DLEdBQStDRSxVQUFVLENBQUMsTUFBRCxDQWIxRTs7QUFjTCxrQkFBSXJCLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixhQUFkLEtBQWdDQSxhQUFhLENBQUNHLE1BQWQsR0FBdUIsQ0FBM0QsRUFBOEQ7QUFDMURSLGdCQUFBQSxLQUFLLENBQUNHLE1BQU4scUNBQ09FLGFBQWEsQ0FBQ0ksR0FBZCxDQUFrQixVQUFBQyxLQUFLO0FBQUEsMENBQWNBLEtBQWQ7QUFBQSxpQkFBdkIsQ0FEUDtBQUdILGVBbEJJLENBb0JMOzs7QUFDQVYsY0FBQUEsS0FBSyxDQUFDSSxLQUFOLENBQVksT0FBWixFQXJCSyxDQXVCTDs7QUFDTXdCLGNBQUFBLGVBeEJELEdBd0JtQixDQUNwQixVQURvQixDQXhCbkI7QUEyQkNDLGNBQUFBLGdCQTNCRCxHQTJCb0J2QixLQUFLLENBQUNDLE9BQU4sQ0FBY2dCLFlBQWQsS0FBK0JBLFlBQVksQ0FBQ2YsTUFBYixHQUFzQixDQUFyRCxHQUNyQmUsWUFBWSxDQUFDTyxNQUFiLENBQW9CLFVBQUFDLEtBQUs7QUFBQSx1QkFBSUgsZUFBZSxDQUFDSSxRQUFoQixDQUF5QkQsS0FBekIsQ0FBSjtBQUFBLGVBQXpCLENBRHFCLEdBQzJDLEVBNUIvRDs7QUE2Qkwsa0JBQUlULFNBQVMsSUFBSU8sZ0JBQWdCLENBQUNyQixNQUFqQixHQUEwQixDQUEzQyxFQUE4QztBQUNwQ3lCLGdCQUFBQSxjQURvQyxHQUNuQixJQUFJQyxpQkFBSixDQUFhLFVBQUFDLEVBQUUsRUFBSTtBQUN0Q0Esa0JBQUFBLEVBQUUsQ0FBQy9CLEtBQUgsQ0FBUyxPQUFUO0FBQ0F5QixrQkFBQUEsZ0JBQWdCLENBQ1hPLE9BREwsQ0FDYSxVQUFBQyxJQUFJLEVBQUk7QUFDYix3QkFBSSxDQUFDLFVBQUQsRUFBYUwsUUFBYixDQUFzQkssSUFBdEIsQ0FBSixFQUFpQztBQUM3QkYsc0JBQUFBLEVBQUUsQ0FBQ0csT0FBSCxrQkFBcUJELElBQXJCLHFCQUFvQ2YsU0FBcEM7QUFDSCxxQkFGRCxNQUVPO0FBQ0hhLHNCQUFBQSxFQUFFLENBQUNHLE9BQUgsa0JBQXFCRCxJQUFyQixpQkFBZ0NmLFNBQWhDO0FBQ0g7QUFDSixtQkFQTDtBQVNILGlCQVhzQixDQURtQjtBQWExQ3RCLGdCQUFBQSxLQUFLLENBQUN1QyxRQUFOLENBQWVOLGNBQWY7QUFDQS9CLGdCQUFBQSxVQUFVLENBQUNxQyxRQUFYLENBQW9CTixjQUFwQjtBQUNILGVBNUNJLENBOENMOzs7QUFDTU8sY0FBQUEsZUEvQ0QsR0ErQ21CLENBQ3BCLGFBRG9CLENBL0NuQjtBQWtEQ0MsY0FBQUEsZ0JBbERELEdBa0RvQix5QkFBU3BCLFNBQVQsSUFBc0JxQixNQUFNLENBQUNDLElBQVAsQ0FBWXRCLFNBQVosRUFBdUJTLE1BQXZCLENBQThCLFVBQUFDLEtBQUs7QUFBQSx1QkFBSVMsZUFBZSxDQUFDUixRQUFoQixDQUF5QkQsS0FBekIsQ0FBSjtBQUFBLGVBQW5DLENBQXRCLEdBQWdHLEVBbERwSDs7QUFtREwsa0JBQUl6QixLQUFLLENBQUNDLE9BQU4sQ0FBY2tDLGdCQUFkLEtBQW1DQSxnQkFBZ0IsQ0FBQ2pDLE1BQWpCLEdBQTBCLENBQWpFLEVBQW9FO0FBQ2hFaUMsZ0JBQUFBLGdCQUFnQixDQUNYTCxPQURMLENBQ2EsVUFBQUMsSUFBSSxFQUFJO0FBQ2Isc0JBQUksQ0FBQyxhQUFELEVBQWdCTCxRQUFoQixDQUF5QkssSUFBekIsQ0FBSixFQUFvQztBQUFFO0FBQ2xDckMsb0JBQUFBLEtBQUssQ0FBQ3VDLFFBQU4sdUJBQThCRixJQUE5QixpQkFBeUNoQixTQUFTLENBQUNnQixJQUFELENBQWxEO0FBQ0FuQyxvQkFBQUEsVUFBVSxDQUFDcUMsUUFBWCx1QkFBbUNGLElBQW5DLGlCQUE4Q2hCLFNBQVMsQ0FBQ2dCLElBQUQsQ0FBdkQ7QUFDSCxtQkFIRCxNQUdPO0FBQ0gsd0JBQUksT0FBT2hCLFNBQVMsQ0FBQ2dCLElBQUQsQ0FBaEIsS0FBMkIsUUFBL0IsRUFBeUM7QUFDckNyQyxzQkFBQUEsS0FBSyxDQUFDdUMsUUFBTixrQkFBeUJGLElBQXpCLGlCQUFvQ2hCLFNBQVMsQ0FBQ2dCLElBQUQsQ0FBN0M7QUFDQW5DLHNCQUFBQSxVQUFVLENBQUNxQyxRQUFYLGtCQUE4QkYsSUFBOUIsaUJBQXlDaEIsU0FBUyxDQUFDZ0IsSUFBRCxDQUFsRDtBQUNILHFCQUhELE1BR087QUFDSHJDLHNCQUFBQSxLQUFLLENBQUN1QyxRQUFOLGtCQUF5QkYsSUFBekIsZ0JBQW1DaEIsU0FBUyxDQUFDZ0IsSUFBRCxDQUE1QztBQUNBbkMsc0JBQUFBLFVBQVUsQ0FBQ3FDLFFBQVgsa0JBQThCRixJQUE5QixnQkFBd0NoQixTQUFTLENBQUNnQixJQUFELENBQWpEO0FBQ0g7QUFDSjtBQUNKLGlCQWRMO0FBZUgsZUFuRUksQ0FxRUw7OztBQUNNTyxjQUFBQSxhQXRFRCxHQXNFaUIsQ0FDbEIsYUFEa0IsQ0F0RWpCO0FBeUVDQyxjQUFBQSxjQXpFRCxHQXlFa0IseUJBQVNyQixPQUFULElBQW9Ca0IsTUFBTSxDQUFDQyxJQUFQLENBQVluQixPQUFaLEVBQXFCTSxNQUFyQixDQUE0QixVQUFBQyxLQUFLO0FBQUEsdUJBQUlhLGFBQWEsQ0FBQ1osUUFBZCxDQUF1QkQsS0FBdkIsQ0FBSjtBQUFBLGVBQWpDLENBQXBCLEdBQTBGLEVBekU1Rzs7QUEwRUwsa0JBQUljLGNBQWMsQ0FBQ3JDLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDM0JxQyxnQkFBQUEsY0FBYyxDQUNUVCxPQURMLENBQ2EsVUFBQzFCLEtBQUQsRUFBUW9DLEtBQVIsRUFBa0I7QUFDdkIsc0JBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2I5QyxvQkFBQUEsS0FBSyxDQUFDK0MsT0FBTixrQkFBd0JyQyxLQUF4QixHQUFpQ0UsUUFBUSxDQUFDWSxPQUFPLENBQUNkLEtBQUQsQ0FBUixFQUFpQixFQUFqQixDQUFSLEtBQWlDLENBQWpDLEdBQXFDLE1BQXJDLEdBQThDLEtBQS9FO0FBQ0gsbUJBRkQsTUFFTztBQUNIVixvQkFBQUEsS0FBSyxDQUFDZ0QsVUFBTixrQkFBMkJ0QyxLQUEzQixHQUFvQ0UsUUFBUSxDQUFDWSxPQUFPLENBQUNkLEtBQUQsQ0FBUixFQUFpQixFQUFqQixDQUFSLEtBQWlDLENBQWpDLEdBQXFDLE1BQXJDLEdBQThDLEtBQWxGO0FBQ0g7QUFDSixpQkFQTDtBQVFILGVBVEQsTUFTTztBQUNIVixnQkFBQUEsS0FBSyxDQUFDK0MsT0FBTixDQUFjLG9CQUFkLEVBQW9DLE1BQXBDO0FBQ0gsZUFyRkksQ0F1Rkw7OztBQUNNcEMsY0FBQUEsVUF4RkQsR0F3RmNDLFFBQVEsQ0FBQ2QsSUFBRCxFQUFPLEVBQVAsQ0F4RnRCO0FBeUZDZSxjQUFBQSxjQXpGRCxHQXlGa0JELFFBQVEsQ0FBQ2IsSUFBRCxFQUFPLEVBQVAsQ0F6RjFCOztBQTBGTCxrQkFBSSx5QkFBU1ksVUFBVCxLQUF3Qix5QkFBU0UsY0FBVCxDQUE1QixFQUFzRDtBQUNsRGIsZ0JBQUFBLEtBQUssQ0FBQ2MsTUFBTixDQUFhSCxVQUFVLEdBQUdFLGNBQTFCLEVBQTBDRSxLQUExQyxDQUFnREYsY0FBaEQ7QUFDSDs7QUE1Rkk7QUFBQSxxQkE4RmNiLEtBQUssQ0FBQ2dCLE9BQU4sRUE5RmQ7O0FBQUE7QUE4RkNDLGNBQUFBLElBOUZEO0FBQUE7QUFBQSxxQkErRmVmLFVBQVUsQ0FBQ2dCLFNBQVgsRUEvRmY7O0FBQUE7QUErRkNDLGNBQUFBLEtBL0ZEO0FBQUEsZ0RBaUdFLENBQ0hGLElBREcsRUFFSCx5QkFBT0UsS0FBUCxNQUFpQixRQUFqQixHQUE0QlAsUUFBUSxDQUFDTyxLQUFLLENBQUNBLEtBQVAsRUFBYyxFQUFkLENBQXBDLEdBQXdELENBRnJELENBakdGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdkNtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxPQThKNUI4QixXQTlKNEI7QUFBQSw4RkE4SmQsa0JBQU1DLEVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0csS0FBSSxDQUFDdEQsZUFBTCxDQUFxQnVELE9BQXJCLENBQTZCRCxFQUE3QixDQURIOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E5SmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsT0FrSzVCQyxPQWxLNEI7QUFBQSw4RkFrS2xCLGtCQUFNOUIsU0FBTixFQUFpQkMsU0FBakIsRUFBNkJDLFlBQTdCLEVBQTRDRSxPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQXpCLGNBQUFBLEtBREEsR0FDUSxLQUFJLENBQUNKLGVBQUwsQ0FDVEssa0JBRFMsQ0FDVSxRQURWLENBRFIsRUFJTjs7QUFDTXlCLGNBQUFBLGFBTEEsR0FLZ0IsQ0FBQyxNQUFELENBTGhCO0FBTUFDLGNBQUFBLFVBTkEsR0FNYTtBQUNmLHdCQUFRLENBQUUsSUFBRixFQUFRLGFBQVI7QUFETyxlQU5iO0FBU0F5QixjQUFBQSxVQVRBLEdBU2ExQixhQUFhLENBQUNELE9BQUQsQ0FBYixHQUF5QkUsVUFBVSxDQUFDRixPQUFELENBQW5DLEdBQStDRSxVQUFVLENBQUMsTUFBRCxDQVR0RTs7QUFVTixrQkFBSXJCLEtBQUssQ0FBQ0MsT0FBTixDQUFjNkMsVUFBZCxLQUE2QkEsVUFBVSxDQUFDNUMsTUFBWCxHQUFvQixDQUFyRCxFQUF3RDtBQUNwRFIsZ0JBQUFBLEtBQUssQ0FBQ0csTUFBTixxQ0FDT2lELFVBQVUsQ0FBQzNDLEdBQVgsQ0FBZSxVQUFBQyxLQUFLO0FBQUEsMENBQWNBLEtBQWQ7QUFBQSxpQkFBcEIsQ0FEUDtBQUdILGVBZEssQ0FnQk47OztBQUNBVixjQUFBQSxLQUFLLENBQUNJLEtBQU4sQ0FBWSxPQUFaLEVBakJNLENBbUJOOztBQUNNb0MsY0FBQUEsZUFwQkEsR0FvQmtCLENBQ3BCLElBRG9CLEVBRXBCLGFBRm9CLENBcEJsQjtBQXdCQWEsY0FBQUEsZ0JBeEJBLEdBd0JtQix5QkFBU2hDLFNBQVQsSUFBc0JxQixNQUFNLENBQUNDLElBQVAsQ0FBWXRCLFNBQVosRUFBdUJTLE1BQXZCLENBQThCLFVBQUF3QixHQUFHO0FBQUEsdUJBQUlkLGVBQWUsQ0FBQ1IsUUFBaEIsQ0FBeUJzQixHQUF6QixDQUFKO0FBQUEsZUFBakMsQ0FBdEIsR0FBNEYsRUF4Qi9HOztBQXlCTixrQkFBSWhELEtBQUssQ0FBQ0MsT0FBTixDQUFjOEMsZ0JBQWQsS0FBbUNBLGdCQUFnQixDQUFDN0MsTUFBakIsR0FBMEIsQ0FBakUsRUFBb0U7QUFDaEU2QyxnQkFBQUEsZ0JBQWdCLENBQ1hqQixPQURMLENBQ2EsVUFBQ21CLEdBQUQsRUFBUztBQUNkLHNCQUFJLENBQUMsYUFBRCxFQUFnQnZCLFFBQWhCLENBQXlCdUIsR0FBekIsQ0FBSixFQUFtQztBQUFFO0FBQ2pDdkQsb0JBQUFBLEtBQUssQ0FBQ3VDLFFBQU4sdUJBQThCZ0IsR0FBOUIsa0JBQXlDbEMsU0FBUyxDQUFDa0MsR0FBRCxDQUFsRDtBQUNILG1CQUZELE1BRU87QUFDSCx3QkFBSSxPQUFPbEMsU0FBUyxDQUFDa0MsR0FBRCxDQUFoQixLQUEwQixRQUE5QixFQUF3QztBQUNwQ3ZELHNCQUFBQSxLQUFLLENBQUN1QyxRQUFOLGtCQUF5QmdCLEdBQXpCLGlCQUFtQ2xDLFNBQVMsQ0FBQ2tDLEdBQUQsQ0FBNUM7QUFDSCxxQkFGRCxNQUVPO0FBQ0h2RCxzQkFBQUEsS0FBSyxDQUFDdUMsUUFBTixrQkFBeUJnQixHQUF6QixnQkFBa0NsQyxTQUFTLENBQUNrQyxHQUFELENBQTNDO0FBQ0g7QUFDSjtBQUNKLGlCQVhMO0FBWUgsZUFiRCxNQWFPO0FBQ0h2RCxnQkFBQUEsS0FBSyxDQUFDdUMsUUFBTixDQUFlLE9BQWYsRUFERyxDQUNzQjtBQUM1QixlQXhDSyxDQTBDTjs7O0FBMUNNO0FBQUEscUJBMkNPdkMsS0FBSyxDQUFDd0QsTUFBTixFQTNDUDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbEtrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxPQWdONUJDLE1BaE40QjtBQUFBLDhGQWdObkIsa0JBQU9DLE1BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2dCLEtBQUksQ0FBQzlELGVBQUwsQ0FBcUIrRCxJQUFyQixDQUEwQkQsTUFBMUIsQ0FEaEI7O0FBQUE7QUFBQTtBQUNHUixjQUFBQSxFQURILFNBQ0dBLEVBREg7O0FBQUEsbUJBR0RBLEVBSEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFJWSxLQUFJLENBQUNDLE9BQUwsQ0FBYTtBQUFFRCxnQkFBQUEsRUFBRSxFQUFFQTtBQUFOLGVBQWIsQ0FKWjs7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ0RBT0UsSUFQRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhObUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsT0EwTjVCVSxVQTFONEI7QUFBQSw4RkEwTmYsa0JBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0ksS0FBSSxDQUFDakUsZUFBTCxDQUFxQitELElBQXJCLENBQTBCRSxRQUExQixDQURKOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExTmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsT0E4TjVCQyxNQTlONEI7QUFBQSw4RkE4Tm5CLGtCQUFNSixNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDQUEsTUFEQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFFS0ssS0FBSyxFQUZWOztBQUFBO0FBSUxMLGNBQUFBLE1BQU0sQ0FBQ00sZ0JBQVAsR0FBMEIsMkNBQTFCO0FBSks7QUFBQSxxQkFNUSxLQUFJLENBQUNwRSxlQUFMLENBQXFCK0QsSUFBckIsQ0FBMEJELE1BQTFCLENBTlI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTlObUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4RkF1T25CLGtCQUFNQSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNRLEtBQUksQ0FBQzlELGVBQUwsQ0FBcUJxRSxNQUFyQixDQUE0QlAsTUFBNUIsQ0FEUjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdk9tQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxPQTJPNUJ2QyxLQTNPNEIsOEZBMk9wQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNnQixLQUFJLENBQUN2QixlQUFMLENBQ2ZLLGtCQURlLEdBRWZFLE1BRmUsQ0FFUixXQUZRLEVBRUssT0FGTCxFQUdmZSxTQUhlLEVBRGhCOztBQUFBO0FBQ0VDLFlBQUFBLEtBREY7QUFBQSw4Q0FNRyx5QkFBT0EsS0FBUCxNQUFpQixRQUFqQixHQUE0QlAsUUFBUSxDQUFDTyxLQUFLLENBQUNBLEtBQVAsRUFBYyxFQUFkLENBQXBDLEdBQXdELENBTjNEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBM09vQjs7QUFBQSxPQW9QNUIrQyxrQkFwUDRCO0FBQUEsK0ZBb1BQLG1CQUFNWCxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNKLEtBQUksQ0FBQzNELGVBQUwsQ0FDUkssa0JBRFEsQ0FDVyxRQURYLEVBRVJFLE1BRlEsa0JBRVNvRCxHQUZULGFBRW1CQSxHQUZuQixHQUdSWSxTQUhRLHFCQUdzQixPQUh0QixFQUlSQyxPQUpRLGtCQUlVYixHQUpWLEdBS1JjLFVBTFEsRUFESTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcFBPOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUN4QixPQUFLekUsZUFBTCxHQUF1QkQsY0FBdkI7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJhY2tldHMsIFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5pbXBvcnQgeyBpc051bWJlciwgaXNPYmplY3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVHlwZVV0aWxzXCI7XG5pbXBvcnQgeyBuZXdNeVNRTERhdGVJU09TdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9EYXRlVGltZVV0aWxzJztcblxuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gXCIuLi8uLi9lbnRpdHkvYWNjb3VudC9CYXNlRW50aXR5XCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVwb3NpdG9yeSB7XG5cbiAgICBfYmFzZVJlcG9zaXRvcnk7XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlUmVwb3NpdG9yeSkge1xuICAgICAgICB0aGlzLl9iYXNlUmVwb3NpdG9yeSA9IGJhc2VSZXBvc2l0b3J5O1xuICAgIH1cblxuICAgIGZpbmRNYW55ID0gYXN5bmMocGFnZSwgc2l6ZSkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuX2Jhc2VSZXBvc2l0b3J5XG4gICAgICAgICAgICAuY3JlYXRlUXVlcnlCdWlsZGVyKFwiZW50aXR5XCIpO1xuICAgICAgICBjb25zdCBjb3VudFF1ZXJ5ID0gdGhpcy5fYmFzZVJlcG9zaXRvcnlcbiAgICAgICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJlbnRpdHlcIilcbiAgICAgICAgICAgIC5zZWxlY3QoXCJDT1VOVChpZClcIiwgXCJjb3VudFwiKVxuICAgICAgICAgICAgLndoZXJlKFwiMSA9IDFcIik7XG5cbiAgICAgICAgLy8gc2VsZWN0XG4gICAgICAgIGNvbnN0IHNlbGVjdENvbHVtbnMgPSBbIFwiaWRcIiwgXCJjcmVhdGVkRGF0ZVwiIF07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdENvbHVtbnMpICYmIHNlbGVjdENvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KFtcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RDb2x1bW5zLm1hcChtSXRlbSA9PiBgZW50aXR5LiR7bUl0ZW19YCksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmp1bmN0aW9uXG4gICAgICAgIHF1ZXJ5LndoZXJlKFwiMSA9IDFcIik7XG5cbiAgICAgICAgLy8gb2Zmc2V0LCBsaW1pdFxuICAgICAgICBjb25zdCBwYXJzZWRQYWdlID0gcGFyc2VJbnQocGFnZSwgMTApO1xuICAgICAgICBjb25zdCBwYXJzZWRQYWdlU2l6ZSA9IHBhcnNlSW50KHNpemUsIDEwKTtcbiAgICAgICAgaWYgKGlzTnVtYmVyKHBhcnNlZFBhZ2UpICYmIGlzTnVtYmVyKHBhcnNlZFBhZ2VTaXplKSkge1xuICAgICAgICAgICAgcXVlcnkub2Zmc2V0KHBhcnNlZFBhZ2UgKiBwYXJzZWRQYWdlU2l6ZSkubGltaXQocGFyc2VkUGFnZVNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5LmdldE1hbnkoKTtcbiAgICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBjb3VudFF1ZXJ5LmdldFJhd09uZSgpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgdHlwZW9mIGNvdW50ID09PSBcIm9iamVjdFwiID8gcGFyc2VJbnQoY291bnQuY291bnQsIDEwKSA6IDAsXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHNlYXJjaCA9IGFzeW5jKGZpbHRlck1hcCwgc2VhcmNoS2V5LCBzZWFyY2hGaWVsZHMsIHBhZ2UsIHNpemUsIHNvcnRNYXAsIHJlc1R5cGUpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLl9iYXNlUmVwb3NpdG9yeVxuICAgICAgICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcihcImVudGl0eVwiKTtcbiAgICAgICAgY29uc3QgY291bnRRdWVyeSA9IHRoaXMuX2Jhc2VSZXBvc2l0b3J5XG4gICAgICAgICAgICAuY3JlYXRlUXVlcnlCdWlsZGVyKFwiZW50aXR5XCIpXG4gICAgICAgICAgICAuc2VsZWN0KFwiQ09VTlQoZW50aXR5LmlkKVwiLCBcImNvdW50XCIpXG4gICAgICAgICAgICAud2hlcmUoXCIxID0gMVwiKTtcblxuICAgICAgICAvLyBzZWxlY3RcbiAgICAgICAgY29uc3QgYWxsb3dSZXNUeXBlcyA9IFtcImxpc3RcIl07XG4gICAgICAgIGNvbnN0IHJlc1R5cGVNYXAgPSB7XG4gICAgICAgICAgICBcImxpc3RcIjogWyBcImlkXCIsIFwiY3JlYXRlZERhdGVcIiBdLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzZWxlY3RDb2x1bW5zID0gYWxsb3dSZXNUeXBlc1tyZXNUeXBlXSA/IHJlc1R5cGVNYXBbcmVzVHlwZV0gOiByZXNUeXBlTWFwW1wibGlzdFwiXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0Q29sdW1ucykgJiYgc2VsZWN0Q29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBxdWVyeS5zZWxlY3QoW1xuICAgICAgICAgICAgICAgIC4uLnNlbGVjdENvbHVtbnMubWFwKG1JdGVtID0+IGBlbnRpdHkuJHttSXRlbX1gKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uanVuY3Rpb25cbiAgICAgICAgcXVlcnkud2hlcmUoXCIxID0gMVwiKTtcblxuICAgICAgICAvLyBzZWFyY2hcbiAgICAgICAgY29uc3QgYWxsb3dTZWFyY2hDb2xzID0gW1xuICAgICAgICAgICAgXCJmdWxsTmFtZVwiLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBwYXJzZWRTZWFyY2hDb2xzID0gQXJyYXkuaXNBcnJheShzZWFyY2hGaWVsZHMpICYmIHNlYXJjaEZpZWxkcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIHNlYXJjaEZpZWxkcy5maWx0ZXIoZkl0ZW0gPT4gYWxsb3dTZWFyY2hDb2xzLmluY2x1ZGVzKGZJdGVtKSkgOiBbXTtcbiAgICAgICAgaWYgKHNlYXJjaEtleSAmJiBwYXJzZWRTZWFyY2hDb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaEJyYWNrZXRzID0gbmV3IEJyYWNrZXRzKHFiID0+IHtcbiAgICAgICAgICAgICAgICBxYi53aGVyZShcIjAgPSAxXCIpO1xuICAgICAgICAgICAgICAgIHBhcnNlZFNlYXJjaENvbHNcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoW1wiZnVsbE5hbWVcIl0uaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxYi5vcldoZXJlKGBlbnRpdHkuJHtpdGVtfSBMSUtFICclJHtzZWFyY2hLZXl9JSdgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcWIub3JXaGVyZShgZW50aXR5LiR7aXRlbX0gPSAnJHtzZWFyY2hLZXl9J2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKHNlYXJjaEJyYWNrZXRzKTtcbiAgICAgICAgICAgIGNvdW50UXVlcnkuYW5kV2hlcmUoc2VhcmNoQnJhY2tldHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlsdGVyc1xuICAgICAgICBjb25zdCBhbGxvd0ZpbHRlckNvbHMgPSBbXG4gICAgICAgICAgICBcImNyZWF0ZWREYXRlXCIsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHBhcnNlZEZpbHRlcktleXMgPSBpc09iamVjdChmaWx0ZXJNYXApID8gT2JqZWN0LmtleXMoZmlsdGVyTWFwKS5maWx0ZXIoZkl0ZW0gPT4gYWxsb3dGaWx0ZXJDb2xzLmluY2x1ZGVzKGZJdGVtKSkgOiBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyc2VkRmlsdGVyS2V5cykgJiYgcGFyc2VkRmlsdGVyS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJzZWRGaWx0ZXJLZXlzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbXCJjcmVhdGVkRGF0ZVwiXS5pbmNsdWRlcyhpdGVtKSkgeyAvLyBEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5hbmRXaGVyZShgREFURShlbnRpdHkuJHtpdGVtfSkgPSAke2ZpbHRlck1hcFtpdGVtXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50UXVlcnkuYW5kV2hlcmUoYERBVEUoZW50aXR5LiR7aXRlbX0pID0gJHtmaWx0ZXJNYXBbaXRlbV19YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpbHRlck1hcFtpdGVtXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKGBlbnRpdHkuJHtpdGVtfSA9ICcke2ZpbHRlck1hcFtpdGVtXX0nYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRRdWVyeS5hbmRXaGVyZShgZW50aXR5LiR7aXRlbX0gPSAnJHtmaWx0ZXJNYXBbaXRlbV19J2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5hbmRXaGVyZShgZW50aXR5LiR7aXRlbX0gPSAke2ZpbHRlck1hcFtpdGVtXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudFF1ZXJ5LmFuZFdoZXJlKGBlbnRpdHkuJHtpdGVtfSA9ICR7ZmlsdGVyTWFwW2l0ZW1dfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgLy8gb3JkZXIgYnlcbiAgICAgICAgY29uc3QgYWxsb3dTb3J0Q29scyA9IFtcbiAgICAgICAgICAgIFwiY3JlYXRlZERhdGVcIixcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcGFyc2VkU29ydENvbHMgPSBpc09iamVjdChzb3J0TWFwKSA/IE9iamVjdC5rZXlzKHNvcnRNYXApLmZpbHRlcihmSXRlbSA9PiBhbGxvd1NvcnRDb2xzLmluY2x1ZGVzKGZJdGVtKSkgOiBbXTtcbiAgICAgICAgaWYgKHBhcnNlZFNvcnRDb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcnNlZFNvcnRDb2xzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG1JdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm9yZGVyQnkoYGVudGl0eS4ke21JdGVtfWAsIHBhcnNlSW50KHNvcnRNYXBbbUl0ZW1dLCAxMCkgPT09IDEgPyAnREVTQycgOiAnQVNDJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5hZGRPcmRlckJ5KGBlbnRpdHkuJHttSXRlbX1gLCBwYXJzZUludChzb3J0TWFwW21JdGVtXSwgMTApID09PSAxID8gJ0RFU0MnIDogJ0FTQycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS5vcmRlckJ5KFwiZW50aXR5LmNyZWF0ZWREYXRlXCIsIFwiREVTQ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9mZnNldCwgbGltaXRcbiAgICAgICAgY29uc3QgcGFyc2VkUGFnZSA9IHBhcnNlSW50KHBhZ2UsIDEwKTtcbiAgICAgICAgY29uc3QgcGFyc2VkUGFnZVNpemUgPSBwYXJzZUludChzaXplLCAxMCk7XG4gICAgICAgIGlmIChpc051bWJlcihwYXJzZWRQYWdlKSAmJiBpc051bWJlcihwYXJzZWRQYWdlU2l6ZSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5Lm9mZnNldChwYXJzZWRQYWdlICogcGFyc2VkUGFnZVNpemUpLmxpbWl0KHBhcnNlZFBhZ2VTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBxdWVyeS5nZXRNYW55KCk7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgY291bnRRdWVyeS5nZXRSYXdPbmUoKTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHR5cGVvZiBjb3VudCA9PT0gXCJvYmplY3RcIiA/IHBhcnNlSW50KGNvdW50LmNvdW50LCAxMCkgOiAwLFxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICAvLyBmaW5kT25lQnlJZCA9IGFzeW5jKGlkKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5fYmFzZVJlcG9zaXRvcnlcbiAgICAvLyAgICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJlbnRpdHlcIik7XG5cbiAgICAvLyAgICAgLy8gc2VsZWN0XG4gICAgLy8gICAgIHF1ZXJ5LnNlbGVjdChbXG4gICAgLy8gICAgICAgICAuLi5bXCJpZFwiLCBcImNyZWF0ZWREYXRlXCJdLm1hcChtSXRlbSA9PiBgZW50aXR5LiR7bUl0ZW19YCksXG4gICAgLy8gICAgIF0gYXMgc3RyaW5nW10pO1xuXG4gICAgLy8gICAgIC8vIHdoZXJlXG4gICAgLy8gICAgIHF1ZXJ5LndoZXJlKGBlbnRpdHkuaWQgPSAke2lkfWApO1xuXG4gICAgLy8gICAgIC8vIGdldCBvbmVcbiAgICAvLyAgICAgcmV0dXJuIGF3YWl0IHF1ZXJ5LmdldE9uZSgpO1xuICAgIC8vIH07XG5cbiAgICBmaW5kT25lQnlJZCA9IGFzeW5jKGlkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2Jhc2VSZXBvc2l0b3J5LmZpbmRPbmUoaWQpO1xuICAgIH07XG5cbiAgICBmaW5kT25lID0gYXN5bmMoZmlsdGVyTWFwLCBzZWFyY2hLZXk/LCBzZWFyY2hGaWVsZHM/LCByZXNUeXBlPyk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5fYmFzZVJlcG9zaXRvcnlcbiAgICAgICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJlbnRpdHlcIik7XG5cbiAgICAgICAgLy8gc2VsZWN0XG4gICAgICAgIGNvbnN0IGFsbG93UmVzVHlwZXMgPSBbXCJsaXN0XCJdO1xuICAgICAgICBjb25zdCByZXNUeXBlTWFwID0ge1xuICAgICAgICAgICAgXCJsaXN0XCI6IFsgXCJpZFwiLCBcImNyZWF0ZWREYXRlXCIgXSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2VsZWN0Q29scyA9IGFsbG93UmVzVHlwZXNbcmVzVHlwZV0gPyByZXNUeXBlTWFwW3Jlc1R5cGVdIDogcmVzVHlwZU1hcFtcImxpc3RcIl07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdENvbHMpICYmIHNlbGVjdENvbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KFtcbiAgICAgICAgICAgICAgICAuLi5zZWxlY3RDb2xzLm1hcChtSXRlbSA9PiBgZW50aXR5LiR7bUl0ZW19YCksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmp1bmN0aW9uXG4gICAgICAgIHF1ZXJ5LndoZXJlKFwiMSA9IDFcIik7XG5cbiAgICAgICAgLy8gZmlsdGVyc1xuICAgICAgICBjb25zdCBhbGxvd0ZpbHRlckNvbHMgPSBbXG4gICAgICAgICAgICBcImlkXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWREYXRlXCIsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHBhcnNlZEZpbHRlckNvbHMgPSBpc09iamVjdChmaWx0ZXJNYXApID8gT2JqZWN0LmtleXMoZmlsdGVyTWFwKS5maWx0ZXIoZkl0ID0+IGFsbG93RmlsdGVyQ29scy5pbmNsdWRlcyhmSXQpKSA6IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZWRGaWx0ZXJDb2xzKSAmJiBwYXJzZWRGaWx0ZXJDb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcnNlZEZpbHRlckNvbHNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbXCJjcmVhdGVkRGF0ZVwiXS5pbmNsdWRlcyhrZXkpKSB7IC8vIERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKGBEQVRFKGVudGl0eS4ke2tleX0pID0gJyR7ZmlsdGVyTWFwW2tleV19J2ApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXJNYXBba2V5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKGBlbnRpdHkuJHtrZXl9ID0gJyR7ZmlsdGVyTWFwW2tleV19J2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5hbmRXaGVyZShgZW50aXR5LiR7a2V5fSA9ICR7ZmlsdGVyTWFwW2tleV19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LmFuZFdoZXJlKFwiMCA9IDFcIik7IC8vIGRlanVuY3Rpb25cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBvbmVcbiAgICAgICAgcmV0dXJuIGF3YWl0IHF1ZXJ5LmdldE9uZSgpO1xuICAgIH07XG5cbiAgICBpbnNlcnQgPSBhc3luYyAoZW50aXR5OiBCYXNlRW50aXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGF3YWl0IHRoaXMuX2Jhc2VSZXBvc2l0b3J5LnNhdmUoZW50aXR5KTtcblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbmRPbmUoeyBpZDogaWQgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgaW5zZXJ0TWFueSA9IGFzeW5jKGVudGl0aWVzOiBCYXNlRW50aXR5W10pID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2Jhc2VSZXBvc2l0b3J5LnNhdmUoZW50aXRpZXMpO1xuICAgIH07XG5cbiAgICB1cGRhdGUgPSBhc3luYyhlbnRpdHk6IEJhc2VFbnRpdHkpID0+IHtcbiAgICAgICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZW50aXR5Lmxhc3RNb2RpZmllZERhdGUgPSBuZXdNeVNRTERhdGVJU09TdHJpbmcoKTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fYmFzZVJlcG9zaXRvcnkuc2F2ZShlbnRpdHkpO1xuICAgIH07XG5cbiAgICBkZWxldGUgPSBhc3luYyhlbnRpdHk6IFQpID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2Jhc2VSZXBvc2l0b3J5LnJlbW92ZShlbnRpdHkpO1xuICAgIH07XG5cbiAgICBjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSBhd2FpdCB0aGlzLl9iYXNlUmVwb3NpdG9yeVxuICAgICAgICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAgICAgICAuc2VsZWN0KFwiQ09VTlQoaWQpXCIsIFwiY291bnRcIilcbiAgICAgICAgICAgIC5nZXRSYXdPbmUoKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGNvdW50ID09PSBcIm9iamVjdFwiID8gcGFyc2VJbnQoY291bnQuY291bnQsIDEwKSA6IDA7XG4gICAgfVxuICAgIFxuICAgIGdyb3VwQnlLZXlBbmRDb3VudCA9IGFzeW5jKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fYmFzZVJlcG9zaXRvcnlcbiAgICAgICAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoXCJlbnRpdHlcIilcbiAgICAgICAgICAgIC5zZWxlY3QoYGVudGl0eS4ke2tleX1gLCBgJHtrZXl9YClcbiAgICAgICAgICAgIC5hZGRTZWxlY3QoYENPVU5UKGVudGl0eS5pZClgLCBcImNvdW50XCIpXG4gICAgICAgICAgICAuZ3JvdXBCeShgZW50aXR5LiR7a2V5fWApXG4gICAgICAgICAgICAuZ2V0UmF3TWFueSgpO1xuICAgIH07XG59XG4iXX0=