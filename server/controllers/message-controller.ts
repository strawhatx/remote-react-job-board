import Message from "../models/message";
import { Request, Response, NextFunction } from "express";

/**
* Message Controller
*/

export class MessageController {
    constructor() { }

    /**
     * Gets Messages
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getMessages(req: Request, res: Response, next: NextFunction) {
        try {
            const messages = await Message.find({});

            res.status(200).json({ messages: messages })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

     /**
     * Gets companies Messages
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
     async getMessagesByUserId(req: Request, res: Response, next: NextFunction) {
        try {
            const messages = await Message.find({userId: req.body.id});

            res.status(200).json({ messages: messages })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified Message by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getMessageById(req: Request, res: Response, next: NextFunction) {
        try {
            const message = await Message.findById(req.params.id);

            res.status(200).json({ message: message })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Public route create Message profile
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createMessage(req: Request, res: Response, next: NextFunction) {
        try {
            const message = await Message.create({
                userId: req.body.userId,
                from: req.body.from,
                text:req.body.text,
            });

            if (!message) throw new Error("Create failed");

            res.status(201).json({
                message: "Create successful",
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }


    /**
     * Remove Message
     * @param id 
     * @returns  response message
     */
    async deleteMessage(req: Request, res: Response, next: NextFunction) {
        try {
            let deleted = await Message.findByIdAndDelete({ _id: req.params.id });
        
            if (!deleted) throw new Error("Delete failed");

            res.status(200).json({
                message: "Delete successful",
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}