"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const labels_1 = __importDefault(require("../labels/labels"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login_model_1 = __importDefault(require("../models/login.model"));
const role_labels_1 = __importDefault(require("../labels/role_labels"));
const validateJwt = (roleToValidate) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.header(labels_1.default.AUTHORIZATION);
            if (!token) {
                return res.status(401).json({
                    msg: labels_1.default.MSG_401,
                    response: labels_1.default.TOKEN_FAILLED
                });
            }
            const { uid, role } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || '');
            const user = yield login_model_1.default.findById(uid);
            if (!user) {
                return res.status(401).json({
                    msg: labels_1.default.MSG_401,
                    response: labels_1.default.NOT_AUTHORIZATION
                });
            }
            if (!user._status) {
                return res.status(401).json({
                    msg: labels_1.default.MSG_401,
                    response: labels_1.default.NOT_AUTHORIZATION
                });
            }
            if (user._role !== roleToValidate && user._role !== role_labels_1.default.ADMIN
                && roleToValidate) {
                return res.status(401).json({
                    msg: labels_1.default.MSG_401,
                    response: labels_1.default.ROLE_NOT_PERMISSIONS,
                    role: user._role
                });
            }
            next();
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                msg: labels_1.default.MSG_500,
                response: labels_1.default.ERROR
            });
        }
    });
};
exports.default = validateJwt;
//# sourceMappingURL=validateJWT.js.map