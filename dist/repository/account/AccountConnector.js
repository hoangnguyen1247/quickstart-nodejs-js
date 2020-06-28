"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountConnector = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _typeorm = require("typeorm");

var _config = require("../../config");

var _User = require("../../entity/account/User");

// import { ICustomEntitySubscriberInterface } from '../../abstract/subscriber/ICustomEntitySubscriberInterface';
var AccountConnector = function AccountConnector() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, AccountConnector);
  this._connection = void 0;

  this.createConnection = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(diContainer) {
      var administratorUser, oAuthClientsUser;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (_this._connection) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return (0, _typeorm.createConnection)(_config.config.database.account.config);

            case 4:
              _this._connection = _context.sent;

            case 5:
              _context.next = 7;
              return _this._connection.manager.findOne(_User.User, 1);

            case 7:
              administratorUser = _context.sent;

              if (administratorUser) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return _this._connection.manager.save(new _User.User({
                id: 1,
                userType: "administrator",
                email: "developer@nhulanha.com",
                phoneNumber: "962427499",
                username: "developer@nhulanha.com"
              }));

            case 11:
              _context.next = 13;
              return _this._connection.manager.findOne(OAuthClients, 1);

            case 13:
              oAuthClientsUser = _context.sent;

              if (oAuthClientsUser) {
                _context.next = 17;
                break;
              }

              _context.next = 17;
              return _this._connection.manager.save(new OAuthClients({
                id: 1,
                clientId: "nhulanha",
                clientSecret: "nhulanha123",
                accessTokenLifetime: 129600,
                refreshTokenLifetime: 31536000,
                grants: ["password", "refresh_token"]
              }));

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              console.error("Account connection error: " + _context.t0);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 19]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  this.getConnection = function () {
    return _this._connection;
  };
};

