import { Router } from 'express';
import { getOperarios, getOperarioById } from '../controllers/operarioController.js';

const router = Router();

router.get('/', getOperarios);
router.get('/:id', getOperarioById);

export default router;
