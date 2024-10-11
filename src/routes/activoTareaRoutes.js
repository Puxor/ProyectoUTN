import { Router } from 'express';
import { ActivoTareas, ActivoTareaId } from '../controllers/activoTareaController.js';

const router = Router();

router.get('/activoTareas', ActivoTareas);
router.get('/activoTareas/:id_activo/:id_tarea', ActivoTareaId);

export default router;
