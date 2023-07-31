import mongoose from "mongoose";
import Address from "../models/address";
import Job from "../models/job";
import { Request, Response, NextFunction } from "express";
import server from "..";



/**
* Job Controller
*/

export class JobController {
    constructor() { }

    /**
     * Gets Jobs
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getJobs(req: Request, res: Response, next: NextFunction) {
        try {
            const jobs = await Job.find({});

            res.status(200).json({ jobs: jobs })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

     /**
     * Gets companies jobs
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
     async getJobsByCompanyId(req: Request, res: Response, next: NextFunction) {
        try {
            const jobs = await Job.find({companyId: req.body.id});

            res.status(200).json({ jobs: jobs })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Gets specified Job by id
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async getJobById(req: Request, res: Response, next: NextFunction) {
        try {
            const job = await Job.findById(req.params.id);

            res.status(200).json({ job: job })
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * Public route create Job profile
     * @param req Request
     * @param res Response
     * @param next Next Function
     */
    async createJob(req: Request, res: Response, next: NextFunction) {
        try {
            const job = await Job.create({
                companyId: req.body.companyId,
                position: req.body.position,
                salary:req.body.salary,
                jobType: req.body.jobType,
                skillLevel: req.body.skillLevel,
                numberApplied: req.body.numberApplied,
                description: req.body.description,
            });

            if (!job) throw new Error("Create failed");

            res.status(201).json({
                message: "Create successful",
            });
        }
        catch (error: any) {
            throw new Error(error);
        }
    }

    /**
    * Update Job
    * @param req Request
    * @param res Response
    * @param next Next Function
    */
    async updateJob(req: Request, res: Response, next: NextFunction) {
        try {
            let job = { _id: req.body.uid };

            //only assign feilds that have values
            if (req.body.position) job = Object.assign(job, { position: req.body.position });
            
            if (req.body.salary) job = Object.assign(job, { salary: req.body.salary });
            
            if (req.body.jobType) job = Object.assign(job, { lastName: req.body.jobType });
            
            if (req.body.skillLevel) job = Object.assign(job, { phone: req.body.skillLevel });

            if (req.body.numberApplied) job = Object.assign(job, { bio: req.body.numberApplied });
            
            if (req.body.description) job = Object.assign(job, { position: req.body.description});

            const updated = await Job.findByIdAndUpdate(job._id, job);

            if (!updated) throw new Error("Update failed");

            res.status(204).json({
                message: "Update successful",
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }


    /**
     * Remove Job
     * @param id 
     * @returns  response message
     */
    async deleteJob(req: Request, res: Response, next: NextFunction) {
        try {
            let deleted = await Job.findByIdAndDelete({ _id: req.params.id });
        
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