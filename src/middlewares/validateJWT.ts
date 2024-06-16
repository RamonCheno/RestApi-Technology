import { NextFunction, Request, Response } from "express";
import labels from "../labels";
import jwt from "jsonwebtoken";
import Login from "../models/login.model";
import role_labels from "../role_labels";

const validateJwt = (roleToValidate?: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    try {

      const token = req.header(labels.AUTHORIZATION);

      if (!token) {
        return res.status(401).json({
          msg: labels.MSG_401,
          response: labels.TOKEN_FAILLED
        });
      }

      const { uid, role } = <any>jwt.verify(token, process.env.SECRET_KEY || '');
      const user = await Login.findById(uid);

      if (!user) {
        return res.status(401).json({
          msg: labels.MSG_401,
          response: labels.NOT_AUTHORIZATION
        });
      }

      if (!user._status) {
        return res.status(401).json({
          msg: labels.MSG_401,
          response: labels.NOT_AUTHORIZATION
        });
      }

      if (user._role !== roleToValidate && user._role !== role_labels.ADMIN 
        && roleToValidate) {
        return res.status(401).json({
          msg: labels.MSG_401,
          response: labels.ROLE_NOT_PERMISSIONS,
          role: user._role
        });
      }

      next();

    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: labels.MSG_500,
        response: labels.ERROR
      });
    }
  }
}

export default validateJwt;
