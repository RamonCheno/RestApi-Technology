"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
class Product {
    constructor(name, description, price, quantity, status) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.status = status;
    }
    get _name() {
        return this.name;
    }
}
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, type: () => String })
], Product.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, type: () => String })
], Product.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, type: () => Number, min: 1 })
], Product.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, type: () => Number, min: 1 })
], Product.prototype, "quantity", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, type: () => String })
], Product.prototype, "status", void 0);
const ProductModel = (0, typegoose_1.getModelForClass)(Product);
exports.default = ProductModel;
//# sourceMappingURL=product.model.js.map