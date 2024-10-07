import { Router } from 'express';
import { getAdministrativos, getAdministrativoById } from '../controllers/administrativoController.js';

const router = Router();

router.get('/', getAdministrativos);
router.get('/:id', getAdministrativoById);

export default router;
