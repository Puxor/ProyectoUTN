import { Router } from 'express';
import { Activos, ActivoId } from '../controllers/activoController.js';

const router = Router();

router.get('/activos', Activos);
router.get('/activos/:id', ActivoId);

export default router;
