import { configCommon } from './config.common';

export const config = {
    server: objectAssign({}, configCommon.server, {
        port: 4201,
    }),
    serverMaps: Object.assign({}, configCommon.serverMaps, {
        "/common": "http://localhost:4201",
    }),
    corsOptions: configCommon.corsOptions,
    jwt: {
        forgotPassword: configCommon.jwt.forgotPassword,
    },
    oauth2: configCommon.oauth2,
    httpAuth: configCommon.httpAuth,
    swaggerConfig: {
        swaggerDefinition: objectAssign({}, configCommon.swaggerConfig.swaggerDefinition, {
            host: "localhost:4201",
        }),
        apis: configCommon.swaggerConfig.apis,
    },
    database: {
        account: {
            config: objectAssign({}, configCommon.database.account.config, {
                "synchronize": false,
            }),
        },
    }
}
