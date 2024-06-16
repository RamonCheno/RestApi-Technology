"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
// import { check } from "express-validator";
// import labels from "../labels";
const validateFields_1 = require("../middlewares/validateFields");
const router = (0, express_1.Router)();
router.post('/', [
    validateFields_1.validateFieldRequest
], login_controller_1.default);
exports.default = router;
//# sourceMappingURL=login.routes.js.map