"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUtcDatetimeString = newUtcDatetimeString;
exports.newDateISOString = newDateISOString;
exports.newMySQLDateISOString = newMySQLDateISOString;
exports.newUtcDate = newUtcDate;
exports.newDate = newDate;
exports.parseDate = parseDate;
exports.formatDate = formatDate;
exports.formatDatetime = formatDatetime;
exports.toLocal = toLocal;

var _moment = _interopRequireDefault(require("moment"));

function newUtcDatetimeString() {
  return new Date().toISOString();
}

;

function newDateISOString() {
  return new Date().toISOString();
}

;

function newMySQLDateISOString(date) {
  if (date) {
    return _moment["default"].utc(date).format("YYYY-MM-DD HH:mm:ss.SSS[Z]");
  }

  return _moment["default"].utc().format("YYYY-MM-DD HH:mm:ss.SSS[Z]");
}

;

function newUtcDate() {
  return (0, _moment["default"])().utc().toDate();
}

;

function newDate() {
  return (0, _moment["default"])().utc().toDate();
}

;

function parseDate(str) {
  return (0, _moment["default"])(str).utc();
}

;

function formatDate(date, format) {
  var _format = format ? format : "YYYY/MM/DD h:mm";

  if (date) {
    return (0, _moment["default"])(date).format(_format);
  }

  return (0, _moment["default"])().utc().format(_format);
}

;

function formatDatetime(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DD-MM-YYYY h:mm";
  return (0, _moment["default"])(date || newDate()).format(format);
}

;

function toLocal(date) {
  return date.local();
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9EYXRlVGltZVV0aWxzLmpzIl0sIm5hbWVzIjpbIm5ld1V0Y0RhdGV0aW1lU3RyaW5nIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibmV3RGF0ZUlTT1N0cmluZyIsIm5ld015U1FMRGF0ZUlTT1N0cmluZyIsImRhdGUiLCJtb21lbnQiLCJ1dGMiLCJmb3JtYXQiLCJuZXdVdGNEYXRlIiwidG9EYXRlIiwibmV3RGF0ZSIsInBhcnNlRGF0ZSIsInN0ciIsImZvcm1hdERhdGUiLCJfZm9ybWF0IiwiZm9ybWF0RGF0ZXRpbWUiLCJ0b0xvY2FsIiwibG9jYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU8sU0FBU0Esb0JBQVQsR0FBZ0M7QUFDbkMsU0FBUSxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsV0FBYixFQUFQO0FBQ0g7O0FBQUE7O0FBRU0sU0FBU0MsZ0JBQVQsR0FBNEI7QUFDL0IsU0FBUSxJQUFJRixJQUFKLEVBQUQsQ0FBYUMsV0FBYixFQUFQO0FBQ0g7O0FBQUE7O0FBRU0sU0FBU0UscUJBQVQsQ0FBK0JDLElBQS9CLEVBQXNDO0FBQ3pDLE1BQUlBLElBQUosRUFBVTtBQUNOLFdBQU9DLG1CQUFPQyxHQUFQLENBQVdGLElBQVgsRUFBaUJHLE1BQWpCLENBQXdCLDRCQUF4QixDQUFQO0FBQ0g7O0FBQ0QsU0FBT0YsbUJBQU9DLEdBQVAsR0FBYUMsTUFBYixDQUFvQiw0QkFBcEIsQ0FBUDtBQUNIOztBQUFBOztBQUVNLFNBQVNDLFVBQVQsR0FBc0I7QUFDekIsU0FBTywwQkFBU0YsR0FBVCxHQUFlRyxNQUFmLEVBQVA7QUFDSDs7QUFBQTs7QUFFTSxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCLFNBQU8sMEJBQVNKLEdBQVQsR0FBZUcsTUFBZixFQUFQO0FBQ0g7O0FBQUE7O0FBRU0sU0FBU0UsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDM0IsU0FBTyx3QkFBT0EsR0FBUCxFQUFZTixHQUFaLEVBQVA7QUFDSDs7QUFBQTs7QUFFTSxTQUFTTyxVQUFULENBQW9CVCxJQUFwQixFQUEwQkcsTUFBMUIsRUFBa0M7QUFDckMsTUFBTU8sT0FBTyxHQUFHUCxNQUFNLEdBQUdBLE1BQUgsR0FBWSxpQkFBbEM7O0FBRUEsTUFBSUgsSUFBSixFQUFVO0FBQ04sV0FBTyx3QkFBT0EsSUFBUCxFQUFhRyxNQUFiLENBQW9CTyxPQUFwQixDQUFQO0FBQ0g7O0FBRUQsU0FBTywwQkFBU1IsR0FBVCxHQUFlQyxNQUFmLENBQXNCTyxPQUF0QixDQUFQO0FBQ0g7O0FBQUE7O0FBRU0sU0FBU0MsY0FBVCxDQUF3QlgsSUFBeEIsRUFBMEQ7QUFBQSxNQUE1QkcsTUFBNEIsdUVBQW5CLGlCQUFtQjtBQUM3RCxTQUFPLHdCQUFPSCxJQUFJLElBQUlNLE9BQU8sRUFBdEIsRUFBMEJILE1BQTFCLENBQWlDQSxNQUFqQyxDQUFQO0FBQ0g7O0FBQUE7O0FBRU0sU0FBU1MsT0FBVCxDQUFpQlosSUFBakIsRUFBdUI7QUFDMUIsU0FBT0EsSUFBSSxDQUFDYSxLQUFMLEVBQVA7QUFDSDs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3VXRjRGF0ZXRpbWVTdHJpbmcoKSB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0RhdGVJU09TdHJpbmcoKSB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld015U1FMRGF0ZUlTT1N0cmluZyhkYXRlPykge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKGRhdGUpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3MuU1NTW1pdXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbW9tZW50LnV0YygpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3MuU1NTW1pdXCIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1V0Y0RhdGUoKSB7XG4gICAgcmV0dXJuIG1vbWVudCgpLnV0YygpLnRvRGF0ZSgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0RhdGUoKSB7XG4gICAgcmV0dXJuIG1vbWVudCgpLnV0YygpLnRvRGF0ZSgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZShzdHIpIHtcbiAgICByZXR1cm4gbW9tZW50KHN0cikudXRjKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQpIHtcbiAgICBjb25zdCBfZm9ybWF0ID0gZm9ybWF0ID8gZm9ybWF0IDogXCJZWVlZL01NL0REIGg6bW1cIjtcblxuICAgIGlmIChkYXRlKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KF9mb3JtYXQpO1xuICAgIH1cblxuICAgIHJldHVybiBtb21lbnQoKS51dGMoKS5mb3JtYXQoX2Zvcm1hdCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZXRpbWUoZGF0ZSwgZm9ybWF0ID0gXCJERC1NTS1ZWVlZIGg6bW1cIikge1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSB8fCBuZXdEYXRlKCkpLmZvcm1hdChmb3JtYXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvTG9jYWwoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmxvY2FsKCk7XG59O1xuIl19