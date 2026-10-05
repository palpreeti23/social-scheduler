import express from "express";
import {
  generateAuthUrl,
  syncAccounts,
} from "../controllers/socialAuthController.js";
import { protect } from "../middlewares/authMiddleware.js";

const socialAuthRouter = express.Router();

socialAuthRouter.arguments("/:platform/url", protect, generateAuthUrl);
socialAuthRouter.get("/sync", protect, syncAccounts);

export default socialAuthRouter;
