import express from "express";
import {getPosts,getUserPosts, createPost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/" , verifyToken, createPost);
router.get ("/",verifyToken,getPosts);
router.get("/:userId",verifyToken,getUserPosts);


export default router;