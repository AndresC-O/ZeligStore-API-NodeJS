import express from 'express';

import {
  getAllEstilos,
  createEstilo,
  updateEstilo,
  deleteEstilo,
  deleteEstiloPermantly,
} from './estilo.controller';

const router = express.Router();

router.get('/', getAllEstilos);

router.post('/create', createEstilo);

router.put('/:idMarcas', updateEstilo);

router.delete('/:idMarcas', deleteEstilo);

router.delete('/delete/:idMarcas', deleteEstiloPermantly);

export default router;
