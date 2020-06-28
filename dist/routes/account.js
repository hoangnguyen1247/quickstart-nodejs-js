"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountRouter = AccountRouter;

var _express = _interopRequireDefault(require("express"));

var _StaffController = require("../controller/v1/account/StaffController");

function AccountRouter(diContainer, oauth2Server) {
  var router = _express["default"].Router();

  var staffController = new _StaffController.StaffController(diContainer);
  router.route("/staffs").get(staffController.findMany).post(staffController.insert);
  router.route("/staffs/search").get(staffController.search);
  router.route("/staffs/:id").get(staffController.findOneById).put(staffController.update)["delete"](staffController["delete"]);
  return router;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJBY2NvdW50Um91dGVyIiwiZGlDb250YWluZXIiLCJvYXV0aDJTZXJ2ZXIiLCJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwic3RhZmZDb250cm9sbGVyIiwiU3RhZmZDb250cm9sbGVyIiwicm91dGUiLCJnZXQiLCJmaW5kTWFueSIsInBvc3QiLCJpbnNlcnQiLCJzZWFyY2giLCJmaW5kT25lQnlJZCIsInB1dCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRU8sU0FBU0EsYUFBVCxDQUF1QkMsV0FBdkIsRUFBb0NDLFlBQXBDLEVBQWtEO0FBRXJELE1BQU1DLE1BQU0sR0FBR0Msb0JBQVFDLE1BQVIsRUFBZjs7QUFDQSxNQUFNQyxlQUFlLEdBQUcsSUFBSUMsZ0NBQUosQ0FBb0JOLFdBQXBCLENBQXhCO0FBRUFFLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhLFNBQWIsRUFDS0MsR0FETCxDQUNTSCxlQUFlLENBQUNJLFFBRHpCLEVBRUtDLElBRkwsQ0FFVUwsZUFBZSxDQUFDTSxNQUYxQjtBQUdBVCxFQUFBQSxNQUFNLENBQUNLLEtBQVAsQ0FBYSxnQkFBYixFQUNLQyxHQURMLENBQ1NILGVBQWUsQ0FBQ08sTUFEekI7QUFFQVYsRUFBQUEsTUFBTSxDQUFDSyxLQUFQLENBQWEsYUFBYixFQUNLQyxHQURMLENBQ1NILGVBQWUsQ0FBQ1EsV0FEekIsRUFFS0MsR0FGTCxDQUVTVCxlQUFlLENBQUNVLE1BRnpCLFlBR1lWLGVBQWUsVUFIM0I7QUFLQSxTQUFPSCxNQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IHsgU3RhZmZDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvdjEvYWNjb3VudC9TdGFmZkNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFjY291bnRSb3V0ZXIoZGlDb250YWluZXIsIG9hdXRoMlNlcnZlcikge1xuXG4gICAgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICBjb25zdCBzdGFmZkNvbnRyb2xsZXIgPSBuZXcgU3RhZmZDb250cm9sbGVyKGRpQ29udGFpbmVyKTtcblxuICAgIHJvdXRlci5yb3V0ZShcIi9zdGFmZnNcIilcbiAgICAgICAgLmdldChzdGFmZkNvbnRyb2xsZXIuZmluZE1hbnkpXG4gICAgICAgIC5wb3N0KHN0YWZmQ29udHJvbGxlci5pbnNlcnQpO1xuICAgIHJvdXRlci5yb3V0ZShcIi9zdGFmZnMvc2VhcmNoXCIpXG4gICAgICAgIC5nZXQoc3RhZmZDb250cm9sbGVyLnNlYXJjaCk7XG4gICAgcm91dGVyLnJvdXRlKFwiL3N0YWZmcy86aWRcIilcbiAgICAgICAgLmdldChzdGFmZkNvbnRyb2xsZXIuZmluZE9uZUJ5SWQpXG4gICAgICAgIC5wdXQoc3RhZmZDb250cm9sbGVyLnVwZGF0ZSlcbiAgICAgICAgLmRlbGV0ZShzdGFmZkNvbnRyb2xsZXIuZGVsZXRlKTtcblxuICAgIHJldHVybiByb3V0ZXI7XG59XG4iXX0=