import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const proctectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized -No Token Provided",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: "Unauthorized -Invalid Token",
      });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: " -User Not Found" });
    }
    req.user = user;
    next();
  } catch (e) {
    console.error("error in protectRoute middleware ", e.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
