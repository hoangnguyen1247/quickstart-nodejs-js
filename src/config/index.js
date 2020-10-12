import {config as configLocal} from "./config.local";
import {config as configDevelopment} from "./config.local";
import {config as configStaging} from "./config.local";
import {config as configProduction} from "./config.local";

let selectedProfile = configLocal;
switch (process.env.NODE_ENV) {
    case "development":
        selectedProfile = configDevelopment;
        break;
    case "staging":
        selectedProfile = configStaging;
        break;
    case "production":
        selectedProfile = configProduction;
        break;
    default:
        selectedProfile = configLocal;
        break;
}

export const config = selectedProfile;
