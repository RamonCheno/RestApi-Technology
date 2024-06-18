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
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_v1_1 = require("../docs/swagger_v1");
const labels_1 = __importDefault(require("../labels/labels"));
const path_labels_1 = __importDefault(require("../labels/path_labels"));
const config_1 = __importDefault(require("../database/config"));
const login_routes_1 = __importDefault(require("../routes/login.routes"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const product_routes_1 = __importDefault(require("../routes/product.routes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.login_path = path_labels_1.default.LOGIN;
        this.user_path = path_labels_1.default.USER;
        this.product_path = path_labels_1.default.PRODUCT;
        this.doc_path = path_labels_1.default.DOCS;
        this.specs = (0, swagger_jsdoc_1.default)(swagger_v1_1.options);
        this.connectDB();
        this.middleware();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => console.log(`${labels_1.default.LISTEN_SERVER} ${this.port}`));
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.default)();
        });
    }
    routes() {
        this.app.use(this.login_path, login_routes_1.default);
        this.app.use(this.user_path, user_routes_1.default);
        this.app.use(this.product_path, product_routes_1.default);
        this.app.use(this.doc_path, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(this.specs));
    }
    middleware() {
        // const allowedOrigins = process.env.ALLOWED_CORD || ' ';
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
//# sourceMappingURL=server.model.js.map