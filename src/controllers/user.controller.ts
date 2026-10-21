import{Request,Response} from "express";
import{userService} from "../services/user.service";

export class userController{
  
    public static async getAll(req:Request, res:Response) {
        try{
            const usersData= await userService.getAll(req,res);
            res.status(200).json(usersData);
        }catch(error){
            console.error('Error felching users:',error);
            res.status(500).json({message:'Error fetching users'});
        }
    } 
}

