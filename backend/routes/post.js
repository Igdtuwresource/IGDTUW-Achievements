import express from "express";
import { createPost, likeUnlikePost, deleteComment, deletePost, updatePostDesc, commentOnPost } from "../controllers/post.js";
import { isAuthenticated } from "../utils/Auth.js";

const router = express.Router();

router.post("/post/upload", isAuthenticated, createPost);

router.get("/post/:id", isAuthenticated, likeUnlikePost);

router.put("/post/:id", isAuthenticated, updatePostDesc);

router.delete("/users", isAuthenticated, deletePost);

router.put("/post/comment/:id", isAuthenticated, commentOnPost);

router.delete("/post/comment/:id", isAuthenticated, deleteComment);


export default router