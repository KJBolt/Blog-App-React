import express from 'express';
import {create,deletePost,getPost,getPosts,search,update} from "../controllers/postController.js";
import {verifyToken} from "../verifyToken.js";


const router = express.Router();

// Get all posts
router.get('/posts',verifyToken, getPosts);

// Add Post
router.post('/create',verifyToken, create);

// Delete Post
router.delete('/:id',verifyToken, deletePost);

// Update Post
router.put('/:id',verifyToken, update);

// Get a specific post
router.get('/find/:id', getPost);

// Search Post
router.get('/search', search);


export default router;