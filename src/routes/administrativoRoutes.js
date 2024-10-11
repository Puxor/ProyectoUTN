import { Router } from 'express';
import { Administrativos, AdministrativoId } from '../controllers/administrativoController.js';

const router = Router();

router.get('/lista-admins', Administrativos);
router.get('/administrativo', AdministrativoId);

export default router;
