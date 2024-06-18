"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateFields_1 = require("../middlewares/validateFields");
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const user_controller_1 = require("../controllers/user.controller");
const labels_1 = __importDefault(require("../labels/labels"));
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../helpers/db.validators");
const role_labels_1 = __importDefault(require("../labels/role_labels"));
const router = (0, express_1.Router)();
router.post("/create", [
    (0, validateJWT_1.default)(role_labels_1.default.ADMIN),
    validateFields_1.validateFieldRequest
], user_controller_1.createUser);
router.get("/", [
    (0, validateJWT_1.default)(role_labels_1.default.ADMIN)
], user_controller_1.getUsers);
router.put("/update/:id", [
    (0, validateJWT_1.default)(role_labels_1.default.ADMIN),
    (0, express_validator_1.check)('id', labels_1.default.NOT_VALID_ID).isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.userExists),
    validateFields_1.validateFieldRequest
], user_controller_1.updateUser);
router.delete("/delete/:id", [
    (0, validateJWT_1.default)(role_labels_1.default.ADMIN),
    (0, express_validator_1.check)('id', labels_1.default.NOT_VALID_ID).isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.userExists),
    validateFields_1.validateFieldRequest
], user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map