import express from 'express';
import test, { deleteUser, dislike, getUser, like, subcribe, unsubcribe, update } from '../controllers/user.js';

const router = express.Router();

// update user
router.put("/:id", update)

// delete user
router.delete("/:id", deleteUser)
// get a user
router.get("/find/:id", getUser)
// subscribe a user
router.put("/sub/:id", subcribe)
// unsubscribe a user
router.put("/unsub/:id", unsubcribe)
// like a video
router.put("/like/:videoId", like)
// dislike a video
router.put("/dislike/:videoId", dislike)
export default router;