exports.AccountConnector = AccountConnector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBvc2l0b3J5L2FjY291bnQvQWNjb3VudENvbm5lY3Rvci5qcyJdLCJuYW1lcyI6WyJBY2NvdW50Q29ubmVjdG9yIiwiX2Nvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiZGlDb250YWluZXIiLCJjb25maWciLCJkYXRhYmFzZSIsImFjY291bnQiLCJtYW5hZ2VyIiwiZmluZE9uZSIsIlVzZXIiLCJhZG1pbmlzdHJhdG9yVXNlciIsInNhdmUiLCJpZCIsInVzZXJUeXBlIiwiZW1haWwiLCJwaG9uZU51bWJlciIsInVzZXJuYW1lIiwiT0F1dGhDbGllbnRzIiwib0F1dGhDbGllbnRzVXNlciIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYWNjZXNzVG9rZW5MaWZldGltZSIsInJlZnJlc2hUb2tlbkxpZmV0aW1lIiwiZ3JhbnRzIiwiY29uc29sZSIsImVycm9yIiwiZ2V0Q29ubmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBREE7SUFHYUEsZ0IsR0FJVCw0QkFBYztBQUFBOztBQUFBO0FBQUEsT0FGZEMsV0FFYzs7QUFBQSxPQUdkQyxnQkFIYztBQUFBLDZGQUdLLGlCQUFPQyxXQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUVOLEtBQUksQ0FBQ0YsV0FGQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUdrQiwrQkFBaUJHLGVBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCRixNQUF6QyxDQUhsQjs7QUFBQTtBQUdQLGNBQUEsS0FBSSxDQUFDSCxXQUhFOztBQUFBO0FBQUE7QUFBQSxxQkFhcUIsS0FBSSxDQUFDQSxXQUFMLENBQWlCTSxPQUFqQixDQUF5QkMsT0FBekIsQ0FBaUNDLFVBQWpDLEVBQXVDLENBQXZDLENBYnJCOztBQUFBO0FBYUxDLGNBQUFBLGlCQWJLOztBQUFBLGtCQWNOQSxpQkFkTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQWVELEtBQUksQ0FBQ1QsV0FBTCxDQUFpQk0sT0FBakIsQ0FBeUJJLElBQXpCLENBQThCLElBQUlGLFVBQUosQ0FBUztBQUN6Q0csZ0JBQUFBLEVBQUUsRUFBRSxDQURxQztBQUV6Q0MsZ0JBQUFBLFFBQVEsRUFBRSxlQUYrQjtBQUd6Q0MsZ0JBQUFBLEtBQUssRUFBRSx3QkFIa0M7QUFJekNDLGdCQUFBQSxXQUFXLEVBQUUsV0FKNEI7QUFLekNDLGdCQUFBQSxRQUFRLEVBQUU7QUFMK0IsZUFBVCxDQUE5QixDQWZDOztBQUFBO0FBQUE7QUFBQSxxQkF3Qm9CLEtBQUksQ0FBQ2YsV0FBTCxDQUFpQk0sT0FBakIsQ0FBeUJDLE9BQXpCLENBQWlDUyxZQUFqQyxFQUErQyxDQUEvQyxDQXhCcEI7O0FBQUE7QUF3QkxDLGNBQUFBLGdCQXhCSzs7QUFBQSxrQkF5Qk5BLGdCQXpCTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQTBCRCxLQUFJLENBQUNqQixXQUFMLENBQWlCTSxPQUFqQixDQUF5QkksSUFBekIsQ0FBOEIsSUFBSU0sWUFBSixDQUFpQjtBQUNqREwsZ0JBQUFBLEVBQUUsRUFBRSxDQUQ2QztBQUVqRE8sZ0JBQUFBLFFBQVEsRUFBRSxVQUZ1QztBQUdqREMsZ0JBQUFBLFlBQVksRUFBRSxhQUhtQztBQUlqREMsZ0JBQUFBLG1CQUFtQixFQUFFLE1BSjRCO0FBS2pEQyxnQkFBQUEsb0JBQW9CLEVBQUUsUUFMMkI7QUFNakRDLGdCQUFBQSxNQUFNLEVBQUUsQ0FBQyxVQUFELEVBQWEsZUFBYjtBQU55QyxlQUFqQixDQUE5QixDQTFCQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBb0NYQyxjQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYywwQ0FBZDs7QUFwQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FITDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxPQTJDZEMsYUEzQ2MsR0EyQ0UsWUFBTTtBQUNsQixXQUFPLEtBQUksQ0FBQ3pCLFdBQVo7QUFDSCxHQTdDYTtBQUNiLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcbi8vIGltcG9ydCB7IElDdXN0b21FbnRpdHlTdWJzY3JpYmVySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3Qvc3Vic2NyaWJlci9JQ3VzdG9tRW50aXR5U3Vic2NyaWJlckludGVyZmFjZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vZW50aXR5L2FjY291bnQvVXNlcic7XG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29ubmVjdG9yIHtcblxuICAgIF9jb25uZWN0aW9uOiBDb25uZWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29ubmVjdGlvbiA9IGFzeW5jIChkaUNvbnRhaW5lcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oY29uZmlnLmRhdGFiYXNlLmFjY291bnQuY29uZmlnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLl9jb25uZWN0aW9uLnN1YnNjcmliZXJzO1xuICAgICAgICAgICAgLy8gaWYgKEFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnMpICYmIHN1YnNjcmliZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICBzdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAoc3Vic2NyaWJlciBhcyBJQ3VzdG9tRW50aXR5U3Vic2NyaWJlckludGVyZmFjZTxhbnk+KS5iaW5kQXJndW1lbnRzKGRpQ29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc3QgYWRtaW5pc3RyYXRvclVzZXIgPSBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLm1hbmFnZXIuZmluZE9uZShVc2VyLCAxKTtcbiAgICAgICAgICAgIGlmICghYWRtaW5pc3RyYXRvclVzZXIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLm1hbmFnZXIuc2F2ZShuZXcgVXNlcih7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICB1c2VyVHlwZTogXCJhZG1pbmlzdHJhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImRldmVsb3BlckBuaHVsYW5oYS5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IFwiOTYyNDI3NDk5XCIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcImRldmVsb3BlckBuaHVsYW5oYS5jb21cIixcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgb0F1dGhDbGllbnRzVXNlciA9IGF3YWl0IHRoaXMuX2Nvbm5lY3Rpb24ubWFuYWdlci5maW5kT25lKE9BdXRoQ2xpZW50cywgMSk7XG4gICAgICAgICAgICBpZiAoIW9BdXRoQ2xpZW50c1VzZXIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9jb25uZWN0aW9uLm1hbmFnZXIuc2F2ZShuZXcgT0F1dGhDbGllbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudElkOiBcIm5odWxhbmhhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFNlY3JldDogXCJuaHVsYW5oYTEyM1wiLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkxpZmV0aW1lOiAxMjk2MDAsXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbkxpZmV0aW1lOiAzMTUzNjAwMCxcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnRzOiBbXCJwYXNzd29yZFwiLCBcInJlZnJlc2hfdG9rZW5cIl0sXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQWNjb3VudCBjb25uZWN0aW9uIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbm5lY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uO1xuICAgIH1cbn1cbiJdfQ==