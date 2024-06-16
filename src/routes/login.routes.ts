import { Router } from "express";
import login from "../controllers/login.controller";
// import { check } from "express-validator";
// import labels from "../labels";
import { validateFieldRequest } from "../middlewares/validateFields";


const router = Router();

router.post('/',
    [
        validateFieldRequest
    ]
    , login);

export default router;