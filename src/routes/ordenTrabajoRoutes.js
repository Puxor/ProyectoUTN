import express from 'express';
import {
  getOrdenesTrabajo,
  getOrdenTrabajoById,
  createOrdenTrabajo,
  updateOrdenTrabajo,
  deleteOrdenTrabajo,
} from '../controllers/ordenTrabajoController.js';

const router = express.Router();


router.get('/ordenes-trabajo', getOrdenesTrabajo); 
router.get('/ordentabajo', getOrdenTrabajoById); 
router.post('/ordentrabajo', createOrdenTrabajo); 
router.put('/ordentrabajo', updateOrdenTrabajo); 
router.delete('/ordentrabajo', deleteOrdenTrabajo); 

export default router;
