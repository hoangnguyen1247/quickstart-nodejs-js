import { getRepository, Brackets } from "typeorm";

import { isNumber } from "../../utils/TypeUtils";

// import { UserType } from "../../enum/UserType";
import { User } from "../../entity/account/User";
// import { UserRole } from "../../entity/account/UserRole";
import { BaseRepository } from "./BaseRepository";
import { AccountConnector } from "./AccountConnector";

export class UserRepository extends BaseRepository<User> {

    constructor(mysqlConnector: AccountConnector) {
        super(mysqlConnector.getConnection().getRepository(User));
    }

    search = async(filterMap, searchKey, searchFields, page, size, sortMap, resType) => {
        const query = this._baseRepository
            .createQueryBuilder("user")
            .leftJoin("user.roles", "role");
        const countQuery = this._baseRepository
            .createQueryBuilder("user")
            .leftJoin("user.roles", "role");

        // select
        const allowResTypes = ["list"];
        const resTypeMap = {
            "list": User.USER_LIST_COLUMNS,
        };
        const selectColumns = allowResTypes[resType] ? resTypeMap[resType] : resTypeMap["list"];
        if (Array.isArray(selectColumns) && selectColumns.length > 0) {
            query.distinct().select([
                ...selectColumns.map(mItem => `user.${mItem}`),
                // ...Role.ROLE_LIST_COLUMNS.map(mItem => `role.${mItem}`),
            ]);
        }

        countQuery.select("COUNT(DISTINCT user.id)", "count");

        // conjunction
        query.where("1 = 1");
        countQuery.where("1 = 1");

        query.andWhere(`user.userType != '${UserType.Administrator}'`);
        countQuery.andWhere(`user.userType != '${UserType.Administrator}'`);

        this._createQueryCriteria("search", query, filterMap, searchKey, searchFields, resType);
        this._createQueryCriteria("search", countQuery, filterMap, searchKey, searchFields, resType);
        
        // order by
        const allowSortColumns = [
            "createdDate",
        ];
        const parsedSortColumns = !!sortMap && typeof sortMap === "object" && sortMap.constructor === Object ?
            Object.keys(sortMap).filter(fItem => allowSortColumns.includes(fItem)) : [];
        if (parsedSortColumns.length > 0) {
            parsedSortColumns
                .map((mItem, index) => {
                    if (index === 0) {
                        query.orderBy(`user.${mItem}`, parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                    } else {
                        query.addOrderBy(`user.${mItem}`, parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                    }
                });
        } else {
            query.orderBy("user.createdDate", "DESC");
        }

        // offset, limit
        const parsedPage = parseInt(page, 10);
        const parsedPageSize = parseInt(size, 10);
        if (isNumber(parsedPage) && isNumber(parsedPageSize)) {
            query.offset(parsedPage * parsedPageSize).limit(parsedPageSize);
        }
        const data = await query.getMany();
        const count = await countQuery.getRawOne();

        return [
            data,
            typeof count === "object" ? parseInt(count.count, 10) : 0,
        ];
    };

    findOneById = async(id) => {
        const query = this._baseRepository
            .createQueryBuilder("user")
            .leftJoin("user.roles", "role");

        // select
        query.select([
            ...User.USER_LIST_COLUMNS.map(mItem => `user.${mItem}`),
        ]);

        // where
        query.where(`user.id = ${id}`);

        // get one
        return await query.getOne();
    }

    findOne = async(filterMap, searchKey, searchFields, resType) => {
        const query = this._baseRepository
            .createQueryBuilder("user")
            .leftJoin("user.roles", "role");

        // select
        const allowResTypes = [ "list", "login" ];
        const resTypeMap = {
            list: User.USER_LIST_COLUMNS,
            login: User.USER_LOGIN_COLUMNS,
        };
        const selectColumns = allowResTypes.includes(resType) ? resTypeMap[resType] : resTypeMap["list"];
        if (Array.isArray(selectColumns) && selectColumns.length > 0) {
            query.select([
                ...selectColumns.map(mItem => `user.${mItem}`),
                ...UserRole.USER_ROLE_LIST_COLUMNS.map(mItem => `role.${mItem}`),
            ]);
        }

        // conjunction
        query.where("1 = 1");

        this._createQueryCriteria("findOne", query, filterMap, searchKey, searchFields, resType);

        // get one
        return await query.getOne();
    }

    _createQueryCriteria = (type, query, filterMap, searchKey, searchFields, resType) => {
        // search
        const allowSearchColumns = [
            "fullName",
            "phoneNumber",
            "email",
        ];
        const parsedSearchColumns = Array.isArray(searchFields) && searchFields.length > 0 ?
            searchFields.filter(fItem => allowSearchColumns.includes(fItem)) : [];
        if (searchKey && parsedSearchColumns.length > 0) {
            const searchBrackets = new Brackets(qb => {
                qb.where("0 = 1");
                parsedSearchColumns
                    .forEach(item => {
                        if (["fullName", "phoneNumber", "email"].includes(item)) {
                            qb.orWhere(`user.${item} LIKE '%${searchKey}%'`);
                        } else {
                            qb.orWhere(`user.${item} = '${searchKey}'`);
                        }
                    });
                    
            })
            query.andWhere(searchBrackets);
        }

        // filters
        const allowFilterColumns = [
            "id",
            "fullName",
            "userType",
            "roleId",
            "code",
            "email",
            "phoneNumber",
            "isCustomer",
            "isStaff",
            "ids",
            "username",
            "facebookId",
            "googleId",
            "trelloId",
            "createdDate",
        ];
        const parsedFilterKeys = !!filterMap && typeof filterMap === "object" && filterMap.constructor === Object ? 
            Object.keys(filterMap).filter(fItem => allowFilterColumns.includes(fItem)) : [];
        if (Array.isArray(parsedFilterKeys) && parsedFilterKeys.length > 0) {
            parsedFilterKeys
                .forEach(item => {
                    if (["createdDate"].includes(item)) { // Date
                        query.andWhere(`DATE(user.${item}) = ${filterMap[item]}`);
                    } else if (["roleId"].includes(item)) {
                        query.andWhere(`role.roleId = ${filterMap[item]}`);
                    } else if (["isCustomer", "isStaff"].includes(item)) {
                        query.andWhere(`user.${item} = ${filterMap[item]}`);
                    } else {
                        if (typeof filterMap[item] === "string") {
                            query.andWhere(`user.${item} = '${filterMap[item]}'`);
                        } else {
                            query.andWhere(`user.${item} = ${filterMap[item]}`);
                        }
                    }
                });
        } else {
            if (type === "findOne") {
                // dejunction
                query.andWhere("0 = 1");
            }
        }
    }
}
