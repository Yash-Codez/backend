import express from "express";
import {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

import {protect,adminOnly} from "../middleware/authMiddleware.js"

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/",protect, adminOnly, createBlog);
router.put("/:id",protect, adminOnly, updateBlog);
router.delete("/:id",protect, adminOnly, deleteBlog);

export default router;
