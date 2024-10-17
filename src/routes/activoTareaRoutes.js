import { Router } from 'express';
import { ActivoTareaId, deleteActivoTareaById, createActivoTarea, updateActivoTareaById } from '../controllers/activoTareaController.js';

const router = Router();

router.get('/activoTareas/activo/tarea', ActivoTareaId);
router.delete('/activoTarea', deleteActivoTareaById);
router.post('/activoTarea', createActivoTarea);
router.put('/activoTarea', updateActivoTareaById);

export default router;
