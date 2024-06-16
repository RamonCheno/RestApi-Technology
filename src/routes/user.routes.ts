import { Router } from "express";
import { validateFieldRequest } from "../middlewares/validateFields";
import validateJwt from "../middlewares/validateJWT";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller";
import labels from "../labels";
import { check } from "express-validator";
import { userExists } from "../helpers/db.validators";
import role_labels from "../role_labels";

const router = Router();

router.post("/create", [
    validateJwt(role_labels.ADMIN),
    validateFieldRequest
], createUser);

router.get("/", [
    validateJwt(role_labels.ADMIN)
], getUsers)

router.put("/update/:id", [
    validateJwt(role_labels.ADMIN),
    check('id', labels.NOT_VALID_ID).isMongoId(),
    check('id').custom(userExists),
    validateFieldRequest
], updateUser);

router.delete("/delete/:id", [
    validateJwt(role_labels.ADMIN),
    check('id', labels.NOT_VALID_ID).isMongoId(),
    check('id').custom(userExists),
    validateFieldRequest
], deleteUser);

export default router;