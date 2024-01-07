import { Router } from 'express';
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from './handlers';

export const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/', deletePost);