"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const labels_1 = __importDefault(require("../labels/labels"));
const getJwt = (uid, role) => {
    try {
        return new Promise((resolve, reject) => {
            const payload = { uid, role };
            (0, jsonwebtoken_1.sign)(payload, process.env.SECRET_KEY || '', {
                expiresIn: '1h'
            }, (error, token) => {
                if (error) {
                    console.error(error);
                    reject(labels_1.default.ERROR_TOKEN);
                }
                else {
                    resolve(token);
                }
            });
        });
    }
    catch (error) {
        console.error(error);
        throw new Error(labels_1.default.ERROR);
    }
};
exports.default = getJwt;
//# sourceMappingURL=jwt.js.map