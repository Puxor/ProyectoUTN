import { Router } from 'express';
import { Activos, ActivoId, deleteActivoById, createActivo, updateActivoById } from '../controllers/activoController.js';

const router = Router();

router.get('/activos', Activos);
router.get('/activo', ActivoId);
router.delete('/activo', deleteActivoById);
router.post('/activo', createActivo);
router.put('/activo', updateActivoById);

export default router;
