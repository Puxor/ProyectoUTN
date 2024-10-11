import express from 'express';
import { Pisos, PisoId} from '../controllers/pisoController.js'; 

const router = express.Router();

router.get('/lista-pisos', Pisos); 
router.get('/piso', PisoId);

export default router; 
