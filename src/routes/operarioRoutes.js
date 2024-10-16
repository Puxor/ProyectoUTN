import { Router } from 'express';
import { Operarios, OperarioId, deleteOperarioById, createOperario, updateOperarioById } from '../controllers/operarioController.js';

const router = Router();

router.get('/lista-operarios', Operarios);
router.get('/operario', OperarioId);
router.delete('/operario', deleteOperarioById);
router.post('/operario', createOperario);
router.put('/operario', updateOperarioById);

export default router;
