import { config } from "src/config";
import { DIContainer } from "src/di/DIContainer";
import { createServer } from "src/server";

import { AccountRepository } from "src/repository/account";

async function initAccountDb(accountRepoConfig) {
    const accountRepository = new AccountRepository();
    try {
        accountRepository.openDB(accountRepoConfig.databaseName)
    } catch (err) {
        console.log(err);
        accountRepository.closeDB();
    }
}

async function main() {
    try {
        const diContainer = (new DIContainer()).createRegister();

        const accountRepoConfig = config.database.account;
        await initAccountDb(accountRepoConfig);

        await createServer(diContainer);
        console.log("Server has started");
    } catch(error) {
        console.log("Start server error: " + error);
    }
}

main();
