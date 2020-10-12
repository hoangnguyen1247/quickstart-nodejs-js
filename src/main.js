import { DIContainer } from "src/di/DIContainer";
import { createServer } from "src/server";

async function initAccountDb() {

}

async function main() {
    try {
        const diContainer = (new DIContainer()).createRegister();

        await initAccountDb();

        await createServer(diContainer);
        console.log("Server has started");
    } catch(error) {
        console.log("Start server error: " + error);
    }
}

main();
