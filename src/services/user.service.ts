import{Request,Response} from "express";
import{userRepository}from "../repositories/user.repository";
export class userService{

    public static async getAll(req:Request,res:Response){
        const users= await userRepository.getAll(req,res);
        return users
    }

}