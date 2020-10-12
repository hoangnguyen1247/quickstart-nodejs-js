import { ContainerBuilder } from 'node-dependency-injection';

export class DIContainer {

    _container = new ContainerBuilder();

    createRegister() {

        return this._container;
    }
}
