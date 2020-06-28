"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configCommon = void 0;

var _package = _interopRequireDefault(require("../../package.json"));

var _ormconfigAccount = _interopRequireDefault(require("../ormconfig/ormconfig-account"));

var configCommon = {
  version: {
    versionName: _package["default"].version,
    versionCode: 1,
    revision: ""
  },
  server: {
    port: 5401
  },
  serverMaps: {
    "/common": "http://localhost:5201"
  },
  corsOptions: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    exposedHeaders: "Authorization",
    credentials: true,
    optionsSuccessStatus: 200
  },
  jwt: {
    forgotPassword: {
      expiresIn: 30 * 60 // 30 minutes

    }
  },
  oauth2: {
    website: {
      client_id: "quickstart",
      client_secret: "quickstart123",
      grant_type: "password"
    }
  },
  httpAuth: {
    username: "quickstart",
    password: "quickstart123"
  },
  swaggerConfig: {
    swaggerDefinition: {
      info: {
        title: 'RESTful API',
        version: '1.0.0',
        description: 'RESTful API description'
      },
      host: 'api.nhulanha.com',
      basePath: '/',
      securityDefinitions: {
        Bearer: {
          type: "apiKey",
          "in": "header",
          name: "Authorization"
        }
      }
    },
    apis: ['./src/controller/**/*.ts']
  },
  database: {
    account: {
      config: _ormconfigAccount["default"]
    }
  }
};
exports.configCommon = configCommon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvY29uZmlnLmNvbW1vbi5qcyJdLCJuYW1lcyI6WyJjb25maWdDb21tb24iLCJ2ZXJzaW9uIiwidmVyc2lvbk5hbWUiLCJwYWNrYWdlSnNvbiIsInZlcnNpb25Db2RlIiwicmV2aXNpb24iLCJzZXJ2ZXIiLCJwb3J0Iiwic2VydmVyTWFwcyIsImNvcnNPcHRpb25zIiwib3JpZ2luIiwibWV0aG9kcyIsImFsbG93ZWRIZWFkZXJzIiwiZXhwb3NlZEhlYWRlcnMiLCJjcmVkZW50aWFscyIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwiand0IiwiZm9yZ290UGFzc3dvcmQiLCJleHBpcmVzSW4iLCJvYXV0aDIiLCJ3ZWJzaXRlIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJodHRwQXV0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzd2FnZ2VyQ29uZmlnIiwic3dhZ2dlckRlZmluaXRpb24iLCJpbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImhvc3QiLCJiYXNlUGF0aCIsInNlY3VyaXR5RGVmaW5pdGlvbnMiLCJCZWFyZXIiLCJ0eXBlIiwibmFtZSIsImFwaXMiLCJkYXRhYmFzZSIsImFjY291bnQiLCJjb25maWciLCJvcm1jb25maWdBY2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxXQUFXLEVBQUVDLG9CQUFZRixPQURwQjtBQUVMRyxJQUFBQSxXQUFXLEVBQUUsQ0FGUjtBQUdMQyxJQUFBQSxRQUFRLEVBQUU7QUFITCxHQURlO0FBTXhCQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsSUFBSSxFQUFFO0FBREYsR0FOZ0I7QUFTeEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSLGVBQVc7QUFESCxHQVRZO0FBWXhCQyxFQUFBQSxXQUFXLEVBQUU7QUFDVEMsSUFBQUEsTUFBTSxFQUFFLEdBREM7QUFFVEMsSUFBQUEsT0FBTyxFQUFFLHdDQUZBO0FBR1RDLElBQUFBLGNBQWMsRUFBRSwrREFIUDtBQUlUQyxJQUFBQSxjQUFjLEVBQUUsZUFKUDtBQUtUQyxJQUFBQSxXQUFXLEVBQUUsSUFMSjtBQU1UQyxJQUFBQSxvQkFBb0IsRUFBRTtBQU5iLEdBWlc7QUFvQnhCQyxFQUFBQSxHQUFHLEVBQUU7QUFDREMsSUFBQUEsY0FBYyxFQUFFO0FBQ1pDLE1BQUFBLFNBQVMsRUFBRSxLQUFLLEVBREosQ0FDTzs7QUFEUDtBQURmLEdBcEJtQjtBQXlCeEJDLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxPQUFPLEVBQUU7QUFDTEMsTUFBQUEsU0FBUyxFQUFFLFlBRE47QUFFTEMsTUFBQUEsYUFBYSxFQUFFLGVBRlY7QUFHTEMsTUFBQUEsVUFBVSxFQUFFO0FBSFA7QUFETCxHQXpCZ0I7QUFnQ3hCQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsUUFBUSxFQUFFLFlBREo7QUFFTkMsSUFBQUEsUUFBUSxFQUFFO0FBRkosR0FoQ2M7QUFvQ3hCQyxFQUFBQSxhQUFhLEVBQUU7QUFDWEMsSUFBQUEsaUJBQWlCLEVBQUU7QUFDZkMsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLEtBQUssRUFBRSxhQURMO0FBRUY3QixRQUFBQSxPQUFPLEVBQUUsT0FGUDtBQUdGOEIsUUFBQUEsV0FBVyxFQUFFO0FBSFgsT0FEUztBQU1mQyxNQUFBQSxJQUFJLEVBQUUsa0JBTlM7QUFPZkMsTUFBQUEsUUFBUSxFQUFFLEdBUEs7QUFRZkMsTUFBQUEsbUJBQW1CLEVBQUU7QUFDakJDLFFBQUFBLE1BQU0sRUFBRTtBQUNKQyxVQUFBQSxJQUFJLEVBQUUsUUFERjtBQUVKLGdCQUFJLFFBRkE7QUFHSkMsVUFBQUEsSUFBSSxFQUFFO0FBSEY7QUFEUztBQVJOLEtBRFI7QUFpQlhDLElBQUFBLElBQUksRUFBRSxDQUFDLDBCQUFEO0FBakJLLEdBcENTO0FBdUR4QkMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLE9BQU8sRUFBRTtBQUNMQyxNQUFBQSxNQUFNLEVBQUVDO0FBREg7QUFESDtBQXZEYyxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWNrYWdlSnNvbiBmcm9tIFwiLi4vLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgb3JtY29uZmlnQWNjb3VudCBmcm9tIFwiLi4vb3JtY29uZmlnL29ybWNvbmZpZy1hY2NvdW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWdDb21tb24gPSB7XG4gICAgdmVyc2lvbjoge1xuICAgICAgICB2ZXJzaW9uTmFtZTogcGFja2FnZUpzb24udmVyc2lvbixcbiAgICAgICAgdmVyc2lvbkNvZGU6IDEsXG4gICAgICAgIHJldmlzaW9uOiBcIlwiLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIHBvcnQ6IDU0MDEsXG4gICAgfSxcbiAgICBzZXJ2ZXJNYXBzOiB7XG4gICAgICAgIFwiL2NvbW1vblwiOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTIwMVwiLFxuICAgIH0sXG4gICAgY29yc09wdGlvbnM6IHtcbiAgICAgICAgb3JpZ2luOiBcIipcIixcbiAgICAgICAgbWV0aG9kczogXCJHRVQsSEVBRCxQVVQsUEFUQ0gsUE9TVCxERUxFVEUsT1BUSU9OU1wiLFxuICAgICAgICBhbGxvd2VkSGVhZGVyczogXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uXCIsXG4gICAgICAgIGV4cG9zZWRIZWFkZXJzOiBcIkF1dGhvcml6YXRpb25cIixcbiAgICAgICAgY3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDAsXG4gICAgfSxcbiAgICBqd3Q6IHtcbiAgICAgICAgZm9yZ290UGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogMzAgKiA2MCAvLyAzMCBtaW51dGVzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9hdXRoMjoge1xuICAgICAgICB3ZWJzaXRlOiB7XG4gICAgICAgICAgICBjbGllbnRfaWQ6IFwicXVpY2tzdGFydFwiLFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogXCJxdWlja3N0YXJ0MTIzXCIsXG4gICAgICAgICAgICBncmFudF90eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBodHRwQXV0aDoge1xuICAgICAgICB1c2VybmFtZTogXCJxdWlja3N0YXJ0XCIsXG4gICAgICAgIHBhc3N3b3JkOiBcInF1aWNrc3RhcnQxMjNcIixcbiAgICB9LFxuICAgIHN3YWdnZXJDb25maWc6IHtcbiAgICAgICAgc3dhZ2dlckRlZmluaXRpb246IHtcbiAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JFU1RmdWwgQVBJJyxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUkVTVGZ1bCBBUEkgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvc3Q6ICdhcGkubmh1bGFuaGEuY29tJyxcbiAgICAgICAgICAgIGJhc2VQYXRoOiAnLycsXG4gICAgICAgICAgICBzZWN1cml0eURlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgQmVhcmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBpS2V5XCIsXG4gICAgICAgICAgICAgICAgICAgIGluOiBcImhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkF1dGhvcml6YXRpb25cIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFwaXM6IFsnLi9zcmMvY29udHJvbGxlci8qKi8qLnRzJ10sXG4gICAgfSxcbiAgICBkYXRhYmFzZToge1xuICAgICAgICBhY2NvdW50OiB7XG4gICAgICAgICAgICBjb25maWc6IG9ybWNvbmZpZ0FjY291bnQsXG4gICAgICAgIH0sXG4gICAgfVxufTtcbiJdfQ==