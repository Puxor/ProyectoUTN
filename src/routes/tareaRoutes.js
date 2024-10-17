import { Router } from 'express';
import {TareaId, deleteTareaById, createTarea, updateTareaById } from '../controllers/tareaController.js';

const router = Router();

router.get('/tareas/:id', TareaId);
router.delete('/tareas', deleteTareaById);
router.post('/tareas', createTarea);
router.put('/tareas', updateTareaById);

export default router;
