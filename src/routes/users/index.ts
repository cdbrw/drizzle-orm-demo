import { Router } from 'express';
import { createUser, getUserPosts } from './handlers';

export const router = Router();

router.get('/:id/posts', getUserPosts);
router.post('/', createUser);