import { createConnection, Connection } from 'typeorm';

import { config } from "../../config";
// import { ICustomEntitySubscriberInterface } from '../../abstract/subscriber/ICustomEntitySubscriberInterface';
import { User } from '../../entity/account/User';

export class AccountConnector {

    _connection: Connection;

    constructor() {
    }

    createConnection = async (diContainer) => {
        try {
            if (!this._connection) {
                this._connection = await createConnection(config.database.account.config);
            }

            // const subscribers = this._connection.subscribers;
            // if (Array.isArray(subscribers) && subscribers.length > 0) {
            //     subscribers.forEach(subscriber => {
            //         (subscriber as ICustomEntitySubscriberInterface<any>).bindArguments(diContainer);
            //     });
            // }

            const administratorUser = await this._connection.manager.findOne(User, 1);
            if (!administratorUser) {
                await this._connection.manager.save(new User({
                    id: 1,
                    userType: "administrator",
                    email: "developer@nhulanha.com",
                    phoneNumber: "962427499",
                    username: "developer@nhulanha.com",
                }))
            }
        } catch (error) {
            console.error("Account connection error: " + error);
        }
    }

    getConnection = () => {
        return this._connection;
    }
}
