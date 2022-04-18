import express from 'express';

import { getAllDesigns, createDesign } from './design.controller';

const router = express.Router();

router.get('/', getAllDesigns);

router.post('/create', createDesign);

export default router;
