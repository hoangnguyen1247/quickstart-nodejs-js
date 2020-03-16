const ormconfig = {
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
    "logging": [ "error" ],
    "migrationsRun": true,
    "entities": [
        "src/entity/account/*.js"
    ],
    "migrations": [
        "src/migration/account/**/*.js"
    ],
    "subscribers": [
        "src/subscriber/account/*.js"
    ],
    "cli": {
        "entitiesDir": "src/entity/account",
        "migrationsDir": "src/migration/account",
        "subscribersDir": "src/subscriber/account"
    },
    "useNewUrlParser": true
}

module.exports = ormconfig;
