import { Router } from "express";
import validateJwt from "../middlewares/validateJWT";
import {
    createProduct, getProduct, getProductsByPrice,
    updateProduct, deleteProduct
} from "../controllers/product.controller";
import { validateFieldRequest } from "../middlewares/validateFields";
import { check } from "express-validator";
import labels from "../labels/labels";
import { productExists } from "../helpers/db.validators";
import role_labels from "../labels/role_labels";

const router = Router();

router.get("/", [
    validateJwt()
], getProduct);

router.get("/byprice", [
    validateJwt(),
], getProductsByPrice);

router.post("/create", [
    validateJwt(role_labels.SUPER),
    validateFieldRequest
], createProduct);

router.put("/update/:id", [
    validateJwt(role_labels.SUPER),
    check('id', labels.NOT_VALID_ID).isMongoId(),
    check('id').custom(productExists),
    validateFieldRequest
], updateProduct);

router.delete("/delete/:id", [
    validateJwt(role_labels.SUPER),
    check('id', labels.NOT_VALID_ID).isMongoId(),
    check('id').custom(productExists),
    validateFieldRequest
], deleteProduct);

export default router;
