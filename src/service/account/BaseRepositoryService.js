import * as createError from "http-errors";

import { BaseService } from "./BaseService";

export class BaseRepositoryService extends BaseService {

    findMany = async(page?, size?) => {
        return { error: createError(501) };
    };

    search = async(filterMap?, searchKey?, searchFields?, page?, size?, sortMap?, resType?) => {
        return { error: createError(501) };
    };

    findOneById = async(id) => {
        return { error: createError(501) };
    };

    findOne = async(filterMap, searchKey, searchFields, resType?) => {
        return { error: createError(501) };
    };

    insert = async(entityDto): Promise<any> => {
        return { error: createError(501) };
    };

    insertMany = async(entitiesDto) => {
        return { error: createError(501) };
    };

    update = async(entityId, entity) => {
        return { error: createError(501) };
    };

    delete = async(entityId) => {
        return { error: createError(501) };
    }
}
