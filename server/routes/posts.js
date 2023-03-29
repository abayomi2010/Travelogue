import express from 'express';
import { getPosts, createPost } from "../controllers/posts.js"


const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get('/health', (req, res) => {
    res.status(200).send('Ok');
  });



export default router;