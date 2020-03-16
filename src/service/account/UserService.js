import * as createError from "http-errors";

import { config } from "../../config";

import { User } from "../../entity/account/User";

export class UserService extends BaseRepositoryService {

    _userRepository;

    constructor(userRepository) {
        super();

        this._userRepository = userRepository;
    }

    /**
     */
    findMany = async(page, size): Promise<any> => {
        try {
            const usersInDb = await this._userRepository.findMany(page, size);

            return {
                status: 200,
                data: {
                    users: usersInDb[0],
                    totalItems: usersInDb[1],
                },
            };
        } catch (error) {
            return { error: createError(500, error) };
        }
    };

    /**
     */
    search = async(filterMap, searchKey, searchFields, page, size, sortMap, resType): Promise<any> => {
        try {
            const usersInDb = await this._userRepository.search(
                filterMap,
                searchKey,
                searchFields,
                page, 
                size,
                sortMap,
                resType,
            );

            if (Array.isArray(usersInDb[0]) && usersInDb[0].length > 0) {
                const userIds = Array.isArray(usersInDb[0]) ? usersInDb[0].map(item => item.id) : [];
                const userRolesByIdsInDb = await this._userRoleRepository.search({ userIds: userIds });

                let userRolesByIdsGroup = {};
                if (Array.isArray(userRolesByIdsInDb[0]) && userRolesByIdsInDb[0].length > 0) {
                    userRolesByIdsGroup = groupBy(userRolesByIdsInDb[0], "userId");
                }

                return {
                    data: {
                        code: 200,
                        users: usersInDb[0].map(item => ({ ...item, roles: userRolesByIdsGroup[item.id] || [] })),
                        totalItems: usersInDb[1],
                    },
                };
            }

            return {
                data: {
                    code: 200,
                    users: [],
                    totalItems: 0,
                },
            };
        } catch (error) {
            return { error: createError(500, error) };
        }
    };

    /**
     */
    findOneById = async(id): Promise<any> => {
        try {
            const userInDb = await this._userRepository.findOne({ id: id });

            if (!userInDb) return { error: createError(404) };

            const userRolesByIdsInDb = await this._userRoleRepository.search({ userIds: [userInDb.id] });

            let userRolesByIdsGroup = {};
            if (Array.isArray(userRolesByIdsInDb[0]) && userRolesByIdsInDb[0].length > 0) {
                userRolesByIdsGroup = groupBy(userRolesByIdsInDb[0], "userId");
            }

            userInDb.roles = userRolesByIdsGroup[userInDb.id] || [];

            return {
                data: {
                    code: 200,
                    user: userInDb,
                },
            };
        } catch (error) {
            return { error: createError(500, error) };
        }
    };

    /**
     */
    findOne = async(filterMap, searchKey, searchFields, resType): Promise<any> => {
        try {
            const userInDb = await this._userRepository.findOne(filterMap, searchKey, searchFields, resType);

            if (!userInDb) return { error: createError(404) };

            const userRolesByIdsInDb = await this._userRoleRepository.search({ userIds: [userInDb.id] });

            let userRolesByIdsGroup = {};
            if (Array.isArray(userRolesByIdsInDb[0]) && userRolesByIdsInDb[0].length > 0) {
                userRolesByIdsGroup = groupBy(userRolesByIdsInDb[0], "userId");
            }

            userInDb.roles = userRolesByIdsGroup[userInDb.id] || [];

            return {
                data: {
                    code: 200,
                    user: userInDb,
                },
            };
        } catch (error) {
            return { error: createError(500, error) };
        }
    };

    /**
     */
    insert = async(user): Promise<any> => {
        try {
            // const hash = generate(8);
            const userInDb = await this._userRepository.insert(new User({
                ...user,
                // password: bcryptjs.hashSync(user.password || hash, 10),
            }));

            return {
                data: {
                    code: 200,
                    user: userInDb,
                },
            };
        } catch (error) {
            // this._debugLogService.error(error.stack);
            return { error: createError(500, error) };
        }
    };

    /**
     */
    update = async(id, user): Promise<any> => {
        try {
            const userInDb = await this._userRepository.findOneById(id);

            if (!userInDb) return { error: createError(404) };

            await this._userRepository.update(userInDb);

            return {
                data: {
                    code: 200,
                },
            };
        } catch (error) {
            return { error: createError(500, error) };
        }
    };

    /**
     */
    delete = async(id): Promise<any> => {
        try {
            const userInDb = await this._userRepository.findOneById(id);

            if (!userInDb) return { error: createError(404) };

            await this._userRepository.delete(userInDb);

            return {
                data: {
                    code: 200,
                },
            };
        } catch (error) {
            return { error: createError(500, error) };
        }
    };
}
