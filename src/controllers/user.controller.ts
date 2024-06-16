import { Request, Response } from "express";
import Login from "../models/login.model";
import bcrypt from "bcryptjs";
import labels from "../labels";

export const getUsers = async (req: Request, res: Response) => {

    try {

        const userList = await Login.find();

        if (userList.length === 0) {

            res.status(204).json({
                msg: labels.MSG_204,
                userList,
                response: labels.NOT_FOUND,
            });
        }else{

            res.status(200).json({
                msg: labels.SUCCESFUL_RESPONSE,
                userList,
              });
            
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }

}

export const createUser = async (req: Request, res: Response) => {

    try {

        const { username, password, role } = req.body;
        const user = new Login({ username, password, role });

        const salt = bcrypt.genSaltSync();
        user._password = bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).json({
            msg: labels.MSG_201,
            response: labels.SUCCESFUL_REGISTER,
            username: user._username
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }
}

export const updateUser = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;
        const { _id, ...rest } = req.body;

        const user = await Login.findByIdAndUpdate(id, rest);

        res.status(205).json({
            msg: labels.SUCCESFUL_UPDATE,
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;

        await Login.findByIdAndDelete(id);

        res.status(200).json({
            msg: labels.SUCCESFUL_DELETE,
            id
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: labels.MSG_500,
            response: labels.ERROR
        });
    }

}