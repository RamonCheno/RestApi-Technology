
export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RestApí Store Technology",
      version: "1.0.0",
      description: "Rest Api de productos tecnologicos",
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