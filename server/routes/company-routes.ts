import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { CompanyController } from "../controllers/company-controller";

const router = Router();
const routes = new CompanyController();

//router.get("/", CheckAuth, routes.getUsers);
router.get("/", routes.getCompanies);
router.get("/:id", routes.getCompanyById);
router.get("/image/:id", routes.getCompanyLogoById);
router.put("/", routes.updateCompany);
router.post("/", routes.createCompany);
router.delete("/:id", routes.deleteCompany);

export const CompanyRoutes = router;

