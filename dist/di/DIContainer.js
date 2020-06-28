"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIContainer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _nodeDependencyInjection = require("node-dependency-injection");

var _AccountConnector = require("../repository/account/AccountConnector");

var _UserRepository = require("../repository/account/UserRepository");

var _UserService = require("../service/account/UserService");

var DIContainer = /*#__PURE__*/function () {
  function DIContainer() {
    (0, _classCallCheck2["default"])(this, DIContainer);
    this._container = new _nodeDependencyInjection.ContainerBuilder();
  }

  (0, _createClass2["default"])(DIContainer, [{
    key: "createRegister",
    value: function createRegister() {
      //
      //
      //
      //
      this._container.register("accountConnector", _AccountConnector.AccountConnector);

      this._container.register("userRepository", _UserRepository.UserRepository).addArgument(new _nodeDependencyInjection.Reference("accountConnector"));

      this._container.register("userService", _UserService.UserService).addArgument(new _nodeDependencyInjection.Reference("userRepository"));

      return this._container;
    }
  }]);
  return DIContainer;
}();

exports.DIContainer = DIContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaS9ESUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJESUNvbnRhaW5lciIsIl9jb250YWluZXIiLCJDb250YWluZXJCdWlsZGVyIiwicmVnaXN0ZXIiLCJBY2NvdW50Q29ubmVjdG9yIiwiVXNlclJlcG9zaXRvcnkiLCJhZGRBcmd1bWVudCIsIlJlZmVyZW5jZSIsIlVzZXJTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0lBRWFBLFc7OztTQUVUQyxVLEdBQWEsSUFBSUMseUNBQUosRTs7Ozs7cUNBRUk7QUFFYjtBQUNBO0FBRUE7QUFDQTtBQUNBLFdBQUtELFVBQUwsQ0FBZ0JFLFFBQWhCLENBQXlCLGtCQUF6QixFQUE2Q0Msa0NBQTdDOztBQUVBLFdBQUtILFVBQUwsQ0FBZ0JFLFFBQWhCLENBQXlCLGdCQUF6QixFQUEyQ0UsOEJBQTNDLEVBQ0tDLFdBREwsQ0FDaUIsSUFBSUMsa0NBQUosQ0FBYyxrQkFBZCxDQURqQjs7QUFHQSxXQUFLTixVQUFMLENBQWdCRSxRQUFoQixDQUF5QixhQUF6QixFQUF3Q0ssd0JBQXhDLEVBQ0tGLFdBREwsQ0FDaUIsSUFBSUMsa0NBQUosQ0FBYyxnQkFBZCxDQURqQjs7QUFHQSxhQUFPLEtBQUtOLFVBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lckJ1aWxkZXIsIFJlZmVyZW5jZSB9IGZyb20gJ25vZGUtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuXG5pbXBvcnQgeyBBY2NvdW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vcmVwb3NpdG9yeS9hY2NvdW50L0FjY291bnRDb25uZWN0b3InO1xuXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9yZXBvc2l0b3J5L2FjY291bnQvVXNlclJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9hY2NvdW50L1VzZXJTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBESUNvbnRhaW5lciB7XG5cbiAgICBfY29udGFpbmVyID0gbmV3IENvbnRhaW5lckJ1aWxkZXIoKTtcblxuICAgIGNyZWF0ZVJlZ2lzdGVyKCkge1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vXG5cbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnJlZ2lzdGVyKFwiYWNjb3VudENvbm5lY3RvclwiLCBBY2NvdW50Q29ubmVjdG9yKTtcblxuICAgICAgICB0aGlzLl9jb250YWluZXIucmVnaXN0ZXIoXCJ1c2VyUmVwb3NpdG9yeVwiLCBVc2VyUmVwb3NpdG9yeSlcbiAgICAgICAgICAgIC5hZGRBcmd1bWVudChuZXcgUmVmZXJlbmNlKFwiYWNjb3VudENvbm5lY3RvclwiKSk7XG5cbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnJlZ2lzdGVyKFwidXNlclNlcnZpY2VcIiwgVXNlclNlcnZpY2UpXG4gICAgICAgICAgICAuYWRkQXJndW1lbnQobmV3IFJlZmVyZW5jZShcInVzZXJSZXBvc2l0b3J5XCIpKVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgfVxufVxuIl19