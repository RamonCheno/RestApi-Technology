import labels from "../labels";
import Login from "../models/login.model";
import Product from "../models/product.model"


export const productExists = async (id: string) => {

    try {

        const idDB = await Product.findById(id);

        if (!idDB)
            throw new Error(`${labels.ID_PRODUCT}${id} ${labels.NOT_EXISTS}`);

    } catch (error) {
        console.error(error);
        throw new Error(labels.MSG_500);
    }
}

export const userExists = async (id: string) => {

    try {

        const idDB = await Login.findById(id);
        if (!idDB)
            throw new Error(`${labels.ID_USER}${id} ${labels.NOT_EXISTS}`)

    } catch (error) {
        console.error(error);
        throw new Error(labels.MSG_500);
    }

}