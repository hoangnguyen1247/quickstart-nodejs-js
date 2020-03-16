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
        "src/entity/account/*.ts",
    ],
    "migrations": [
        "src/migration/account/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/account/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity/account",
        "migrationsDir": "src/migration/account",
        "subscribersDir": "src/subscriber/account"
    },
    "useNewUrlParser": true,
};

export default ormconfig;
