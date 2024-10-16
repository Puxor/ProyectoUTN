import express from 'express';
import { Pisos, PisoId, deletePisoById, createPiso, updatePisoById} from '../controllers/pisoController.js'; 

const router = express.Router();

router.get('/lista-pisos', Pisos); 
router.get('/piso', PisoId);
router.delete('/piso', deletePisoById);
router.post('/piso', createPiso);
router.put('/piso', updatePisoById);    

export default router; 
