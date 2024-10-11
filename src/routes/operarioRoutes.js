import { Router } from 'express';
import { Operarios, OperarioId } from '../controllers/operarioController.js';

const router = Router();

router.get('/listaoperarios', Operarios);
router.get('/operario', OperarioId);

export default router;
