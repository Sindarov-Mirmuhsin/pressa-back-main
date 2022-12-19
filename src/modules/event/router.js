import { Router } from "express";
import controller from "./controller.js";
import upload from "../../lib/multer.js";
import checkToken from "../../middlewares/checkToken.js";

const router = Router();

router.get("/events", controller.GET);
router.get("/events/:id", controller.GETBYID);
router.post("/events", upload.single('image'), controller.POST);
router.put("/events/:eventId",checkToken, controller.PUT);
router.put("/events/:eventId",checkToken, controller.PUTACTIVE);
router.delete("/events/:eventId",checkToken, controller.DELETE);


export default router;