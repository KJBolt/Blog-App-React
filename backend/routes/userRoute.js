import express from "express";
import { bookmark, deleteUser, getUser, like, signup, signin, update, getUsers } from "../controllers/userController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/signup', signup);
router.post('/signin', signin);
router.put('/update/:id', verifyToken, update);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/find/:id', getUser);
router.put('/like/:postId', verifyToken, like);
router.put('/bookmark/:postId', verifyToken, bookmark);

export default router;