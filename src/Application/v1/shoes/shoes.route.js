import express from 'express';

import { getAllShoes, createShoes } from './shoes.controller';

const router = express.Router();

router.get('/', getAllShoes);

router.post('/create', createShoes);

export default router;
