import { Router } from 'express';
import { Tareas, TareaId } from '../controllers/tareaController.js';

const router = Router();

router.get('/tareas', Tareas);
router.get('/tareas/:id', TareaId);

export default router;
