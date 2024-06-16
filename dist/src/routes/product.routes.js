"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const product_controller_1 = require("../controllers/product.controller");
const validateFields_1 = require("../middlewares/validateFields");
const express_validator_1 = require("express-validator");
const labels_1 = __importDefault(require("../labels"));
const db_validators_1 = require("../helpers/db.validators");
const role_labels_1 = __importDefault(require("../role_labels"));
const router = (0, express_1.Router)();
router.get("/", [
    (0, validateJWT_1.default)()
], product_controller_1.getProduct);
router.get("/byprice", [
    (0, validateJWT_1.default)(role_labels_1.default.TEC),
], product_controller_1.getProductsByPrice);
router.post("/create", [
    (0, validateJWT_1.default)(role_labels_1.default.SUPER),
    validateFields_1.validateFieldRequest
], product_controller_1.createProduct);
router.put("/update/:id", [
    (0, validateJWT_1.default)(role_labels_1.default.SUPER),
    (0, express_validator_1.check)('id', labels_1.default.NOT_VALID_ID).isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.productExists),
    validateFields_1.validateFieldRequest
], product_controller_1.updateProduct);
router.delete("/delete/:id", [
    (0, validateJWT_1.default)(role_labels_1.default.SUPER),
    (0, express_validator_1.check)('id', labels_1.default.NOT_VALID_ID).isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.productExists),
    validateFields_1.validateFieldRequest
], product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map