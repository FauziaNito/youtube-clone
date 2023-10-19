import express from 'express';
import {} from '../controllers/video.js';
import verifyToken from "../verifyToken.js"

const router = express.Router();

// create video
router.post("/", verifyToken, addVideo )
router.put("/:id", verifyToken, updateVideo )
router.delete("/:id", verifyToken, deleteVideo )
router.get("/find/:id", addVideo, getVideo )

export default router;