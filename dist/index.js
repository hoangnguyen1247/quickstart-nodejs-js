"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _DIContainer = require("./di/DIContainer");

var _typeorm = require("typeorm");

var _User = require("./entity/account/User");

var _index = require("./routes/index");

var _account = require("./routes/account");

var _AccountConnector = require("./repository/account/AccountConnector");

(0, _debug["default"])('quickstart-node-js:server');

var main = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var app, diContainer, accountConnector, port, server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express["default"])();
            diContainer = new _DIContainer.DIContainer().createRegister();
            _context.next = 4;
            return diContainer.get("accountConnector").createConnection(diContainer);

          case 4:
            accountConnector = _context.sent;
            // connection settings are in the "ormconfig.json" file
            // createConnection().then(async connection => {
            //     const post = new User();
            //     post.title = "Control flow based type analysis";
            //     const user = await connection
            //         .getRepository(User)
            // 	.createQueryBuilder()
            //         .getOne();
            //     debugger;
            //     console.log(user);
            // }).catch(error => console.log("Error: ", error));
            // view engine setup
            app.set('views', _path["default"].join(__dirname, 'views'));
            app.set('view engine', 'hbs');
            app.use((0, _morgan["default"])('dev'));
            app.use(_express["default"].json());
            app.use(_express["default"].urlencoded({
              extended: false
            }));
            app.use((0, _cookieParser["default"])());
            app.use(_express["default"]["static"](_path["default"].resolve(__dirname, "..", 'public')));
            app.use('/', (0, _index.IndexRouter)());
            app.use('/users', (0, _account.AccountRouter)()); // catch 404 and forward to error handler

            app.use(function (req, res, next) {
              next((0, _httpErrors["default"])(404));
            }); // error handler

            app.use(function (err, req, res, next) {
              // set locals, only providing error in development
              res.locals.message = err.message;
              res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

              res.status(err.status || 500);
              res.render('error');
            });
            /**
             * Get port from environment and store in Express.
             */

            port = normalizePort(process.env.PORT || '3000');
            app.set('port', port);
            /**
             * Create HTTP server.
             */

            server = _http["default"].createServer(app);
            /**
             * Listen on provided port, on all network interfaces.
             */

            server.listen(port);
            /**
             * Event listener for HTTP server "error" event.
             */

            server.on('error', function onError(error) {
              if (error.syscall !== 'listen') {
                throw error;
              }

              var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages

              switch (error.code) {
                case 'EACCES':
                  console.error(bind + ' requires elevated privileges');
                  process.exit(1);
                  break;

                case 'EADDRINUSE':
                  console.error(bind + ' is already in use');
                  process.exit(1);
                  break;

                default:
                  throw error;
              }
            });
            /**
             * Event listener for HTTP server "listening" event.
             */

            server.on('listening', function onListening() {
              var addr = server.address();
              var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
              (0, _debug["default"])('Listening on ' + bind);
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Normalize a port into a number, string, or false.
 */


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var _default = main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYWluIiwiYXBwIiwiZGlDb250YWluZXIiLCJESUNvbnRhaW5lciIsImNyZWF0ZVJlZ2lzdGVyIiwiZ2V0IiwiY3JlYXRlQ29ubmVjdGlvbiIsImFjY291bnRDb25uZWN0b3IiLCJzZXQiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVzb2x2ZSIsInJlcSIsInJlcyIsIm5leHQiLCJlcnIiLCJsb2NhbHMiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiLCJyZW5kZXIiLCJwb3J0Iiwibm9ybWFsaXplUG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwic2VydmVyIiwiaHR0cCIsImNyZWF0ZVNlcnZlciIsImxpc3RlbiIsIm9uIiwib25FcnJvciIsInN5c2NhbGwiLCJiaW5kIiwiY29kZSIsImNvbnNvbGUiLCJleGl0Iiwib25MaXN0ZW5pbmciLCJhZGRyIiwiYWRkcmVzcyIsInZhbCIsInBhcnNlSW50IiwiaXNOYU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFHQSx1QkFBTSwyQkFBTjs7QUFFQSxJQUFNQSxJQUFJO0FBQUEsMkZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hDLFlBQUFBLEdBREcsR0FDRywwQkFESDtBQUVIQyxZQUFBQSxXQUZHLEdBRVksSUFBSUMsd0JBQUosRUFBRCxDQUFvQkMsY0FBcEIsRUFGWDtBQUFBO0FBQUEsbUJBR3VCRixXQUFXLENBQUNHLEdBQVosQ0FBZ0Isa0JBQWhCLENBQUQsQ0FBc0NDLGdCQUF0QyxDQUF1REosV0FBdkQsQ0FIdEI7O0FBQUE7QUFHSEssWUFBQUEsZ0JBSEc7QUFLVDtBQUNBO0FBRUE7QUFDQTtB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Q0E7O0FBQ0EscUJBQUssWUFBTDtBQUNBRCxrQkFBQUEsT0FBTyxDQUFDakIsS0FBUixDQUFjZSxJQUFJLEdBQUcsb0JBQXJCO0FBQ0FWLGtCQUFBQSxPQUFPLENBQUNhLElBQVIsQ0FBYSxDQUFiO0FBQ0E7O0FBQ0E7QUFDQSx3QkFBTWxCLEtBQU47QUFWSjtBQVlILGFBcEJEO0FBc0JBOzs7O0FBR0FRLFlBQUFBLE1BQU0sQ0FBQ0ksRUFBUCxDQUFVLFdBQVYsRUFBdUIsU0FBU08sV0FBVCxHQUF1QjtBQUMxQyxrQkFBSUMsSUFBSSxHQUFHWixNQUFNLENBQUNhLE9BQVAsRUFBWDtBQUNBLGtCQUFJTixJQUFJLEdBQUcsT0FBT0ssSUFBUCxLQUFnQixRQUFoQixHQUEyQixVQUFVQSxJQUFyQyxHQUE0QyxVQUFVQSxJQUFJLENBQUNqQixJQUF0RTtBQUNBLHFDQUFNLGtCQUFrQlksSUFBeEI7QUFDSCxhQUpEOztBQWxHUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFKdkMsSUFBSTtBQUFBO0FBQUE7QUFBQSxHQUFWO0FBeUdBOzs7OztBQUdBLFNBQVM0QixhQUFULENBQXVCa0IsR0FBdkIsRUFBNEI7QUFDeEIsTUFBSW5CLElBQUksR0FBR29CLFFBQVEsQ0FBQ0QsR0FBRCxFQUFNLEVBQU4sQ0FBbkI7O0FBRUEsTUFBSUUsS0FBSyxDQUFDckIsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxXQUFPbUIsR0FBUDtBQUNIOztBQUVELE1BQUluQixJQUFJLElBQUksQ0FBWixFQUFlO0FBQ1g7QUFDQSxXQUFPQSxJQUFQO0FBQ0g7O0FBRUQsU0FBTyxLQUFQO0FBQ0g7O2VBRWMzQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuXG5pbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSBcImh0dHAtZXJyb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnbW9yZ2FuJztcblxuaW1wb3J0IHsgRElDb250YWluZXIgfSBmcm9tICcuL2RpL0RJQ29udGFpbmVyJztcblxuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vZW50aXR5L2FjY291bnQvVXNlclwiO1xuXG5pbXBvcnQgeyBJbmRleFJvdXRlciB9IGZyb20gJy4vcm91dGVzL2luZGV4JztcbmltcG9ydCB7IEFjY291bnRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcy9hY2NvdW50JztcblxuaW1wb3J0IHsgQWNjb3VudENvbm5lY3RvciB9IGZyb20gJy4vcmVwb3NpdG9yeS9hY2NvdW50L0FjY291bnRDb25uZWN0b3InO1xuXG5cbmRlYnVnKCdxdWlja3N0YXJ0LW5vZGUtanM6c2VydmVyJyk7XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICAgIGNvbnN0IGRpQ29udGFpbmVyID0gKG5ldyBESUNvbnRhaW5lcigpKS5jcmVhdGVSZWdpc3RlcigpO1xuICAgIGNvbnN0IGFjY291bnRDb25uZWN0b3IgPSBhd2FpdCAoZGlDb250YWluZXIuZ2V0KFwiYWNjb3VudENvbm5lY3RvclwiKSkuY3JlYXRlQ29ubmVjdGlvbihkaUNvbnRhaW5lcik7XG5cbiAgICAvLyBjb25uZWN0aW9uIHNldHRpbmdzIGFyZSBpbiB0aGUgXCJvcm1jb25maWcuanNvblwiIGZpbGVcbiAgICAvLyBjcmVhdGVDb25uZWN0aW9uKCkudGhlbihhc3luYyBjb25uZWN0aW9uID0+IHtcblxuICAgIC8vICAgICBjb25zdCBwb3N0ID0gbmV3IFVzZXIoKTtcbiAgICAvLyAgICAgcG9zdC50aXRsZSA9IFwiQ29udHJvbCBmbG93IGJhc2VkIHR5cGUgYW5hbHlzaXNcIjtcblxuICAgIC8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgY29ubmVjdGlvblxuICAgIC8vICAgICAgICAgLmdldFJlcG9zaXRvcnkoVXNlcilcbiAgICAvLyBcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxuICAgIC8vICAgICAgICAgLmdldE9uZSgpO1xuXG4gICAgLy8gICAgIGRlYnVnZ2VyO1xuXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuXG4gICAgLy8gfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKSk7XG5cbiAgICAvLyB2aWV3IGVuZ2luZSBzZXR1cFxuICAgIGFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ZpZXdzJykpO1xuICAgIGFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2hicycpO1xuXG4gICAgYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcbiAgICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbiAgICBhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsICdwdWJsaWMnKSkpO1xuXG4gICAgYXBwLnVzZSgnLycsIEluZGV4Um91dGVyKCkpO1xuICAgIGFwcC51c2UoJy91c2VycycsIEFjY291bnRSb3V0ZXIoKSk7XG5cbiAgICAvLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxuICAgIGFwcC51c2UoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgbmV4dChjcmVhdGVFcnJvcig0MDQpKTtcbiAgICB9KTtcblxuICAgIC8vIGVycm9yIGhhbmRsZXJcbiAgICBhcHAudXNlKGZ1bmN0aW9uKGVyciwgcmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgLy8gc2V0IGxvY2Fscywgb25seSBwcm92aWRpbmcgZXJyb3IgaW4gZGV2ZWxvcG1lbnRcbiAgICAgICAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgIHJlcy5sb2NhbHMuZXJyb3IgPSByZXEuYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcgPyBlcnIgOiB7fTtcblxuICAgICAgICAvLyByZW5kZXIgdGhlIGVycm9yIHBhZ2VcbiAgICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gICAgICAgIHJlcy5yZW5kZXIoJ2Vycm9yJyk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcG9ydCBmcm9tIGVudmlyb25tZW50IGFuZCBzdG9yZSBpbiBFeHByZXNzLlxuICAgICAqL1xuXG4gICAgdmFyIHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnKTtcbiAgICBhcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgSFRUUCBzZXJ2ZXIuXG4gICAgICovXG5cbiAgICB2YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiBvbiBwcm92aWRlZCBwb3J0LCBvbiBhbGwgbmV0d29yayBpbnRlcmZhY2VzLlxuICAgICAqL1xuXG4gICAgc2VydmVyLmxpc3Rlbihwb3J0KTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGxpc3RlbmVyIGZvciBIVFRQIHNlcnZlciBcImVycm9yXCIgZXZlbnQuXG4gICAgICovXG4gICAgc2VydmVyLm9uKCdlcnJvcicsIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLnN5c2NhbGwgIT09ICdsaXN0ZW4nKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB2YXIgYmluZCA9IHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJyA/ICdQaXBlICcgKyBwb3J0IDogJ1BvcnQgJyArIHBvcnQ7XG4gICAgXG4gICAgICAgIC8vIGhhbmRsZSBzcGVjaWZpYyBsaXN0ZW4gZXJyb3JzIHdpdGggZnJpZW5kbHkgbWVzc2FnZXNcbiAgICAgICAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdFQUNDRVMnOlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzJyk7XG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0VBRERSSU5VU0UnOlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihiaW5kICsgJyBpcyBhbHJlYWR5IGluIHVzZScpO1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGxpc3RlbmVyIGZvciBIVFRQIHNlcnZlciBcImxpc3RlbmluZ1wiIGV2ZW50LlxuICAgICAqL1xuICAgIHNlcnZlci5vbignbGlzdGVuaW5nJywgZnVuY3Rpb24gb25MaXN0ZW5pbmcoKSB7XG4gICAgICAgIHZhciBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcbiAgICAgICAgdmFyIGJpbmQgPSB0eXBlb2YgYWRkciA9PT0gJ3N0cmluZycgPyAncGlwZSAnICsgYWRkciA6ICdwb3J0ICcgKyBhZGRyLnBvcnQ7XG4gICAgICAgIGRlYnVnKCdMaXN0ZW5pbmcgb24gJyArIGJpbmQpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHBvcnQgaW50byBhIG51bWJlciwgc3RyaW5nLCBvciBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWwpIHtcbiAgICB2YXIgcG9ydCA9IHBhcnNlSW50KHZhbCwgMTApO1xuXG4gICAgaWYgKGlzTmFOKHBvcnQpKSB7XG4gICAgICAgIC8vIG5hbWVkIHBpcGVcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBpZiAocG9ydCA+PSAwKSB7XG4gICAgICAgIC8vIHBvcnQgbnVtYmVyXG4gICAgICAgIHJldHVybiBwb3J0O1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiJdfQ==