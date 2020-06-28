"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _config = require("./config/config.local");

var selectedProfile = _config.config;

switch (process.env.NODE_ENV) {
  case "development":
    selectedProfile = _config.config;
    break;

  case "staging":
    selectedProfile = _config.config;
    break;

  case "production":
    selectedProfile = _config.config;
    break;

  default:
    selectedProfile = _config.config;
    break;
}

var config = selectedProfile;
exports.config = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsic2VsZWN0ZWRQcm9maWxlIiwiY29uZmlnTG9jYWwiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25maWdEZXZlbG9wbWVudCIsImNvbmZpZ1N0YWdpbmciLCJjb25maWdQcm9kdWN0aW9uIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0EsSUFBSUEsZUFBZSxHQUFHQyxjQUF0Qjs7QUFDQSxRQUFRQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBcEI7QUFDSSxPQUFLLGFBQUw7QUFDSUosSUFBQUEsZUFBZSxHQUFHSyxjQUFsQjtBQUNBOztBQUNKLE9BQUssU0FBTDtBQUNJTCxJQUFBQSxlQUFlLEdBQUdNLGNBQWxCO0FBQ0E7O0FBQ0osT0FBSyxZQUFMO0FBQ0lOLElBQUFBLGVBQWUsR0FBR08sY0FBbEI7QUFDQTs7QUFDSjtBQUNJUCxJQUFBQSxlQUFlLEdBQUdDLGNBQWxCO0FBQ0E7QUFaUjs7QUFlTyxJQUFNTyxNQUFNLEdBQUdSLGVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZyBhcyBjb25maWdMb2NhbH0gZnJvbSBcIi4vY29uZmlnL2NvbmZpZy5sb2NhbFwiO1xuaW1wb3J0IHtjb25maWcgYXMgY29uZmlnRGV2ZWxvcG1lbnR9IGZyb20gXCIuL2NvbmZpZy9jb25maWcubG9jYWxcIjtcbmltcG9ydCB7Y29uZmlnIGFzIGNvbmZpZ1N0YWdpbmd9IGZyb20gXCIuL2NvbmZpZy9jb25maWcubG9jYWxcIjtcbmltcG9ydCB7Y29uZmlnIGFzIGNvbmZpZ1Byb2R1Y3Rpb259IGZyb20gXCIuL2NvbmZpZy9jb25maWcubG9jYWxcIjtcblxubGV0IHNlbGVjdGVkUHJvZmlsZSA9IGNvbmZpZ0xvY2FsO1xuc3dpdGNoIChwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGNhc2UgXCJkZXZlbG9wbWVudFwiOlxuICAgICAgICBzZWxlY3RlZFByb2ZpbGUgPSBjb25maWdEZXZlbG9wbWVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN0YWdpbmdcIjpcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlID0gY29uZmlnU3RhZ2luZztcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByb2R1Y3Rpb25cIjpcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlID0gY29uZmlnUHJvZHVjdGlvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgc2VsZWN0ZWRQcm9maWxlID0gY29uZmlnTG9jYWw7XG4gICAgICAgIGJyZWFrO1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gc2VsZWN0ZWRQcm9maWxlO1xuIl19