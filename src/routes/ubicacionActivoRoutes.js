import { Router } from 'express';
import { UbicacionesActivos, UbicacionActivoId, deleteUbicacionActivoById, createUbicacionActivo, updateUbicacionActivoById } from '../controllers/ubicacionActivoController.js';

const router = Router();

router.get('/lista-ubiactivos', UbicacionesActivos);
router.get('/ubiactivo', UbicacionActivoId);
router.delete('/ubiactivo', deleteUbicacionActivoById);
router.post('/ubiactivo', createUbicacionActivo);
router.put('/ubiactivo', updateUbicacionActivoById);

export default router;
