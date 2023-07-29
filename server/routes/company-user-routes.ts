import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { CompanyUserController } from "../controllers/company-user-controller";

const router = Router();
const routes = new CompanyUserController();

//router.get("/", CheckAuth, routes.getUsers);
router.get("/:id", routes.getUsersByCompanyId);
router.post("/", routes.addUserToCompany);
router.delete("/:id", routes.removeUserFromCompany);

export const CompanyUserRoutes = router;

