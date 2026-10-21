import {Request, Response} from "express";
import{User} from "../models/user";


export class UserRepository {

  public static async getAll(req: Request, res: Response) {
    try {
      const getAllUsers = await User.findAll();
      res.status(200).json(getAllUsers);
    } catch (error) {
      console.error('Error al consultar usuarios', error);
      res.status(500).json({ message: 'Error al consultar usuarios', error });
    }
  }
}