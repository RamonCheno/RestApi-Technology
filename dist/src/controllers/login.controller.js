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
const login_model_1 = __importDefault(require("../models/login.model"));
const labels_1 = __importDefault(require("../labels"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield login_model_1.default.findOne({ username });
        if (!user) {
            return res.status(400).json({
                msg: labels_1.default.MSG_400,
                response: labels_1.default.FALIED_LOGIN
            });
        }
        if (!user._status) {
            return res.status(400).json({
                msg: labels_1.default.MSG_400,
                response: labels_1.default.STATUS_USER
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user._password);
        if (!validPassword) {
            return res.status(400).json({
                msg: labels_1.default.MSG_400,
                response: labels_1.default.FALIED_LOGIN
            });
        }
        const token = yield (0, jwt_1.default)(String(user._id), user._role);
        res.status(200).json({
            msg: labels_1.default.SUCCESFUL_LOGIN,
            username: user._username,
            token,
            expireIn: 3600
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
});
exports.default = login;
//# sourceMappingURL=login.controller.js.map