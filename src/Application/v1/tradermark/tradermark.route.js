import express from 'express';

import { getAllTradermarks, createTraderMark, updateTraderMark, deleteTraderMark, deleteTraderMarkPermantly } from './tradermark.controller';
import {updateCategorie} from '../category/category.controller';

const router = express.Router();

router.get('/', getAllTradermarks);

router.post('/create', createTraderMark);

router.put('/:idTraderMark', updateTraderMark);

router.put('/:idTraderMark', deleteTraderMark);

router.delete('/delete/:idTraderMark', deleteTraderMarkPermantly);

export default router;
