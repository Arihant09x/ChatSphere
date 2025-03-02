import express from "express";
import { proctectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";
const router = express.Router();
router.get("/users", proctectRoute, getUsersForSidebar);
router.get("/:id", proctectRoute, getMessages);
router.post("/send/:id", proctectRoute, sendMessage);
export default router;
