import { sign } from "jsonwebtoken";
import labels from "../labels/labels";

const getJwt = (uid: string, role:string)=>{
    try {
        
        return new Promise((resolve, reject)=>{
            const payload = { uid, role };
            sign(payload, process.env.SECRET_KEY || '', {
                expiresIn: '1h'
            }, (error, token)=>{
                if(error){
                    console.error(error);
                    reject(labels.ERROR_TOKEN);
                }else{
                    resolve(token);
                }
            });
        });

    } catch (error) {
        console.error(error);
        throw new Error(labels.ERROR);
    }
}

export default getJwt;