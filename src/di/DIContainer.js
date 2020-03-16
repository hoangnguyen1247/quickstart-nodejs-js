import { ContainerBuilder, Reference } from 'node-dependency-injection';

import { AccountConnector } from '../repository/account/AccountConnector';

import { UserRepository } from "../repository/account/UserRepository";

import { UserService } from "../service/account/UserService";

export class DIContainer {

    _container = new ContainerBuilder();

    createRegister() {

        //
        //

        //
        //
        this._container.register("accountConnector", AccountConnector);

        this._container.register("userRepository", UserRepository)
            .addArgument(new Reference("accountConnector"));

        this._container.register("userService", UserService)
            .addArgument(new Reference("userRepository"))

        return this._container;
    }
}
