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
exports.deleteProduct = exports.updateProduct = exports.getProductsByPrice = exports.getProduct = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const labels_1 = __importDefault(require("../labels"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, quantity, status } = req.body;
        const product = new product_model_1.default({ name, description, price, quantity, status });
        yield product.save();
        res.status(201).json({
            msg: labels_1.default.MSG_201,
            response: labels_1.default.SUCCESFUL_REGISTER,
            name: product._name
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
exports.createProduct = createProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productList = yield product_model_1.default.find();
        if (productList.length === 0) {
            res.status(204).json({
                msg: labels_1.default.MSG_204,
                productList,
                response: labels_1.default.NOT_FOUND,
            });
        }
        else {
            res.status(200).json({
                msg: labels_1.default.SUCCESFUL_RESPONSE,
                productList,
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
exports.getProduct = getProduct;
const getProductsByPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { min, max } = req.body;
        const productList = yield product_model_1.default.find({ price: { $gte: min, $lte: max } });
        if (productList.length === 0) {
            res.status(204).json({
                msg: labels_1.default.MSG_204,
                productList,
                response: labels_1.default.NOT_FOUND,
            });
        }
        else {
            res.status(200).json({
                msg: labels_1.default.SUCCESFUL_RESPONSE,
                productList,
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
exports.getProductsByPrice = getProductsByPrice;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const _a = req.body, { _id } = _a, rest = __rest(_a, ["_id"]);
        const product = yield product_model_1.default.findByIdAndUpdate(id, rest);
        return res.status(200).json({
            msg: labels_1.default.SUCCESFUL_UPDATE,
            product
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
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield product_model_1.default.findByIdAndDelete(id);
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
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map