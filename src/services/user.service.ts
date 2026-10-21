import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    public static async getAll(req: Request, res: Response) {
        const users = await UserRepository.getAll(req, res);
        return users;
    }
}