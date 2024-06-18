import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "../docs/swagger_v1"
import labels from "../labels/labels";
import path_labels from "../labels/path_labels";
import db_connection from "../database/config";
import loginRoutes from "../routes/login.routes";
import userRoutes from "../routes/user.routes";
import productRoutes from "../routes/product.routes";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;

  //Paths
  private doc_path: string;
  private login_path: string;
  private user_path: string;
  private product_path: string;
  private specs: Object;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.login_path = path_labels.LOGIN;
    this.user_path = path_labels.USER;
    this.product_path = path_labels.PRODUCT;
    this.doc_path = path_labels.DOCS;

    this.specs = swaggerJSDoc(options);

    this.connectDB();
    this.middleware();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`${labels.LISTEN_SERVER} ${this.port}`)
    );
  }

  async connectDB() {
    await db_connection();
  }

  routes() {
    this.app.use(this.login_path, loginRoutes);
    this.app.use(this.user_path, userRoutes);
    this.app.use(this.product_path, productRoutes);
    this.app.use(this.doc_path, swaggerUi.serve, swaggerUi.setup(this.specs));
  }

  middleware() {
    // const allowedOrigins = process.env.ALLOWED_CORD || ' ';
    this.app.use(cors());
    this.app.use(express.json());
  }

}

export default Server;
