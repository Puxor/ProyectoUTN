import { Router } from 'express';
import { ActivoTareas, ActivoTareaId, deleteActivoTareaById, createActivoTarea, updateActivoTareaById } from '../controllers/activoTareaController.js';

const router = Router();


router.get('/activoTareas/:id_activo', ActivoTareas);
router.get('/activoTareas/:id_activo/:id_tarea', ActivoTareaId);
router.delete('/activoTarea/:id_activo/:id_tarea', deleteActivoTareaById);
router.post('/activoTarea', createActivoTarea);
router.put('/activoTarea/:id_activo/:id_tarea', updateActivoTareaById);

export default router;

