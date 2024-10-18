import { Router } from 'express';
import { ActivoTareas, ActivoTareaId, deleteActivoTareaById, createActivoTarea, updateActivoTareaById } from '../controllers/activoTareaController.js';

const router = Router();

router.get('/activoTareas', ActivoTareas);
router.get('/activoTareas/activo/tarea', ActivoTareaId);
router.delete('/activoTarea', deleteActivoTareaById);
router.post('/activoTarea', createActivoTarea);
router.put('/activoTarea', updateActivoTareaById);

export default router;
