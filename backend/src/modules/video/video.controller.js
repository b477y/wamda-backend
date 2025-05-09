import { Router } from "express";
import authentication from "../../middlewares/authentication.middleware.js";
import * as videoService from "./services/video.service.js";
import checkCredits from "../../middlewares/checkCredits.middleware.js";

const router = Router();

// Instant Ai Video
router.post(
  "/generate",
  authentication(),
  checkCredits,
  videoService.generateVideo
);

// AI Spoke person
router.post(
  "/generate-avatar",
  authentication(),
  checkCredits,
  videoService.generateAiAvatarVideo
);

// Ad video
router.post(
  "/generate-ad",
  authentication(),
  checkCredits,
  videoService.generateAdVideo
);

export default router;