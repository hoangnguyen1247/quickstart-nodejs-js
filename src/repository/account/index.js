import { MongoClient } from "mongodb";

import { config } from "src/config";

export class AccountRepository {

    client;

    openDB = async(databaseName) => {
        this.client = await MongoClient.connect(config.database.account.config.uri);
        return this.client.db(databaseName);
    }

    closeDB = async() => {
        if (this.client) {
            this.client.close();
        }
    }
}
