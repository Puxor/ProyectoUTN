import express from 'express';
import {
  getOrdenesTrabajo,
  getOrdenTrabajoById,
  createOrdenTrabajo,
  updateOrdenTrabajo,
  deleteOrdenTrabajo,
  getOrdenesTrabajoDetalladas
} from '../controllers/ordenTrabajoController.js';

const router = express.Router();


router.get('/ordenes-trabajo', getOrdenesTrabajo); 
router.get('/orden-trabajo', getOrdenTrabajoById); 
router.post('/orden-trabajo', createOrdenTrabajo); 
router.put('/orden-trabajo', updateOrdenTrabajo); 
router.delete('/orden-trabajo', deleteOrdenTrabajo); 
router.get('/orden-trabajo-detallada', getOrdenesTrabajoDetalladas);



export default router;
