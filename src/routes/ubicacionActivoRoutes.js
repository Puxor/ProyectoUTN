import { Router } from 'express';
import { getUbicacionesActivos, getUbicacionActivoById } from '../controllers/ubicacionActivoController.js';

const router = Router();

router.get('/', getUbicacionesActivos);
router.get('/:id', getUbicacionActivoById);

export default router;
