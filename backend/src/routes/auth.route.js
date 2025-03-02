import exprees from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { proctectRoute } from "../middleware/auth.middleware.js";
const router = exprees.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", proctectRoute, updateProfile);
router.get("/check", proctectRoute, checkAuth); //to Check user is login or not when they hit refresh
export default router;
