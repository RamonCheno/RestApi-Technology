import { Request, Response } from "express";
import LoginModel from "../models/login.model";
import labels from "../labels/labels";
import bcrypt from "bcryptjs";
import getJwt from "../helpers/jwt";

const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const user = await LoginModel.findOne({ username });

        if (!user) {
            return res.status(400).json({
                msg: labels.MSG_400,
                response: labels.FALIED_LOGIN
            });
        }

        if (!user._status) {
            return res.status(400).json({
                msg: labels.MSG_400,
                response: labels.STATUS_USER
            });
        }

        const validPassword = bcrypt.compareSync(password, user._password);

        if (!validPassword) {
            return res.status(400).json({
                msg: labels.MSG_400,
                response: labels.FALIED_LOGIN
            });
        }

        const token = await getJwt(String(user._id), user._role);

        res.status(200).json({
            msg: labels.SUCCESFUL_LOGIN,
            username: user._username,
            token,
            expireIn: 3600
        });

        

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }
}

export default login;