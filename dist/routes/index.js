"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexRouter = IndexRouter;

var _express = _interopRequireDefault(require("express"));

function IndexRouter(diContainer, oauth2Server) {
  var router = _express["default"].Router();
  /* GET home page. */


  router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Express'
    });
  });
  return router;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXhSb3V0ZXIiLCJkaUNvbnRhaW5lciIsIm9hdXRoMlNlcnZlciIsInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVuZGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVPLFNBQVNBLFdBQVQsQ0FBcUJDLFdBQXJCLEVBQWtDQyxZQUFsQyxFQUFnRDtBQUVuRCxNQUFNQyxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWY7QUFFQTs7O0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUNyQ0QsSUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsT0FBWCxFQUFvQjtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFwQjtBQUNILEdBRkQ7QUFJQSxTQUFPUixNQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEluZGV4Um91dGVyKGRpQ29udGFpbmVyLCBvYXV0aDJTZXJ2ZXIpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICAvKiBHRVQgaG9tZSBwYWdlLiAqL1xuICAgIHJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICByZXMucmVuZGVyKCdpbmRleCcsIHsgdGl0bGU6ICdFeHByZXNzJyB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByb3V0ZXI7XG59XG4iXX0=