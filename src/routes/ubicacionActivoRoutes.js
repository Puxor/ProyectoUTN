import { Router } from 'express';
import { UbicacionesActivos, UbicacionActivoId } from '../controllers/ubicacionActivoController.js';

const router = Router();

router.get('/lista-ubiactivos', UbicacionesActivos);
router.get('/ubiactivo', UbicacionActivoId);

export default router;
