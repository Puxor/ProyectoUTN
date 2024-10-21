import { Router } from 'express';
import { UbicacionesActivos, UbicacionActivoId, deleteUbicacionActivoById, createUbicacionActivo, updateUbicacionActivoById } from '../controllers/ubicacionActivoController.js';

const router = Router();

router.get('/lista-ubi-activos', UbicacionesActivos);
router.get('/ubi-activo', UbicacionActivoId);
router.delete('/ubi-activo', deleteUbicacionActivoById);
router.post('/ubi-activo', createUbicacionActivo);
router.put('/ubi-activo', updateUbicacionActivoById);

export default router;
