import { Brackets, Repository } from "typeorm";

import { isNumber, isObject } from "../../utils/TypeUtils";
import { newMySQLDateISOString } from '../../utils/DateTimeUtils';

import { BaseEntity } from "../../entity/account/BaseEntity";

export class BaseRepository {

    _baseRepository;

    constructor(baseRepository) {
        this._baseRepository = baseRepository;
    }

    findMany = async(page, size) => {
        const query = this._baseRepository
            .createQueryBuilder("entity");
        const countQuery = this._baseRepository
            .createQueryBuilder("entity")
            .select("COUNT(id)", "count")
            .where("1 = 1");

        // select
        const selectColumns = [ "id", "createdDate" ];
        if (Array.isArray(selectColumns) && selectColumns.length > 0) {
            query.select([
                ...selectColumns.map(mItem => `entity.${mItem}`),
            ]);
        }

        // conjunction
        query.where("1 = 1");

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

    search = async(filterMap, searchKey, searchFields, page, size, sortMap, resType) => {
        const query = this._baseRepository
            .createQueryBuilder("entity");
        const countQuery = this._baseRepository
            .createQueryBuilder("entity")
            .select("COUNT(entity.id)", "count")
            .where("1 = 1");

        // select
        const allowResTypes = ["list"];
        const resTypeMap = {
            "list": [ "id", "createdDate" ],
        };
        const selectColumns = allowResTypes[resType] ? resTypeMap[resType] : resTypeMap["list"];
        if (Array.isArray(selectColumns) && selectColumns.length > 0) {
            query.select([
                ...selectColumns.map(mItem => `entity.${mItem}`),
            ]);
        }

        // conjunction
        query.where("1 = 1");

        // search
        const allowSearchCols = [
            "fullName",
        ];
        const parsedSearchCols = Array.isArray(searchFields) && searchFields.length > 0 ?
            searchFields.filter(fItem => allowSearchCols.includes(fItem)) : [];
        if (searchKey && parsedSearchCols.length > 0) {
            const searchBrackets = new Brackets(qb => {
                qb.where("0 = 1");
                parsedSearchCols
                    .forEach(item => {
                        if (["fullName"].includes(item)) {
                            qb.orWhere(`entity.${item} LIKE '%${searchKey}%'`);
                        } else {
                            qb.orWhere(`entity.${item} = '${searchKey}'`);
                        }
                    });
                    
            });
            query.andWhere(searchBrackets);
            countQuery.andWhere(searchBrackets);
        }

        // filters
        const allowFilterCols = [
            "createdDate",
        ];
        const parsedFilterKeys = isObject(filterMap) ? Object.keys(filterMap).filter(fItem => allowFilterCols.includes(fItem)) : [];
        if (Array.isArray(parsedFilterKeys) && parsedFilterKeys.length > 0) {
            parsedFilterKeys
                .forEach(item => {
                    if (["createdDate"].includes(item)) { // Date
                        query.andWhere(`DATE(entity.${item}) = ${filterMap[item]}`);
                        countQuery.andWhere(`DATE(entity.${item}) = ${filterMap[item]}`);
                    } else {
                        if (typeof filterMap[item] === "string") {
                            query.andWhere(`entity.${item} = '${filterMap[item]}'`);
                            countQuery.andWhere(`entity.${item} = '${filterMap[item]}'`);
                        } else {
                            query.andWhere(`entity.${item} = ${filterMap[item]}`);
                            countQuery.andWhere(`entity.${item} = ${filterMap[item]}`);
                        }
                    }
                });
        }
          
        // order by
        const allowSortCols = [
            "createdDate",
        ];
        const parsedSortCols = isObject(sortMap) ? Object.keys(sortMap).filter(fItem => allowSortCols.includes(fItem)) : [];
        if (parsedSortCols.length > 0) {
            parsedSortCols
                .forEach((mItem, index) => {
                    if (index === 0) {
                        query.orderBy(`entity.${mItem}`, parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                    } else {
                        query.addOrderBy(`entity.${mItem}`, parseInt(sortMap[mItem], 10) === 1 ? 'DESC' : 'ASC');
                    }
                });
        } else {
            query.orderBy("entity.createdDate", "DESC");
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

    // findOneById = async(id) => {
    //     const query = this._baseRepository
    //         .createQueryBuilder("entity");

    //     // select
    //     query.select([
    //         ...["id", "createdDate"].map(mItem => `entity.${mItem}`),
    //     ] as string[]);

    //     // where
    //     query.where(`entity.id = ${id}`);

    //     // get one
    //     return await query.getOne();
    // };

    findOneById = async(id: string | number) => {
        return await this._baseRepository.findOne(id);
    };

    findOne = async(filterMap, searchKey?, searchFields?, resType?): Promise<any> => {
        const query = this._baseRepository
            .createQueryBuilder("entity");

        // select
        const allowResTypes = ["list"];
        const resTypeMap = {
            "list": [ "id", "createdDate" ],
        };
        const selectCols = allowResTypes[resType] ? resTypeMap[resType] : resTypeMap["list"];
        if (Array.isArray(selectCols) && selectCols.length > 0) {
            query.select([
                ...selectCols.map(mItem => `entity.${mItem}`),
            ]);
        }

        // conjunction
        query.where("1 = 1");

        // filters
        const allowFilterCols = [
            "id",
            "createdDate",
        ];
        const parsedFilterCols = isObject(filterMap) ? Object.keys(filterMap).filter(fIt => allowFilterCols.includes(fIt)) : [];
        if (Array.isArray(parsedFilterCols) && parsedFilterCols.length > 0) {
            parsedFilterCols
                .forEach((key) => {
                    if (["createdDate"].includes(key)) { // Date
                        query.andWhere(`DATE(entity.${key}) = '${filterMap[key]}'`);
                    } else {
                        if (typeof filterMap[key] === "string") {
                            query.andWhere(`entity.${key} = '${filterMap[key]}'`);
                        } else {
                            query.andWhere(`entity.${key} = ${filterMap[key]}`);
                        }
                    }
                });
        } else {
            query.andWhere("0 = 1"); // dejunction
        }

        // get one
        return await query.getOne();
    };

    insert = async (entity: BaseEntity) => {
        const { id } = await this._baseRepository.save(entity);

        if (id) {
            return await this.findOne({ id: id });
        }

        return null;
    };

    insertMany = async(entities: BaseEntity[]) => {
        return await this._baseRepository.save(entities);
    };

    update = async(entity: BaseEntity) => {
        if (!entity) {
            throw Error();
        }
        entity.lastModifiedDate = newMySQLDateISOString();

        return await this._baseRepository.save(entity);
    };

    delete = async(entity: T) => {
        return await this._baseRepository.remove(entity);
    };

    count = async () => {
        const count = await this._baseRepository
            .createQueryBuilder()
            .select("COUNT(id)", "count")
            .getRawOne();

        return typeof count === "object" ? parseInt(count.count, 10) : 0;
    }
    
    groupByKeyAndCount = async(key) => {
        return await this._baseRepository
            .createQueryBuilder("entity")
            .select(`entity.${key}`, `${key}`)
            .addSelect(`COUNT(entity.id)`, "count")
            .groupBy(`entity.${key}`)
            .getRawMany();
    };
}
