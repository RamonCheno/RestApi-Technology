
export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RestApí Store Technology",
      version: "1.0.0",
      description: "El proyecto detalla una API para llevar un control de productos y usuarios mediante registros en la base de datos",
    },
    servers: [
      {
        url:"http://localhost:3000/api/",
        description: "Local Server"
      }
    ]
  },
  apis: ["./src/routes/*.routes.ts","./src/docs/docs_v1.yaml"]
}