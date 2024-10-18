import { Router } from 'express';
import {TareaId, deleteTareaById, createTarea, updateTareaById, Tareas } from '../controllers/tareaController.js';

const router = Router();

router.get('/tareas', Tareas);
router.get('/tareas/:id', TareaId);
router.delete('/tareas', deleteTareaById);
router.post('/tareas', createTarea);
router.put('/tareas', updateTareaById);

export default router;
