import createError from "http-errors";
// import * as i18n from "i18n";

// import { BaseController } from "../BaseController";
import { UserType } from "../../../enum/UserType";
// import { OperationType } from "../../../enum/OperationType";

export class StaffController {

    _rbacService;
    _userService;

    constructor(diContainer) {
        // this._rbacService = diContainer.get("rbacService");
        // this._userService = diContainer.get("userService");
    }

    /**
     * Find many
     */
    findMany = async (req, res, next) => {
        const page = req.query.page;
        const size = req.query.size;

        const { error, data } = await this._userService.findMany(page, size);

        if (error) return next(error);
        res.status(data.code || 200)
            .json({ ...data });
    };

    /**
     * @swagger
     * /account/staffs/search:
     *   get:
     *     tags:
     *       - Account - Staffs
     *     summary: Search staffs
     *     security:
     *       - Bearer: [Authorization]
     *     parameters:
     *       - in: query
     *         name: searchKey
     *         description: search keyword
     *         type: string
     *       - in: query
     *         name: searchFields
     *         description: search fields
     *         type: array
     *         items:
     *           type: string
     *           enum: [tagCode, customerFullName, customerPhoneNumber, customerEmail]
     *         collectionFormat: multi
     *       - in: query
     *         name: roleId
     *         description: role' id
     *         schema:
     *           type: number
     *         required: false
     *       - in: query
     *         name: status
     *         description: Status filter
     *         type: string
     *         enum: [new, confirmed, to-pickup, pickup-failed, pickup-successed, instock-to-record, recorded, 
     *              outstock-to-process, processing, processing-completed, instock-to-quality-check, quality-checked, 
     *              to-deliver, outstock-to-deliver, delivery-failed, delivered, cancelled, follow-up]
     *       - in: query
     *         name: pickupById
     *         description: Pickup by shipper id
     *         type: integer
     *       - in: query
     *         name: deliveryById
     *         description: Delivery by shipper id
     *         type: integer
     *       - in: query
     *         name: pickupTime
     *         description: Pickup due date
     *         type: string
     *         example: 2019-07-19
     *       - in: query
     *         name: deliveryTime
     *         description: Delivery due date
     *         type: string
     *         example: 2019-07-19
     *       - in: query
     *         name: page
     *         description: page index
     *         type: integer
     *         default: 0
     *       - in: query
     *         name: size
     *         description: page offset
     *         type: integer
     *         default: 12
     *       - in: query
     *         name: sortBy
     *         description: Sort by
     *         type: string
     *         enum: [dateTime]
     *         default: dateTime
     *       - in: query
     *         name: sortDirection
     *         description: sort direction
     *         type: integer
     *         enum: [-1, 1]
     *       - in: query
     *         name: responseType
     *         description: response type
     *         type: string
     *         enum: [list]
     *         default: list
     *     responses:
     *       200:
     *         description: Ok
     *         schema:
     *           type: object
     *           properties:
     *             users:
     *               type: array
     *               items:
     *                 type: object
     *                 $ref: '#/definitions/User'
     *             totalItems:
     *               type: number
     *       400:
     *         description: BadRequest
     *         schema:
     *           type: object
     *           $ref: '#/definitions/Error'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden
     *       500:
     *         description: InternalServerError
     *       503:
     *         description: Authorized fail
     */
    search = async (req, res, next) => {
        const searchKey = req.query.searchKey;
        const searchFields = req.query.searchFields;
        const page = req.query.page;
        const size = req.query.size;
        const roleId = req.query.roleId;
        const sortBy = req.query.sortBy;
        const sortDirection = req.query.sortDirection;
        const responseType = req.query.responseType;

        const filterMap = {
            isStaff: 1,
        };
        if (roleId) {
            filterMap["roleId"] = roleId;
        }

        const sortMap = {};
        if (sortBy === "dateTime") {
            sortMap["createdDate"] = parseInt(sortDirection, 10) === 1 ? 1 : -1;
        }

        const user = req.query.user;
        if (!user) {
            return next(createError(401));
        }
        // if (! await this._rbacService.hasPermission(user, OperationType.StaffView)) {
        //     return next(createError(403, "", {
        //         error: { errorCode: "permissionDenied" },
        //     }));
        // }

        const { error, data } = await this._userService.search(
            filterMap,
            searchKey,
            Array.isArray(searchFields) ? searchFields : (typeof searchFields === "string" ? [searchFields] : []),
            page,
            size,
            sortMap,
            responseType,
        );

        if (error) return next(error);
        res.status(data.code || 200)
            .json({...data});
    };

