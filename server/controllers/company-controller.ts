import mongoose from "mongoose";
import Address from "../models/address";
import User from "../models/user";
import Company from "../models/company";
import { Request, Response, NextFunction } from "express";

/**
* Company Controller
*/

export class CompanyController {
    constructor() { }

    /**
     * Gets companies
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getCompanies(req: Request, res: Response, next: NextFunction) {
        try {
            const companies = await Company.find({});

            res.status(200).json({ companies: companies })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified company by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getCompanyById(req: Request, res: Response, next: NextFunction) {
        try {
            const company = await Company.findById(req.params.id);

            res.status(200).json({ company: company })
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
    async getCompanyLogoById(req: Request, res: Response, next: NextFunction) {
        try {
            const company = await Company.findById(req.params.id);

            res.status(200).json({ image: company?.logo })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Public route create company
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createCompany(req: Request, res: Response, next: NextFunction) {
        // Using Mongoose's default connection
        const session = await mongoose.startSession();
        
        try {
            session.startTransaction();  

            // create just the company table
            const company = await Company.create({}, {session});

            const user = await User.findByIdAndUpdate(req.body.uid,{
                companyId: company[0]._id
            }, {session})


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
    * Update Company
    * @param req Request
    * @param res Response
    * @param next Next Function
    */
    async updateCompany(req: Request, res: Response, next: NextFunction) {
        try {
            let company = { _id: req.body.uid };

            //only assign feilds that have values
            if (req.body.name) company = Object.assign(company, { email: req.body.email });

            if (req.body.phone) company = Object.assign(company, { phone: req.body.displayName });

            if (req.body.logo) company = Object.assign(company, { logo: req.body.logo });

            if (req.body.website) company = Object.assign(company, { website: req.body.website });

            if (req.body.bio) company = Object.assign(company, { bio: req.body.bio });

            const updated = await Company.findByIdAndUpdate(company._id, company);

            if (!updated) throw new Error("Update failed");

            res.status(204).json({
                message: "Update successful",
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }


    /**
     * Remove  Company
     * @param id 
     * @returns  response message
     */
    async deleteCompany(req: Request, res: Response, next: NextFunction) {
        try {

            await User.findByIdAndDelete({ _id: req.params.id },);

            res.status(200).json({
                message: "Delete successful",
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }
}