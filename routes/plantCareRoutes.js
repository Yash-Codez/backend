import express from "express";
import {
  createPlantCare,
  getPlantCareTips,
  getPlantCareTip,
  updatePlantCare,
  deletePlantCare,
} from "../controllers/plantCareController.js";

import {protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPlantCareTips);
router.get("/:id", getPlantCareTip);
router.post("/",  protect,adminOnly, createPlantCare);
router.put("/:id", protect,adminOnly, updatePlantCare);
router.delete("/:id",protect, adminOnly, deletePlantCare);

export default router;
