import { Request, Response } from "express";
import Product from "../models/product.model";
import labels from "../labels/labels";

export const createProduct = async (req: Request, res: Response) => {

  try {
    const { name, description, price, quantity, status } = req.body;

    const product = new Product({ name, description, price, quantity, status });

    await product.save();

    res.status(201).json({
      msg: labels.MSG_201,
      response: labels.SUCCESFUL_REGISTER,
      name: product._name
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: labels.MSG_500,
      response: labels.ERROR
    });
  }

}

export const getProduct = async (req: Request, res: Response) => {

  try {

    const productList = await Product.find();

    if (productList.length === 0) {
      res.status(204).json({
        msg: labels.MSG_204,
        productList,
        response: labels.NOT_FOUND,
      });
    } else {
      res.status(200).json({
        msg: labels.SUCCESFUL_RESPONSE,
        productList,
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

export const getProductsByPrice = async (req: Request, res: Response) => {

  try {

    const { min, max } = req.query;

    const productList = await Product.find({ price: { $gte: min, $lte: max } });

    if (productList.length === 0) {
      res.status(204).json({
        msg: labels.MSG_204,
        productList,
        response: labels.NOT_FOUND,
      });
    } else {
      res.status(200).json({
        msg: labels.SUCCESFUL_RESPONSE,
        productList,
      })
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: labels.MSG_500,
      response: labels.ERROR
    });
  }

}

export const updateProduct = async (req: Request, res: Response) => {

  try {

    const id = req.params.id;
    const { _id, ...rest } = req.body;

    const product = await Product.findByIdAndUpdate(id, rest);

    return res.status(200).json({
      msg: labels.SUCCESFUL_UPDATE,
      product
    })

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: labels.MSG_500,
      response: labels.ERROR
    });
  }

}

export const deleteProduct = async (req: Request, res: Response) => {

  try {

    const id = req.params.id;

    await Product.findByIdAndDelete(id);

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