import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { MessageController } from "../controllers/message-controller";

const router = Router();
const routes = new MessageController();

//router.get("/", CheckAuth, routes.getUsers);
router.get("/", routes.getMessages);
router.get("/:id", routes.getMessageById);
router.get("/user/:id", routes.getMessagesByUserId);
router.put("/", routes.updateMessage);
router.post("/", routes.createMessage);
router.delete("/:id", routes.deleteMessage);

export const MessageRoutes = router;

