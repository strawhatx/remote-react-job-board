import Address, { IAddress } from "../models/address";
import User, { IUser } from "../models/user";
import Company, { ICompany } from "../models/company";
import { Request, Response, NextFunction } from "express";
import { Connection } from "../config/connect";
import mongoose from "mongoose";



/**
* Address Controller
*/

export class AddressController {
    constructor() { }

    /**
     * Gets addresses
     * @param req Request
     * @param res Response
     * @param next Next Function
     */

    async getAddresses(req: Request, res: Response, next: NextFunction) {
        try {
            const addresses = await Address.find({});

            res.status(200).json({ addresses: addresses })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified address by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getAddressById(req: Request, res: Response, next: NextFunction) {
        try {
            const address = await Address.findById(req.params.id);

            res.status(200).json({ address: address })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Create Address for either the user ofr company by passing the ref property all caps USER or COMPANY
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createAddress(req: Request, res: Response, next: NextFunction) {
        
        // Using Mongoose's default connection
        const session = await mongoose.startSession();
        try {
            session.startTransaction(); 

            const address = await Address.create([{
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                phone: req.body.phone,
                zip: req.body.zip,
            }],{session});

            (req.body.ref == "USER") ? await User.findByIdAndUpdate(req.body.uid, {addressId: address[0]._id}, 
                {session})
                : await Company.findByIdAndUpdate(req.body.id, {addressId: address[0]._id},{session});

                await session.commitTransaction();

            res.status(201).json({
                message: "Create successful",
            });
        }
        catch (error: any) {
            await session.abortTransaction();
            throw new Error(error);
        }

        session.endSession();
    }

    /**
    * Update Address
    * @param req Request
    * @param res Response
    * @param next Next Function
    */
    async updateAddress(req: Request, res: Response, next: NextFunction) {
        try {
            let address = { _id: req.body.uid };

            //only assign feilds that have values
            if (req.body.street) address = Object.assign(address, { street: req.body.street });

            if (req.body.city) address = Object.assign(address, { city: req.body.city });

            if (req.body.state) address = Object.assign(address, { state: req.body.state });

            if (req.body.country) address = Object.assign(address, { country: req.body.country });

            if (req.body.phone) address = Object.assign(address, { phone: req.body.phone });

            if (req.body.zip) address = Object.assign(address, { zip: req.body.zip });

            const updated = await Address.findByIdAndUpdate(address._id, address);

            if (!updated) throw new Error("Update failed");

            res.status(204).json({
                message: "Update successful",
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }
}