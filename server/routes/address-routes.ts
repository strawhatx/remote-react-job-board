import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { AddressController } from "../controllers/address-controller";

const router = Router();
const routes = new AddressController();

//router.get("/", CheckAuth, routes.getUsers);
router.get("/", routes.getAddresses);
router.get("/:id", routes.getById);
router.get("/user/:id", routes.getUserAddressById);
router.get("/user/:id", routes.getUserAddressById);
router.put("/", routes.updateAddress);
router.post("/user", routes.createUserAddress);
router.post("/company", routes.createCompanyAddress);
//router.delete("/:id", routes.deleteUser);

export const AddressRoutes = router;

