"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
class Login {
    //#endRegion
    constructor(username, password, role, status) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.status = status;
    }
    //#region Getters
    get _username() {
        return this.username;
    }
    get _password() {
        return this.password;
    }
    get _role() {
        return this.role;
    }
    get _status() {
        return this.status;
    }
    //#endRegion
    //#region Setters
    set _password(password) {
        this.password = password;
    }
}
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, unique: true, type: () => String })
], Login.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, type: () => String })
], Login.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, type: () => String })
], Login.prototype, "role", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, type: () => Boolean, default: true })
], Login.prototype, "status", void 0);
const LoginModel = (0, typegoose_1.getModelForClass)(Login);
exports.default = LoginModel;
//# sourceMappingURL=login.model.js.map