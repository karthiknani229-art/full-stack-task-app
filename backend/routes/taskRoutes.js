import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskStats
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ PUT THIS FIRST
router.get("/stats", protect, getTaskStats);

// main routes
router.route("/")
  .post(protect, createTask)
  .get(protect, getTasks);

router.route("/:id")
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;