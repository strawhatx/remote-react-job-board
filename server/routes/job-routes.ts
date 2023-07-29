import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { JobController } from "../controllers/job-controller";

const router = Router();
const routes = new JobController();

//router.get("/", CheckAuth, routes.getUsers);
router.get("/", routes.getJobs);
router.get("/:id", routes.getJobById);
router.post("/company/:id", routes.getJobsByCompanyId);
router.put("/", routes.updateJob);
router.post("/", routes.createJob);
router.delete("/:id", routes.deleteJob);

export const JobRoutes = router;

