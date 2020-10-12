import packageJson from "../../package.json";

export const configCommon = {
    version: {
        versionName: packageJson.version,
        versionCode: 1,
        revision: "",
    },
    server: {
        port: 5401,
    },
    serverMaps: {
        "/common": "http://localhost:5201",
    },
    corsOptions: {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        exposedHeaders: "Authorization",
        credentials: true,
        optionsSuccessStatus: 200,
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
            grant_type: "password",
        },
    },
    httpAuth: {
        username: "quickstart",
        password: "quickstart123",
    },
    swaggerConfig: {
        swaggerDefinition: {
            info: {
                title: 'RESTful API',
                version: '1.0.0',
                description: 'RESTful API description',
            },
            host: 'api.nhulanha.com',
            basePath: '/',
            securityDefinitions: {
                Bearer: {
                    type: "apiKey",
                    in: "header",
                    name: "Authorization",
                }
            }
        },
        apis: ['./src/controller/**/*.ts'],
    },
    database: {
        account: {
            uri: "mongodb://root:rootpwd123@mongo1:27011,mongo2:27012,mongo3:27013",
            databaseName: "account",
        },
    }
};
