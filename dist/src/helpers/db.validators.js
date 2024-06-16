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
exports.userExists = exports.productExists = void 0;
const labels_1 = __importDefault(require("../labels"));
const login_model_1 = __importDefault(require("../models/login.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const productExists = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDB = yield product_model_1.default.findById(id);
        if (!idDB)
            throw new Error(`${labels_1.default.ID_PRODUCT}${id} ${labels_1.default.NOT_EXISTS}`);
    }
    catch (error) {
        console.error(error);
        throw new Error(labels_1.default.MSG_500);
    }
});
exports.productExists = productExists;
const userExists = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDB = yield login_model_1.default.findById(id);
        if (!idDB)
            throw new Error(`${labels_1.default.ID_USER}${id} ${labels_1.default.NOT_EXISTS}`);
    }
    catch (error) {
        console.error(error);
        throw new Error(labels_1.default.MSG_500);
    }
});
exports.userExists = userExists;
//# sourceMappingURL=db.validators.js.map