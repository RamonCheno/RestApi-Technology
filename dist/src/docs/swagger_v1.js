"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "RestApí Store Technology",
            version: "1.0.0",
            description: "El proyecto detalla una API para llevar un control de productos y usuarios mediante registros en la base de datos",
        },
        servers: [
            {
                url: "https://restapi-technology.onrender.com/api",
                description: "Remote Server"
            },
            {
                url: "https://localhost:3000/api",
                description: "Local Server"
            }
        ]
    },
    apis: ["./src/routes/*.routes.ts", "./src/docs/docs_v1.yaml"]
};
//# sourceMappingURL=swagger_v1.js.map