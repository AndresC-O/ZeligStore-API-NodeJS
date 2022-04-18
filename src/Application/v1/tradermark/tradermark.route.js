import express from 'express';

import { getAllTradermarks, createTraderMark } from './tradermark.controller';

const router = express.Router();

router.get('/', getAllTradermarks);

router.post('/create', createTraderMark);

export default router;
