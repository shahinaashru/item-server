import express from "express";
import { addItem, getAllItems } from "../controllers/itemController.js";

const router = express.Router();
router.post("/", addItem);
router.get("/", getAllItems);

export default router;
