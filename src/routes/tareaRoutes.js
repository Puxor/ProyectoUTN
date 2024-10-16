import { Router } from 'express';
import { Tareas, TareaId, deleteTareaById, createTarea, updateTareaById } from '../controllers/tareaController.js';

const router = Router();

router.get('/tareas', Tareas);
router.get('/tareas/:id', TareaId);
router.delete('/tareas', deleteTareaById);
router.post('/tareas', createTarea);
router.put('/tareas', updateTareaById);

export default router;
