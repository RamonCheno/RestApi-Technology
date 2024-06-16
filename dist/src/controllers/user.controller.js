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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const login_model_1 = __importDefault(require("../models/login.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const labels_1 = __importDefault(require("../labels"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userList = yield login_model_1.default.find();
        if (userList.length === 0) {
            res.status(204).json({
                msg: labels_1.default.MSG_204,
                userList,
                response: labels_1.default.NOT_FOUND,
            });
        }
        else {
            res.status(200).json({
                msg: labels_1.default.SUCCESFUL_RESPONSE,
                userList,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, role } = req.body;
        const user = new login_model_1.default({ username, password, role });
        const salt = bcryptjs_1.default.genSaltSync();
        user._password = bcryptjs_1.default.hashSync(password, salt);
        yield user.save();
        res.status(201).json({
            msg: labels_1.default.MSG_201,
            response: labels_1.default.SUCCESFUL_REGISTER,
            username: user._username
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const _a = req.body, { _id } = _a, rest = __rest(_a, ["_id"]);
        const user = yield login_model_1.default.findByIdAndUpdate(id, rest);
        res.status(205).json({
            msg: labels_1.default.SUCCESFUL_UPDATE,
            user
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield login_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            msg: labels_1.default.SUCCESFUL_DELETE,
            id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels_1.default.MSG_500,
            response: labels_1.default.ERROR
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map