import { Router } from 'express';
import { Administrativos, AdministrativoId, deleteAdministrativoById, createAdministrativo, updateAdministrativoById } from '../controllers/administrativoController.js';

const router = Router();

router.get('/lista-admins', Administrativos);
router.get('/administrativo', AdministrativoId);
router.delete('/administrativo', deleteAdministrativoById);
router.post('/administrativo', createAdministrativo);
router.put('/administrativo', updateAdministrativoById);

export default router;
