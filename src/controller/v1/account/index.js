import express from 'express';

import { StaffController } from "./StaffController";

export function AccountRouter(diContainer, oauth2Server) {

    const router = express.Router();
    const staffController = new StaffController(diContainer);

    router.route("/staffs")
        .get(staffController.findMany)
        .post(staffController.insert);
    router.route("/staffs/search")
        .get(staffController.search);
    router.route("/staffs/:id")
        .get(staffController.findOneById)
        .put(staffController.update)
        .delete(staffController.delete);

    return router;
}
