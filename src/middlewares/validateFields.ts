import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import labels from "../labels";

const validateFieldRequest = (req: Request, res: Response, next: NextFunction) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                msg: labels.EMPTY_FIELD,
                errors
            })
        }

        next();

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }
}

export {
    validateFieldRequest
};