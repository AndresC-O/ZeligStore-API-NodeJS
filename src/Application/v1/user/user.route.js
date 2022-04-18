import express from 'express';

import { getAllUsers, createUser } from './user.controller';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/create', createUser);

export default router;
