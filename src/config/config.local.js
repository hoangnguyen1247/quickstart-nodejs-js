import { configCommon } from './config.common';

export const config = {
    server: Object.assign({}, configCommon.server, {
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
        swaggerDefinition: Object.assign({}, configCommon.swaggerConfig.swaggerDefinition, {
            host: "localhost:4201",
        }),
        apis: configCommon.swaggerConfig.apis,
    },
    database: {
        account: Object.assign({}, configCommon.database.account, {
        }),
    }
}
