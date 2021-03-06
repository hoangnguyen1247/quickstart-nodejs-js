"use strict";

var ormconfig = {
  "name": "account",
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "quickstart",
  "password": "quickstart123",
  "database": "quickstart-account",
  "supportBigNumbers": true,
  "bigNumberStrings": true,
  "synchronize": false,
  "logging": ["error"],
  "migrationsRun": true,
  "entities": ["src/entity/account/*.js"],
  "migrations": ["src/migration/account/**/*.js"],
  "subscribers": ["src/subscriber/account/*.js"],
  "cli": {
    "entitiesDir": "src/entity/account",
    "migrationsDir": "src/migration/account",
    "subscribersDir": "src/subscriber/account"
  },
  "useNewUrlParser": true
};
module.exports = ormconfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcm1jb25maWcvb3JtY29uZmlnLWFjY291bnQuanMiXSwibmFtZXMiOlsib3JtY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxTQUFTLEdBQUc7QUFDZCxVQUFRLFNBRE07QUFFZCxVQUFRLE9BRk07QUFHZCxVQUFRLFdBSE07QUFJZCxVQUFRLElBSk07QUFLZCxjQUFZLFlBTEU7QUFNZCxjQUFZLGVBTkU7QUFPZCxjQUFZLG9CQVBFO0FBUWQsdUJBQXFCLElBUlA7QUFTZCxzQkFBb0IsSUFUTjtBQVVkLGlCQUFlLEtBVkQ7QUFXZCxhQUFXLENBQUUsT0FBRixDQVhHO0FBWWQsbUJBQWlCLElBWkg7QUFhZCxjQUFZLENBQ1IseUJBRFEsQ0FiRTtBQWdCZCxnQkFBYyxDQUNWLCtCQURVLENBaEJBO0FBbUJkLGlCQUFlLENBQ1gsNkJBRFcsQ0FuQkQ7QUFzQmQsU0FBTztBQUNILG1CQUFlLG9CQURaO0FBRUgscUJBQWlCLHVCQUZkO0FBR0gsc0JBQWtCO0FBSGYsR0F0Qk87QUEyQmQscUJBQW1CO0FBM0JMLENBQWxCO0FBOEJBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3JtY29uZmlnID0ge1xuICAgIFwibmFtZVwiOiBcImFjY291bnRcIixcbiAgICBcInR5cGVcIjogXCJteXNxbFwiLFxuICAgIFwiaG9zdFwiOiBcImxvY2FsaG9zdFwiLFxuICAgIFwicG9ydFwiOiAzMzA2LFxuICAgIFwidXNlcm5hbWVcIjogXCJxdWlja3N0YXJ0XCIsXG4gICAgXCJwYXNzd29yZFwiOiBcInF1aWNrc3RhcnQxMjNcIixcbiAgICBcImRhdGFiYXNlXCI6IFwicXVpY2tzdGFydC1hY2NvdW50XCIsXG4gICAgXCJzdXBwb3J0QmlnTnVtYmVyc1wiOiB0cnVlLFxuICAgIFwiYmlnTnVtYmVyU3RyaW5nc1wiOiB0cnVlLFxuICAgIFwic3luY2hyb25pemVcIjogZmFsc2UsXG4gICAgXCJsb2dnaW5nXCI6IFsgXCJlcnJvclwiIF0sXG4gICAgXCJtaWdyYXRpb25zUnVuXCI6IHRydWUsXG4gICAgXCJlbnRpdGllc1wiOiBbXG4gICAgICAgIFwic3JjL2VudGl0eS9hY2NvdW50LyouanNcIlxuICAgIF0sXG4gICAgXCJtaWdyYXRpb25zXCI6IFtcbiAgICAgICAgXCJzcmMvbWlncmF0aW9uL2FjY291bnQvKiovKi5qc1wiXG4gICAgXSxcbiAgICBcInN1YnNjcmliZXJzXCI6IFtcbiAgICAgICAgXCJzcmMvc3Vic2NyaWJlci9hY2NvdW50LyouanNcIlxuICAgIF0sXG4gICAgXCJjbGlcIjoge1xuICAgICAgICBcImVudGl0aWVzRGlyXCI6IFwic3JjL2VudGl0eS9hY2NvdW50XCIsXG4gICAgICAgIFwibWlncmF0aW9uc0RpclwiOiBcInNyYy9taWdyYXRpb24vYWNjb3VudFwiLFxuICAgICAgICBcInN1YnNjcmliZXJzRGlyXCI6IFwic3JjL3N1YnNjcmliZXIvYWNjb3VudFwiXG4gICAgfSxcbiAgICBcInVzZU5ld1VybFBhcnNlclwiOiB0cnVlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3JtY29uZmlnO1xuIl19