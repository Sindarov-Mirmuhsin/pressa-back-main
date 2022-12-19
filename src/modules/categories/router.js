import { Router } from "express";
import controller from "./controller.js";
import checkToken from "../../middlewares/checkToken.js";

const router = Router();

router.get("/categories", controller.GET);
router.get("/categories/:categoryId", controller.GET);
router.post("/categories", controller.POST);
router.put("/categories/:categoryId",checkToken, controller.PUT);
router.delete("/categories/:categoryId",checkToken, controller.DELETE);





export default router;
