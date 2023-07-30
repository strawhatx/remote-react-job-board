import mongoose from "mongoose";
import Address from "../models/address";
import User, { IUser } from "../models/user";
import { Request, Response, NextFunction } from "express";



/**
* User Controller
*/

export class AccountController {
    constructor() { }

    /**
     * Gets users
     * @param req Request
     * @param res Response
     * @param next Next Function
     */

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.find({});

            res.status(200).json({ users: users })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified user by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findById(req.params.id);

            res.status(200).json({ user: user })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets Image for specified user by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getUsersImageById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findById(req.params.id);

            res.status(200).json({ image: user?.profileImage })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Public route create user profile
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.create({
                _id: req.body.uid,
                email: req.body.email,
                isSubscribed: req.body.isSubscribed,
                role: req.body.role,
            });

            if (!user) throw new Error("Create failed");

            res.status(201).json({
                message: "Create successful",
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
    * Update User
    * @param req Request
    * @param res Response
    * @param next Next Function
    */
    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            let user = { _id: req.body.uid };



            //only assign feilds that have values
            if (req.body.email) user = Object.assign(user, { email: req.body.email });
            
            if (req.body.firstName) user = Object.assign(user, { firstName: req.body.firstName });
            
            if (req.body.lastName) user = Object.assign(user, { lastName: req.body.lastName });
            
            if (req.body.phone) user = Object.assign(user, { phone: req.body.phone });

            if (req.body.bio) user = Object.assign(user, { bio: req.body.bio });
            
            if (req.body.position) user = Object.assign(user, { position: req.body.position });

            if (req.body.image) user = Object.assign(user, { profileImage: req.body.image });

            const updated = await User.findByIdAndUpdate(user._id, user);

            if (!updated) throw new Error("Update failed");

            res.status(204).json({
                message: "Update successful",
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }


    /**
     * Remove User
     * @param id 
     * @returns  response message
     */
    async deleteUser(req: Request, res: Response, next: NextFunction) {
        // Using Mongoose's default connection
        const session = await mongoose.startSession();
        try {
            session.startTransaction();

            const user = await User.findOne({ _id: req.params.id });

            await User.deleteOne({ _id: req.params.id }, { session });
            await Address.deleteOne({ _id: user?.addressId }, { session });

            await session.commitTransaction();

            res.status(200).json({
                message: "Delete successful",
            });
        }
        catch (error: any) {
            await session.abortTransaction();
            throw new Error(error);
        }

        session.endSession();
    }
}