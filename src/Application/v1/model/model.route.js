import express from 'express';

import { getAllModels, createModel } from './model.controller';

const router = express.Router();

router.get('/', getAllModels);

router.post('/create', createModel);

export default router;