    /**
     * @swagger
     * /account/staffs/{id}:
     *   get:
     *     tags:
     *       - Account - Staffs
     *     summary: find one user by id
     *     description: find one user by id
     *     security:
     *       - Bearer: [Authorization]
     *     parameters:
     *       - in: path
     *         name: id
     *         description: setting id
     *         type: integer
     *     responses:
     *       200:
     *         description: Ok
     */
    findOneById = async (req, res, next) => {
        const staffId = req.params.id || null;

        if (!staffId) {
            return next(createError(400));
        }

        const { error, data } = await this._userService.findOneById(staffId);

        if (error) return next(error);
        res.status(data.code || 200)
            .json({...data});
    };

    /**
     * @swagger
     * /account/staffs:
     *   post:
     *     tags:
     *       - Account - Staffs
     *     summary: Insert new user
     *     description: Insert new user
     *     security:
     *       - Bearer: [Authorization]
     *     parameters:
     *       - in: formData
     *         name: fullName
     *         description: user's fullName
     *         schema:
     *           type: string
     *         required: true
     *       - in: formData
     *         name: email
     *         description: user's email
     *         schema:
     *           type: string
     *         required: true
     *       - in: formData
     *         name: phoneNumber
     *         description: user's phoneNumber
     *         schema:
     *           type: string
     *         required: false
     *     responses:
     *       200:
     *         description: Ok
     */
    insert = async (req, res, next) => {
        const fullName = req.body.fullName || "";
        const phoneNumber = req.body.phoneNumber || "";
        const email = req.body.email || "";
        const identityNumber = req.body.identityNumber || "";
        const gender = req.body.gender || "";
        const dob = req.body.dob || "";
        const socialProfileUrl = req.body.socialProfileUrl || "";
        const joinedDate = req.body.joinedDate || "";
        const contractType = req.body.contractType || "";
        const role = req.body.role || "";
        const note = req.body.note || "";
        // const username = req.body.username || "";
        const password = req.body.password || "";

        const user = req.query.user;

        if (!fullName) {
            return next(createError(400, "", {
                error: { errorCode: "fullNameIsRequired" },
            }));
        }
        if (!email) {
            return next(createError(400, "", {
                error: { errorCode: "emailIsRequired" },
            }));
        }

        const { error, data } = await this._userService.insert({
            fullName,
            phoneNumber,
            email,
            identityNumber,
            gender,
            dob,
            socialProfileUrl,
            joinedDate,
            contractType,
            role,
            userType: UserType.Staff,
            isStaff: 1,
            note,
            username: email,
            password,
            createdBy: user ? user.id : null,
            lastModifiedBy: user ? user.id : null,
        });

        if (error) return next(error);
        res.status(data.code || 200)
            .json({ ...data });
    };

    /**
     * @swagger
     * /account/staffs/{id}:
     *   put:
     *     tags:
     *       - Account - Staffs
     *     summary: find one user by id
     *     description: find one user by id
     *     security:
     *       - Bearer: [Authorization]
     *     parameters:
     *       - in: path
     *         name: id
     *         description: setting id
     *         type: integer
     *     responses:
     *       200:
     *         description: Ok
     */
    update = async (req, res, next) => {
        const staffId = req.body.id || "";
        const fullName = req.body.fullName || "";
        const phoneNumber = req.body.phoneNumber || "";
        const email = req.body.email || "";
        const identityNumber = req.body.identityNumber || "";
        const gender = req.body.gender || "";
        const dob = req.body.dob || "";
        const socialProfileUrl = req.body.socialProfileUrl || "";
        const joinedDate = req.body.joinedDate || "";
        const contractType = req.body.contractType || "";
        const role = req.body.role || "";
        const note = req.body.note || "";

        const user = req.query.user;

        if (!staffId) {
            return next(createError(400));
        }

        if (!fullName || !phoneNumber || !email) {
            return next(createError(400));
        }

        const { error, data } = await this._userService.update(staffId, {
            fullName,
            gender,
            dob,
            phoneNumber,
            email,
            identityNumber,
            socialProfileUrl,
            joinedDate,
            contractType,
            role,
            note,
            lastModifiedBy: user ? user.id : null,
        });

        if (error) return next(error);
        res.status(data.code || 200)
            .json({ ...data });
    };

    /**
     * @swagger
     * /account/staffs/{id}:
     *   delete:
     *     tags:
     *       - Account - Staffs
     *     summary: find one user by id
     *     description: find one user by id
     *     security:
     *       - Bearer: [Authorization]
     *     parameters:
     *       - in: path
     *         name: id
     *         description: setting id
     *         type: integer
     *     responses:
     *       200:
     *         description: Ok
     */
    delete = async (req, res, next) => {
        const userId = req.params.id || 0;

        // const user = req.query.user;

        if (!userId) {
            return next(createError(400));
        }

        const { error, data } = await this._userService.delete(userId);

        if (error) return next(error);
        res.status(data.code || 200)
            .json({ ...data });
    };
}
